import ENV_VARIABLES_TYPE from "../../../types/envVariables";
import LastFmPlugin from "./types/envLastFM";

const LASTFM_ENV_VARIABLES: Record<keyof LastFmPlugin, ENV_VARIABLES_TYPE> = {
  plugin_lastfm: { required: true, type: "boolean", description: "Enable LastFM plugin" },
  username: { required: true, type: "string", description: "LastFM username" },
  sections: { type: "stringArray", defaultValue: "top_tracks", description: `Sections to display in the profile` },
  hide_header: { type: "boolean", description: "Hide the header of the profile" },
  hide_intervals: { type: "boolean", description: "Hide the intervals of the profile" },
  recent_tracks_hide_title: { type: "boolean", description: "Hide the title of the recent tracks section" },
  recent_tracks_max: { type: "number", defaultValue: "5", description: "Number of recent tracks to display" },
  top_artists_hide_title: { type: "boolean", description: "Hide the title of the top artists section" },
  top_artists_max: { type: "number", defaultValue: "5", description: "Number of top artists to display" },
  top_albums_hide_title: { type: "boolean", description: "Hide the title of the top albums section" },
  top_albums_max: { type: "number", defaultValue: "5", description: "Number of top albums to display" },
  top_tracks_hide_title: { type: "boolean", description: "Hide the title of the top tracks section" },
  top_tracks_max: { type: "number", defaultValue: "5", description: "Number of top tracks to display" },
  statistics_hide_title: { type: "boolean", description: "Hide the title of the statistics section" },
  top_tracks_title: { type: "string", defaultValue: "Top Tracks", description: "Title of the top tracks section" },
  top_artists_title: { type: "string", defaultValue: "Top Artists", description: "Title of the top artists section" },
  top_albums_title: { type: "string", defaultValue: "Top Albums", description: "Title of the top albums section" },
  recent_tracks_title: { type: "string", defaultValue: "Recent Tracks", description: "Title of the recent tracks section" },
  statistics_title: { type: "string", defaultValue: "Statistics", description: "Title of the statistics section" },
};

export default LASTFM_ENV_VARIABLES;
