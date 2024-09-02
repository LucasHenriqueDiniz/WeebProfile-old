import TerminalFrame from "../../base/TerminalFrame";
import { exampleLastUpdateResponse } from "../../test/exampleLastUpdatesResponse";
import { exampleStatisticsResponse } from "../../test/exampleStatisticsResponse";
import classicProfile from "./sections/classic/classic_profile";

export interface MyAnimeListPlugin {
  plugin_mal_username: string | undefined; // username
  plugin_mal_sections: string[] | undefined; // profile, favorites, history, stats
  plugin_mal_media: string[] | undefined; // anime, manga
  plugin_mal_style: "classic" | "terminal" | undefined; // classic, terminal
}

const sectionRenderers: Record<string, Record<string, (username: string, media: string) => string>> = {
  classic: {
    profile: (username: string, media: string) =>
      classicProfile({
        statisticsData: exampleStatisticsResponse[media],
        lastUpdatesData: exampleLastUpdateResponse[media],
        username: username,
      }),
    favorites: (username: string, media: string) => "<section>not implemented</section>",
    "last-updated": (username: string, media: string) => "<section>not implemented</section>",
  },
  terminal: {
    profile: (username: string, media: string) => "<section>not implemented</section>",
    favorites: (username: string, media: string) => "<section>not implemented</section>",
    "last-updated": (username: string, media: string) => "<section>not implemented</section>",
  },
};

export default function renderMyAnimeList(malPlugin: MyAnimeListPlugin): string {
  if (!malPlugin.plugin_mal_username || !malPlugin.plugin_mal_sections || !malPlugin.plugin_mal_media || !malPlugin.plugin_mal_style) {
    return "";
  }

  const style = malPlugin.plugin_mal_style;
  const media = malPlugin.plugin_mal_media;
  const sections = malPlugin.plugin_mal_sections;
  const username = malPlugin.plugin_mal_username;

  const sectionsToRender = sections.map((section) => {
    const renderedSectionsForMedia = [] as string[];
    media.map((media) => {
      renderedSectionsForMedia.push(sectionRenderers[style][section](username, media));
    });

    return renderedSectionsForMedia.join("\n");
  });

  switch (style) {
    case "classic":
      return sectionsToRender.join("\n");
    case "terminal":
      return TerminalFrame({ children: sectionsToRender.join("\n") });
    default:
      throw new Error("Invalid MAL style");
  }
}
