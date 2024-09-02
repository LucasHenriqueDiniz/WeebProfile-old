import { AnimeStatistics, MangaStatistics } from "../../types/malStatisticsResponse";
import { alignTexts } from "../../utils/fillEmptySpaces";

function formatStatisticString(section: string): string {
  switch (section) {
    case "days_watched":
      return "📅 Days Watched";
    case "mean_score":
      return "⭐ Mean Score";
    case "watching":
      return "👀 Watching";
    case "completed":
      return "✅ Completed";
    case "on_hold":
      return "⏸️ On Hold";
    case "dropped":
      return "🔥 Dropped";
    case "plan_to_watch":
      return "📝 Plan to Watch";
    case "total_entries":
      return "📚 Total Entries";
    case "rewatched":
      return "🔁 Rewatched";
    case "episodes_watched":
      return "📺 Episodes Watched";
    case "days_read":
      return "📅 Days Read";
    case "reading":
      return "📖 Reading";
    case "chapters_read":
      return "📚 Chapters Read";
    case "volumes_read":
      return "📚 Volumes Read";
    case "reread":
      return "🔁 Reread";
    default:
      return "🌸" + section.charAt(0).toUpperCase() + section.slice(1).replace(/_/g, " ");
  }
}

function renderStatisticsText(
  PROFILE_STATISTICS_SECTIONS: string[],
  statistics: AnimeStatistics | MangaStatistics
) {
  let statisticsContent = "";
  PROFILE_STATISTICS_SECTIONS.forEach((section) => {
    const formattedSection = formatStatisticString(section);
    statisticsContent += `${formattedSection}: ${statistics[section]}\n`;
  });
  return statisticsContent;
}

function renderStatisticsTable(
  PROFILE_STATISTICS_SECTIONS: string[],
  statistics: AnimeStatistics | MangaStatistics
) {
  let statisticsContent = `
    | Statistic | Value |
    | :---   | :---: |
    `;
  PROFILE_STATISTICS_SECTIONS.forEach((section) => {
    const formattedSection = formatStatisticString(section);
    statisticsContent += `| ${formattedSection} | ${statistics[section]} |\n`;
  });
  return statisticsContent;
}

function renderStatisticsMarkdown(
  PROFILE_STATISTICS_SECTIONS: string[],
  statistics: AnimeStatistics | MangaStatistics
) {
  let statisticsContent = "";
  PROFILE_STATISTICS_SECTIONS.forEach((section) => {
    const formattedSection = formatStatisticString(section);
    statisticsContent += alignTexts(formattedSection, statistics[section].toString()) + "\n";
  });

  return `\`\`\`markdown\n${statisticsContent}\`\`\``;
}

export {
  renderStatisticsText,
  renderStatisticsTable,
  renderStatisticsMarkdown,
  formatStatisticString,
};
