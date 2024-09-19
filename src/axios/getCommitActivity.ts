import axios from "axios";
import Bottleneck from "bottleneck";

export interface GithubCommitActivity {
  totalCommits: number;
  totalAdditions: number;
  totalDeletions: number;

  highestCommitStreak: number;
  averageCommitPerDay: number;
  currentStreak: number;
  dayWithMostCommits: string;
}

export async function getGithubCommitActivity(username: string, token: string, limiter: Bottleneck): Promise<GithubCommitActivity> {
  const query = `
      query commitActivity($login: String!) {
        user(login: $login) {
          contributionsCollection {
            totalCommitContributions
            totalPullRequestReviewContributions
            totalRepositoryContributions
            totalIssueContributions
            totalPullRequestContributions
          }
          repositories(first: 200) {
            nodes {
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(first: 200) {
                      edges {
                        node {
                          committedDate
                          additions
                          deletions
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
  const variables = {
    login: username,
  };

  try {
    // Rate-limited Axios request
    const response = await limiter.schedule(() =>
      axios.post(
        "https://api.github.com/graphql",
        {
          query,
          variables,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    const { totalCommitContributions, totalPullRequestReviewContributions, totalRepositoryContributions, totalIssueContributions, totalPullRequestContributions } =
      response.data.data.user.contributionsCollection;
    const repositories = response.data.data.user.repositories.nodes;

    const commitDates = repositories.reduce((acc: string[], repo: any) => {
      repo.defaultBranchRef?.target?.history?.edges?.forEach((edge: any) => {
        if (edge?.node?.committedDate) {
          acc.push(edge.node.committedDate);
        }
      });
      return acc;
    }, []);

    let totalCommits = commitDates.length;
    let totalAdditions = 0;
    let totalDeletions = 0;

    // Calculate additions and deletions while processing commit dates
    commitDates.forEach((date: string) => {
      const repo = repositories.find((repo) => repo.defaultBranchRef?.target?.history?.edges?.some((edge: any) => edge?.node?.committedDate === date));

      if (repo) {
        const commitEdge = repo.defaultBranchRef.target.history.edges.find((edge: any) => edge.node.committedDate === date);
        totalAdditions += commitEdge?.node?.additions || 0;
        totalDeletions += commitEdge?.node?.deletions || 0;
      }
    });

    let currentStreak = 0;
    let highestCommitStreak = 0;
    let currentStreakStartDate = new Date();
    let highestCommitStreakStartDate = new Date();
    let lastDate = new Date();
    let currentStreakCount = 0;
    let highestCommitStreakCount = 0;
    let dayWithMostCommits = "";

    commitDates.forEach((date: string) => {
      const currentDate = new Date(date);
      const diff = Math.abs(currentDate.getTime() - lastDate.getTime());
      const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

      if (diffDays > 1) {
        currentStreak = 0;
        currentStreakStartDate = currentDate;
        currentStreakCount = 0;
      }

      currentStreak++;
      currentStreakCount++;

      if (currentStreak > highestCommitStreak) {
        highestCommitStreak = currentStreak;
        highestCommitStreakStartDate = currentStreakStartDate;
        highestCommitStreakCount = currentStreakCount;
      }

      if (currentStreakCount > highestCommitStreakCount) {
        highestCommitStreakCount = currentStreakCount;
        highestCommitStreakStartDate = currentStreakStartDate;
      }

      if (currentStreak > 1 && currentStreak > highestCommitStreak) {
        highestCommitStreak = currentStreak;
        highestCommitStreakStartDate = currentStreakStartDate;
      }

      lastDate = currentDate;
    });

    const commitActivity: GithubCommitActivity = {
      totalCommits,
      totalAdditions,
      totalDeletions,
      highestCommitStreak,
      averageCommitPerDay: totalCommits / commitDates.length,
      currentStreak,
      dayWithMostCommits,
    };

    return commitActivity;
  } catch (error) {
    console.error("Error fetching commit activity data:", error);
    throw error;
  }
}
