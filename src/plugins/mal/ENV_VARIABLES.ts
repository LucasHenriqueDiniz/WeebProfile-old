import ENV_VARIABLES_TYPE from "../../../types/envVariables";
import MyAnimeListPlugin, { AllMyAnimeListSections } from "./types/envMal";

const MAL_ENV_VARIABLES: Record<keyof MyAnimeListPlugin, ENV_VARIABLES_TYPE> = {
  plugin_mal: { required: true, type: "boolean", description: "Enable MyAnimeList plugin" },
  username: { required: true, type: "string", description: "MyAnimeList username" },
  sections: {
    type: "stringArray",
    defaultValue: "statistics_simple, anime_favorites, last_activity",
    description: `Sections to display in the profile`,
  },
  hide_header: { type: "boolean", description: "Hide the header of the profile" },
  hide_terminal_emojis: { type: "boolean", description: "Hide the terminal emojis" },
  anime_favorites_max: { type: "number", defaultValue: "5", description: "Number of anime favorites to display" },
  anime_favorites_hide_title: { type: "boolean", description: "Hide the title of the anime favorites section" },
  anime_favorites_title: { type: "string", defaultValue: "Anime Favorites", description: "Title of the anime favorites section" },
  character_favorites_title: { type: "string", defaultValue: "Character Favorites", description: "Title of the character favorites section" },
  character_favorites_max: { type: "number", defaultValue: "5", description: "Number of character favorites to display" },
  character_favorites_hide_title: { type: "boolean", description: "Hide the title of the character favorites section" },
  people_favorites_hide_title: { type: "boolean", description: "Hide the title of the people favorites section" },
  people_favorites_title: { type: "string", defaultValue: "People Favorites", description: "Title of the people favorites section" },
  people_favorites_max: { type: "number", defaultValue: "5", description: "Number of people favorites to display" },
  manga_favorites_title: { type: "string", defaultValue: "Manga Favorites", description: "Title of the manga favorites section" },
  manga_favorites_max: { type: "number", defaultValue: "5", description: "Number of manga favorites to display" },
  manga_favorites_hide_title: { type: "boolean", description: "Hide the title of the manga favorites section" },
  statistics_anime_title: { type: "string", defaultValue: "Anime Statistics", description: "Title of the anime statistics section" },
  statistics_manga_title: { type: "string", defaultValue: "Manga Statistics", description: "Title of the manga statistics section" },
  statistics_media: { type: "string", defaultValue: "anime, manga", description: "Media to display statistics for" },
  statistics_hide_title: { type: "boolean", description: "Hide the title of the statistics section" },
  anime_bar_title: { defaultValue: "Anime Statistics", description: "Title of the anime statistics section" },
  anime_bar_hide_title: { type: "boolean", description: "Hide the title of the anime statistics section" },
  manga_bar_title: { type: "string", defaultValue: "Manga Statistics", description: "Title of the manga statistics section" },
  manga_bar_hide_title: { type: "boolean", description: "Hide the title of the manga statistics section" },
  statistics_simple_title: { type: "string", defaultValue: "Simple Statistics", description: "Title of the simple statistics section" },
  statistics_simple_hide_title: { type: "boolean", description: "Hide the title of the simple statistics section" },
  last_activity_title: { type: "string", defaultValue: "Last Activity", description: "Title of the last activity section" },
  last_activity_max: { type: "number", defaultValue: "6", description: "Number of activities to display" },
  last_activity_hide_title: { type: "boolean", description: "Hide the title of the last activity section" },
  favorites_hide_overlay: { type: "boolean", description: "Hide the overlay in the image with the name or title of the favorites section" },
};

export default MAL_ENV_VARIABLES;
