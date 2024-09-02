type FAVORITES_TYPE = "anime" | "manga" | "people" | "characters";
type STATISTICS_TYPE = "anime" | "manga" | "both" | "anime-simplified" | "manga-simplified";
type LASTUPDATED_TYPE = "anime" | "manga" | "both";

type API_CONTENT_TYPE = "last_updated" | "statistics" | "favorites" | "profile";
type WHERE_IS_SHOWN_TYPE = "readme" | "gist";
type DISPLAY_STYLE_TYPE =
  | "bar"
  | "number"
  | "none"
  | "status-emoji"
  | "status-text"
  | "score-emoji"
  | "score-text"
  | "images";

type README_FAVORITES_TYPES = string[]; // FAVORITES_TYPE[]
type README_DISPLAY_TYPES =
  | "bar"
  | "number"
  | "none"
  | "status-emoji"
  | "status-text"
  | "score-emoji"
  | "score-text"
  | "images";

export {
  FAVORITES_TYPE,
  STATISTICS_TYPE,
  LASTUPDATED_TYPE,
  API_CONTENT_TYPE,
  WHERE_IS_SHOWN_TYPE,
  DISPLAY_STYLE_TYPE,
  README_FAVORITES_TYPES,
  README_DISPLAY_TYPES,
};
