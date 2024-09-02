import fillEmptySpaces from "../utils/fillEmptySpaces";

import myAnimeListRequest from "../utils/malApi";
import updateGithubGist from "../utils/githubApi";

import filterFavoritesGist from "./methods/gist/filterFavorites";
import filterLastUpdatedGist from "./methods/gist/filterLastUpdates";
import filterStatisticsGist from "./methods/gist/filterStatistics";
import { KoreFile, createFsAdaptor, createGitHubAdaptor, createKoreFile } from "korefile";

import {
  API_CONTENT_TYPE,
  DISPLAY_STYLE_TYPE,
  FAVORITES_TYPE,
  LASTUPDATED_TYPE,
  README_DISPLAY_TYPES,
  STATISTICS_TYPE,
  WHERE_IS_SHOWN_TYPE,
} from "../types/envTypes";

import dotenv from "dotenv";
import filterProfile from "./readme/filterProfile";
dotenv.config();

async function main() {
  const malUsername = process.env.MAL_USERNAME as string;
  const gistId = process.env.GIST_ID as string;
  const ghToken = process.env.GH_TOKEN as string;

  var gistTitle = process.env.GIST_TITLE as string | undefined | null;
  var DISPLAY_COUNT = parseInt(process.env.DISPLAY_COUNT || "5") as number;

  const WHERE_IS_SHOWN = process.env.WHERE_IS_SHOWN as WHERE_IS_SHOWN_TYPE;
  const API_CONTENT = process.env.API_CONTENT as API_CONTENT_TYPE;
  const DISPLAY_STYLE = process.env.DISPLAY_STYLE as DISPLAY_STYLE_TYPE;

  const FAVORITES_TYPE = process.env.FAVORITES_TYPE as FAVORITES_TYPE;
  const STATISTICS_TYPE = process.env.STATISTICS_TYPE as STATISTICS_TYPE;
  const LASTUPDATED_TYPE = process.env.LASTUPDATED_TYPE as LASTUPDATED_TYPE;

  const REPOSITORY_OWNER = process.env.REPOSITORY_OWNER as string;
  const REPOSITORY_NAME = process.env.REPOSITORY_NAME as string;

  const README_FAVORITES_TYPES = ["anime", "manga", "people", "characters"];

  const README_PROFILE_FAVORITE_SECTIONS = process.env.README_PROFILE_FAVORITE_SECTIONS as string;

  // Validate environment variables
  if (!malUsername || !gistId || !ghToken || !WHERE_IS_SHOWN || !API_CONTENT) {
    throw new Error("Essential environment variables are not set.");
  }

  // Validate DISPLAY_COUNT
  if (WHERE_IS_SHOWN === "gist" && DISPLAY_COUNT > 5) {
    DISPLAY_COUNT = 5;
  }

  try {
    const data = await myAnimeListRequest(malUsername, API_CONTENT);

    if (WHERE_IS_SHOWN === "gist") {
      if (API_CONTENT === "favorites") {
        const animeData = data.anime;
        const mangaData = data.manga;
        const characterData = data.characters;
        const peopleData = data.people;

        switch (FAVORITES_TYPE) {
          case "anime":
            if (!gistTitle) {
              gistTitle = "🌸 Favorites Animes";
            }

            const favoritesAnime = await filterFavoritesGist(
              animeData,
              DISPLAY_COUNT,
              FAVORITES_TYPE
            );
            await updateGithubGist(gistId, ghToken, favoritesAnime, gistTitle);
            break;
          case "manga":
            if (!gistTitle) {
              gistTitle = "🌸 Favorites Mangas";
            }

            const favoritesManga = await filterFavoritesGist(
              mangaData,
              DISPLAY_COUNT,
              FAVORITES_TYPE
            );
            await updateGithubGist(gistId, ghToken, favoritesManga, gistTitle);
            break;
          case "people":
            if (!gistTitle) {
              gistTitle = "🌸 Favorites People";
            }

            const favoritesPeople = await filterFavoritesGist(
              peopleData,
              DISPLAY_COUNT,
              FAVORITES_TYPE
            );
            await updateGithubGist(gistId, ghToken, favoritesPeople, gistTitle);
            break;
          case "characters":
            if (!gistTitle) {
              gistTitle = "🌸 Favorites Characters";
            }

            const favoritesCharacters = await filterFavoritesGist(
              characterData,
              DISPLAY_COUNT,
              FAVORITES_TYPE
            );
            await updateGithubGist(gistId, ghToken, favoritesCharacters, gistTitle);
            break;
        }
      } else if (API_CONTENT === "last_updated") {
        const animeData = data.anime;
        const mangaData = data.manga;

        switch (LASTUPDATED_TYPE) {
          case "anime":
            if (!gistTitle) {
              gistTitle = "🌸 Last Updated Animes";
            }

            let lastUpdatedAnime = await filterLastUpdatedGist(
              animeData,
              DISPLAY_COUNT,
              DISPLAY_STYLE,
              LASTUPDATED_TYPE
            );
            await updateGithubGist(gistId, ghToken, lastUpdatedAnime, gistTitle);
            break;
          case "manga":
            if (!gistTitle) {
              gistTitle = "🌸 Last Updated Mangas";
            }

            let lastUpdatedManga = await filterLastUpdatedGist(
              mangaData,
              DISPLAY_COUNT,
              DISPLAY_STYLE,
              LASTUPDATED_TYPE
            );
            await updateGithubGist(gistId, ghToken, lastUpdatedManga, gistTitle);
            break;
          case "both":
            if (!gistTitle) {
              gistTitle = "🌸 Last Updated Animes & Mangas";
            }

            let lastUpdatedAnime_ = await filterLastUpdatedGist(
              animeData,
              DISPLAY_COUNT,
              DISPLAY_STYLE,
              "anime"
            );
            let lastUpdatedManga_ = await filterLastUpdatedGist(
              mangaData,
              DISPLAY_COUNT,
              DISPLAY_STYLE,
              "manga"
            );
            let lastUpdatedBoth = lastUpdatedAnime_
              .concat(lastUpdatedManga_)
              .slice(0, DISPLAY_COUNT);
            await updateGithubGist(gistId, ghToken, lastUpdatedBoth, gistTitle);
            break;
        }
      } else if (API_CONTENT === "statistics") {
        if (!gistTitle) {
          if (STATISTICS_TYPE === "anime" || STATISTICS_TYPE === "anime-simplified") {
            gistTitle = "🌸 Anime Statistics";
          } else if (STATISTICS_TYPE === "manga" || STATISTICS_TYPE === "manga-simplified") {
            gistTitle = "🌸 Manga Statistics";
          } else if (STATISTICS_TYPE === "both") {
            gistTitle = "🌸 Anime & Manga Statistics";
          } else {
            throw new Error("Statistics type not supported.");
          }
        }

        const statistics = await filterStatisticsGist(data);
        const statisticsAnime = statistics.anime;
        const statisticsManga = statistics.manga;
        var statisticsGist = [] as string[];

        function formatGistLine(firstContent: string, secondContent: string | number) {
          if (typeof secondContent === "number") {
            secondContent = secondContent.toString();
          }

          return `${firstContent} ${fillEmptySpaces(
            firstContent,
            secondContent.length,
            "."
          )} ${secondContent}`;
        }
        switch (STATISTICS_TYPE) {
          case "anime":
            // 🕒 Days Watched 9 ........................... Mean Score 8.5 📈
            statisticsGist = [
              formatGistLine(
                `🕒 Days Watched ${statisticsAnime.days_watched}`,
                `Mean Score ${statisticsAnime.mean_score} 📈`
              ),
              formatGistLine(
                `📺 Watching ${statisticsAnime.watching}`,
                `Completed ${statisticsAnime.completed} ☑️`
              ),
              formatGistLine(
                `⏸️ On Hold ${statisticsAnime.on_hold}`,
                `Dropped ${statisticsAnime.dropped} ❌`
              ),
              formatGistLine(
                `📅 Plan to Watch ${statisticsAnime.plan_to_watch}`,
                `Total Entries ${statisticsAnime.total_entries} 💯`
              ),
              formatGistLine(
                `🎬 EP's Watched ${statisticsAnime.episodes_watched}`,
                `Rewatched ${statisticsAnime.rewatched} 🔄`
              ),
            ];
            break;
          case "anime-simplified":
            // 🕒 Days Watched ........................... 7
            statisticsGist = [
              formatGistLine("🕒 Days Watched", statisticsAnime.days_watched),
              formatGistLine("📺 Animes:", statisticsAnime.completed),
              formatGistLine("📅 Plan to Watch:", statisticsAnime.plan_to_watch),
              formatGistLine("☑️ Completed:", statisticsAnime.completed),
              formatGistLine("📺 Watching:", statisticsAnime.watching),
            ];
            break;
          case "manga":
            // 🕒 Days Read 9 ........................... Mean Score 8.5 📈
            statisticsGist = [
              formatGistLine(
                `🕒 Days Read ${statisticsManga.days_read}`,
                `Mean Score ${statisticsManga.mean_score} 📈`
              ),
              formatGistLine(
                `📖 Reading ${statisticsManga.reading}`,
                `Completed ${statisticsManga.completed} ☑️`
              ),
              formatGistLine(
                `⏸️ On Hold ${statisticsManga.on_hold}`,
                `Dropped ${statisticsManga.dropped} ❌`
              ),
              formatGistLine(
                `📅 Plan to Read ${statisticsManga.plan_to_read}`,
                `Total Entries ${statisticsManga.total_entries} ▶️`
              ),
              formatGistLine(
                `📖 CH's Read ${statisticsManga.chapters_read}`,
                `Volumes Read ${statisticsManga.volumes_read} 📖`
              ),
            ];
            break;
          case "manga-simplified":
            // 🕒 Days Read ........................... 7
            statisticsGist = [
              formatGistLine("🕒 Days Read", statisticsManga.days_read),
              formatGistLine("📖 Reading", statisticsManga.reading),
              formatGistLine("☑️ Completed", statisticsManga.completed),
              formatGistLine("📅 Plan to Read", statisticsManga.plan_to_read),
              formatGistLine("📖 CH's Read", statisticsManga.chapters_read),
            ];
            break;

          case "both":
            // ⏸️ On Hold: 8 ........................... On Hold: 7 ⏸️
            statisticsGist = [
              formatGistLine(
                `🕒 Days Watched ${statisticsAnime.days_watched}`,
                `Days Read ${statisticsManga.days_read} 🕒`
              ),
              formatGistLine(
                `📈 Mean Score ${statisticsAnime.mean_score}`,
                `Mean Score ${statisticsManga.mean_score} 📈`
              ),
              formatGistLine(
                `📺 Watching ${statisticsAnime.watching}`,
                `Reading ${statisticsManga.reading} 📖`
              ),
              formatGistLine(
                `☑️ Completed ${statisticsAnime.completed}`,
                `Completed ${statisticsManga.completed} ☑️`
              ),
              formatGistLine(
                `🎬 EP's Watched ${statisticsAnime.episodes_watched}`,
                `CH's Read ${statisticsManga.chapters_read} 📖`
              ),
            ];
            break;
        }

        await updateGithubGist(gistId, ghToken, statisticsGist, gistTitle);
      }
    } else if (WHERE_IS_SHOWN === "readme") {
      if (!REPOSITORY_OWNER || !REPOSITORY_NAME) {
        throw new Error("Essential environment variables are not set.");
      }

      const patternstart = "<!-- MAL_README_ACTIVITY:start -->";
      const patternend = "<!-- MAL_README_ACTIVITY:end -->";

      const koreFile = createKoreFile({
        adaptor: createGitHubAdaptor({
          owner: REPOSITORY_OWNER,
          repo: REPOSITORY_NAME,
          ref: "heads/main",
          token: ghToken,
        }),
      });

      const readmeFile = await koreFile.readFile("README.md");

      if (!readmeFile) {
        throw new Error("No README.md found");
      }

      if (!readmeFile.includes(patternstart)) {
        throw new Error("No pattern start found");
      }

      if (!readmeFile.includes(patternend)) {
        throw new Error("No pattern end found");
      }

      // replace start to end with none
      let startIndex = readmeFile.indexOf(patternstart);
      let endIndex = readmeFile.indexOf(patternend);

      let readmeNewData = "";

      switch (API_CONTENT) {
        case "profile":
          readmeNewData = filterProfile(data);
          break;
        case "favorites":
          console.log("NOT IMPLEMENTED YET FAV", API_CONTENT);
          break;
        case "last_updated":
          console.log("NOT IMPLEMENTED YET LU", API_CONTENT);
          break;
        case "statistics":
          console.log("NOT IMPLEMENTED YET STAT", API_CONTENT);
          break;
        default:
          throw new Error("API_CONTENT not supported.");
      }

      readmeNewData =
        readmeFile.substring(0, startIndex + patternstart.length) +
        "\n\n" +
        readmeNewData +
        "\n\n" +
        "<sub>Last updated by MAL-Readme-Activity</sub>" +
        readmeFile.substring(endIndex, readmeFile.length);

      if (readmeFile === readmeNewData) {
        console.log("No changes in the README file.");
        return;
      }

      try {
        await koreFile.writeFile("README.md", readmeNewData);
        console.log("README.md updated successfully.");
      } catch (error) {
        throw new Error("Failed to update README.md, check the permissions of your GitHub token.");
      }
    }
  } catch (error) {
    console.error("Error occurred: ", error);
  } finally {
    console.log("Process finished.");
  }
}

main();
