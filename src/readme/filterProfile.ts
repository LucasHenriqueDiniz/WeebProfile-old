import { AnimeFavorites, MalFavoritesResponse } from "../../types/malFavoritesResponse";
import { MalProfileResponse } from "../../types/malProfileResponse";
import renderFavoritesImages from "./renderFavoritesImages";
import defaultValues from "../../defaultValues";
import fillEmptySpaces, { alignTexts } from "../../utils/fillEmptySpaces";
import {
  AnimeStatistics,
  MalStatisticsResponse,
  MangaStatistics,
} from "../../types/malStatisticsResponse";
import {
  renderStatisticsMarkdown,
  renderStatisticsTable,
  renderStatisticsText,
} from "./profileHelpers";
import axios from "axios";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { saveAs } from "file-saver";

interface Response {
  mean_score: number;
  total_score: number;
  total_count: number;
  std_dev: string;
  items: DataItem[];
  scored_list_count: number;
  not_scored_list_count: number;
  list_count: number;
  is_lt_10_title?: boolean;
  is_complete_title_lt_5?: false;
  result?: boolean;
}

interface DataItem {
  item: string;
  item_label: string;
  item_count: number;
  item_ratio: string;
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
}

function renderFavoritesSection(
  PROFILE_FAVORITE_SECTIONS: string[],
  favorites: MalFavoritesResponse
) {
  let favoritesContent = "";

  PROFILE_FAVORITE_SECTIONS.map((section) => {
    switch (section) {
      case "anime":
        favoritesContent += renderFavoritesImages(favorites.anime, "📺 Favorite Anime");
        break;
      case "manga":
        favoritesContent += renderFavoritesImages(favorites.manga, "📖 Favorite Manga");
        break;
      case "characters":
        favoritesContent += renderFavoritesImages(favorites.characters, "🌸 Favorite Characters");
        break;
      case "people":
        favoritesContent += renderFavoritesImages(favorites.people, "🧑‍🤝‍🧑 Favorite People");
        break;
    }
  });
  return favoritesContent;
}

async function fetchChartData(url: string) {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Error fetching ${url}: ${response.status} ${response.statusText}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null;
  }
}

function createSvgChart(data: Response) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (ctx) {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.items.map((item) => item.item_label),
        datasets: [
          {
            label: "Score Distribution",
            data: data.items.map((item) => item.item_count),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const svgString = canvas.toDataURL("image/svg+xml");
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    saveAs(blob, "chart.svg");
  }
}

async function testScraping() {
  const response = await fetchChartData(
    "https://myanimelist.net/profile/Amayacrab/chart-data.json?type=anime-score-dist"
  );

  if (response) {
    createSvgChart(response);
  }
}

function renderStatisticsSection(
  PROFILE_STATISTICS_SECTIONS: string[],
  statistics: AnimeStatistics | MangaStatistics,
  title: string,
  DISPLAY_STYLE: string
) {
  let statisticsContent = `### ${title}\n`;
  // types | text / table / markdown

  switch (DISPLAY_STYLE) {
    case "text":
      renderStatisticsText(PROFILE_STATISTICS_SECTIONS, statistics);
      break;
    case "markdown":
      renderStatisticsMarkdown(PROFILE_STATISTICS_SECTIONS, statistics);
      break;
    case "table":
      renderStatisticsTable(PROFILE_STATISTICS_SECTIONS, statistics);
      break;
    case "test-scraping":
      testScraping();
      break;
    default:
      renderStatisticsText(PROFILE_STATISTICS_SECTIONS, statistics);
      break;
  }

  return statisticsContent;
}

function renderStatisticsProfileSection(
  PROFILE_STATISTICS_SECTIONS: string[],
  PROFILE_STATISTICS_ANIME_SECTIONS: string[],
  PROFILE_STATISTICS_MANGA_SECTIONS: string[],
  PROFILE_STATISTICS_DISPLAY_STYLE: string,
  statistics: MalStatisticsResponse
) {
  let statisticsContent = "";

  PROFILE_STATISTICS_SECTIONS.map((section) => {
    switch (section) {
      case "anime":
        statisticsContent += renderStatisticsSection(
          PROFILE_STATISTICS_ANIME_SECTIONS,
          statistics.anime,
          "📺 Anime Statistics",
          PROFILE_STATISTICS_DISPLAY_STYLE
        );
        break;
      case "manga":
        statisticsContent += renderStatisticsSection(
          PROFILE_STATISTICS_MANGA_SECTIONS,
          statistics.manga,
          "📖 Manga Statistics",
          PROFILE_STATISTICS_DISPLAY_STYLE
        );
        break;
    }
  });
  return statisticsContent;
}

export default function filterProfile(profile: MalProfileResponse) {
  const PROFILE_FAVORITE_SECTIONS = (
    process.env.README_PROFILE_FAVORITE_SECTIONS || defaultValues.README_PROFILE_FAVORITE_SECTIONS
  ).split(",");
  const PROFILE_STATISTICS_SECTIONS = (
    process.env.README_PROFILE_STATISTICS_SECTIONS || defaultValues.README_PROFILE_FAVORITE_SECTIONS
  ).split(",");
  const PROFILE_STATISTICS_ANIME_SECTIONS = (
    process.env.README_PROFILE_STATISTICS_ANIME_SECTIONS ||
    defaultValues.README_PROFILE_STATISTICS_ANIME_SECTIONS
  ).split(",");
  const PROFILE_STATISTICS_MANGA_SECTIONS = (
    process.env.README_PROFILE_STATISTICS_MANGA_SECTIONS ||
    defaultValues.README_PROFILE_STATISTICS_MANGA_SECTIONS
  ).split(",");
  const DISPLAY_STYLE = process.env.README_PROFILE_STATISTICS_STYLE || "table";

  const username = profile.data.username;
  const about = profile.about;
  const profile_url = profile.data.url;

  const favorites = profile.data.favorites;
  const statistics = profile.data.statistics;
  const last_updated = profile.data.updates;

  const readme = `# 🌸 MyAnimeList Profile
## ❤️ Favorites
${renderFavoritesSection(PROFILE_FAVORITE_SECTIONS, favorites)}

## 📊 Statistics
${renderStatisticsProfileSection(
  PROFILE_STATISTICS_SECTIONS,
  PROFILE_STATISTICS_ANIME_SECTIONS,
  PROFILE_STATISTICS_MANGA_SECTIONS,
  DISPLAY_STYLE,
  statistics
)}
`;

  return readme;
}
