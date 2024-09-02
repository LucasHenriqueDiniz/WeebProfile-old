import formatDisplay from "./formatDisplay";
import { DISPLAY_STYLE_TYPE, LASTUPDATED_TYPE } from "../../../types/envTypes";

async function filterLastUpdatedGist(
  data: any[],
  count: any,
  displayStyle: DISPLAY_STYLE_TYPE,
  lastUpdatedType: LASTUPDATED_TYPE
) {
  const lastUpdated = data.slice(0, count);
  const filteredLastUpdated = lastUpdated.map(
    (item: {
      entry: { title: any };
      score: any;
      episodes_seen?: any;
      episodes_total?: any;
      status: any;
      chapters_read?: any;
      chapters_total?: any;
    }) => {
      switch (lastUpdatedType) {
        case "anime":
          var title = item.entry.title;
          var score = item.score;
          var seenEpisodes = item.episodes_seen;
          var totalEpisodes = item.episodes_total;
          var status = item.status;

          return formatDisplay(title, displayStyle, seenEpisodes, totalEpisodes, score, status);
        case "manga":
          var title = item.entry.title;
          var score = item.score;
          var readChapters = item.chapters_read;
          var totalChapters = item.chapters_total;
          var status = item.status;

          return formatDisplay(title, displayStyle, readChapters, totalChapters, score, status);
        default:
          throw new Error("Invalid lastUpdatedType");
      }
    }
  );

  return filteredLastUpdated;
}

export default filterLastUpdatedGist;
