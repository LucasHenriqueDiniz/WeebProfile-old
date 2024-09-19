import { githubResponse } from "../types";
import githubPlugin from "../types/envGithub";
import fetchUserData from "./UserData";
import fecthAllRepositoriesData from "./RepositoriesData";

async function fetchRateLimit(token: string) {
  const url = "https://api.github.com/rate_limit";
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}

async function fetchGithubData(plugin: githubPlugin, token: string): Promise<githubResponse> {
  const sections = plugin.sections;
  const login = plugin.username;

  let userData = null;
  let repositoriesData = null;

  if (sections.includes("profile")) {
    userData = await fetchUserData(login, token);
  }

  repositoriesData = await fecthAllRepositoriesData(login, token);

  const rateLimit = await fetchRateLimit(token);

  console.log("Rate limit remaining: \n", "Remaining: ", rateLimit.rate.remaining, "Used: ", rateLimit.rate.used);

  return { userData, repositoriesData } as githubResponse;
}

export default fetchGithubData;
