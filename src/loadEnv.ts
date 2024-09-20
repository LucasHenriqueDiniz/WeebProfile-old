import dotenv from "dotenv";
import isNodeEnvironment from "../utils/isNodeEnv";
import splitString from "../utils/splitString";
import toBoolean from "../utils/toBoolean";
import envDefaults from "./envDefaults";
import githubPlugin from "./plugins/github/types/envGithub";
import LastFmPlugin from "./plugins/lastfm/types/envLastFM";
import MyAnimeListPlugin from "./plugins/mal/types/envMal";

if (isNodeEnvironment()) {
  dotenv.config();
}

export interface Env {
  gistId: string;
  ghToken: string;
  filename: string;
  storeMethod: string;
  size: string;
  style: string;
  customCss?: string;
  activePlugins: string[];
  pluginsOrder: string[];

  // Plugins
  pluginMal?: MyAnimeListPlugin;
  pluginLastfm?: LastFmPlugin;
  pluginGithub?: githubPlugin;
}

function loadEnv(): Env {
  //@TODO find a better way to load env, maybe use a library? still need a way to put in the action.yml
  const env = process.env;

  console.log("LOADING ENV");
  const GIST_ID = env.GIST_ID as string;
  const GH_TOKEN = env.GH_TOKEN as string;

  if (!GIST_ID) {
    throw new Error("Missing GIST_ID");
  }

  if (!GH_TOKEN) {
    throw new Error("Missing GH_TOKEN");
  }

  const filename = (env.FILENAME as string) ?? envDefaults.FILENAME;
  const store_method = (env.STORE_METHOD?.toLowerCase() as string) ?? envDefaults.STORE_METHOD;
  const activePlugins = [] as string[];
  const size = (env.SIZE?.toLowerCase() as string) ?? envDefaults.SIZE;
  const pluginsOrder = splitString(env.PLUGINS_ORDER ?? envDefaults.PLUGINS_ORDER);

  if (store_method !== "gist" && store_method !== "repository") {
    throw new Error("Invalid STORE_METHOD: " + store_method);
  }

  if (size !== "half" && size !== "full") {
    throw new Error("Invalid SIZE: " + size);
  }

  const baseEnv = {
    gistId: GIST_ID,
    ghToken: GH_TOKEN,
    filename: filename,
    size: size, // default to  "half" | full [410px] or "full" [820px]
    style: env.STYLE ?? envDefaults.STYLE, // default to "default" | "terminal"
    storeMethod: store_method,
    customCss: env.CUSTOM_CSS,
    pluginsOrder: pluginsOrder,
  };

  function loadPluginMal(): { pluginMal: MyAnimeListPlugin } | null {
    const plugin_mal = toBoolean(process.env.PLUGIN_MAL as string);
    if (!plugin_mal || plugin_mal !== true) {
      return null;
    }

    const plugin_mal_username = process.env.PLUGIN_MAL_USERNAME as string;
    if (!plugin_mal_username) {
      console.error("Missing PLUGIN_MAL_USERNAME: ", plugin_mal_username);
      return null;
    }

    activePlugins.push("mal");
    const plugin_mal_sections = process.env.PLUGIN_MAL_SECTIONS ?? envDefaults.PLUGIN_MAL_SECTIONS;
    const plugin_mal_hide_header = toBoolean(env.PLUGIN_MAL_HIDE_HEADER);
    const plugin_mal_hide_terminal_emojis = toBoolean(env.PLUGIN_MAL_HIDE_TERMINAL_EMOJIS);

    const plugin_mal_anime_favorites_max = parseInt(process.env.PLUGIN_MAL_ANIME_FAVORITES_MAX ?? envDefaults.PLUGIN_MAL_ANIME_FAVORITES_MAX);
    const plugin_mal_anime_favorites_hide_title = toBoolean(env.PLUGIN_MAL_ANIME_FAVORITES_HIDE_TITLE);
    const plugin_mal_anime_favorites_title = env.PLUGIN_MAL_ANIME_FAVORITES_TITLE ?? envDefaults.PLUGIN_MAL_ANIME_FAVORITES_TITLE;

    const plugin_mal_people_favorites_hide_title = toBoolean(env.PLUGIN_MAL_PEOPLE_FAVORITES_HIDE_TITLE);
    const plugin_mal_people_favorites_title = env.PLUGIN_MAL_PEOPLE_FAVORITES_TITLE ?? envDefaults.PLUGIN_MAL_PEOPLE_FAVORITES_TITLE;
    const plugin_mal_people_favorites_max = parseInt(process.env.PLUGIN_MAL_PEOPLE_FAVORITES_MAX ?? envDefaults.PLUGIN_MAL_PEOPLE_FAVORITES_MAX);

    const plugin_mal_characters_favorites_title = env.PLUGIN_MAL_CHARACTERS_FAVORITES_TITLE ?? envDefaults.PLUGIN_MAL_CHARACTERS_FAVORITES_TITLE;
    const plugin_mal_characters_favorites_max = parseInt(process.env.PLUGIN_MAL_CHARACTERS_FAVORITES_MAX ?? envDefaults.PLUGIN_MAL_CHARACTERS_FAVORITES_MAX);
    const plugin_mal_characters_favorites_hide_title = toBoolean(env.PLUGIN_MAL_MANGA_FAVORITES_HIDE_TITLE);

    const plugin_mal_manga_favorites_hide_title = toBoolean(env.PLUGIN_MAL_PEOPLE_FAVORITES_HIDE_TITLE);
    const plugin_mal_manga_favorites_max = parseInt(process.env.PLUGIN_MAL_MANGA_FAVORITES_MAX ?? envDefaults.PLUGIN_MAL_MANGA_FAVORITES_MAX);
    const plugin_mal_manga_favorites_title = env.PLUGIN_MAL_MANGA_FAVORITES_TITLE ?? envDefaults.PLUGIN_MAL_MANGA_FAVORITES_TITLE;

    const plugin_mal_statistics_anime_title = env.PLUGIN_MAL_STATISTICS_ANIME_TITLE ?? envDefaults.PLUGIN_MAL_STATISTICS_ANIME_TITLE;
    const plugin_mal_statistics_manga_title = env.PLUGIN_MAL_STATISTICS_MANGA_TITLE ?? envDefaults.PLUGIN_MAL_STATISTICS_MANGA_TITLE;
    const plugin_mal_statistics_media = process.env.PLUGIN_MAL_STATISTICS_MEDIA ?? envDefaults.PLUGIN_MAL_STATISTICS_MEDIA;
    const plugin_mal_statistics_hide_title = toBoolean(env.PLUGIN_MAL_STATISTICS_HIDE_TITLE);

    const plugin_mal_anime_bar_title = env.PLUGIN_MAL_ANIME_BAR_TITLE ?? envDefaults.PLUGIN_MAL_ANIME_BAR_TITLE;
    const plugin_mal_anime_bar_hide_title = toBoolean(env.PLUGIN_MAL_ANIME_BAR_HIDE_TITLE);

    const plugin_mal_manga_bar_title = env.PLUGIN_MAL_MANGA_BAR_TITLE ?? envDefaults.PLUGIN_MAL_MANGA_BAR_TITLE;
    const plugin_mal_manga_bar_hide_title = toBoolean(env.PLUGIN_MAL_MANGA_BAR_HIDE_TITLE);

    const plugin_mal_statistics_simple_title = env.PLUGIN_MAL_STATISTICS_SIMPLE_TITLE ?? envDefaults.PLUGIN_MAL_STATISTICS_SIMPLE_TITLE;
    const plugin_mal_statistics_simple_hide_title = toBoolean(env.PLUGIN_MAL_STATISTICS_SIMPLE_HIDE_TITLE);

    const plugin_mal_last_activity_title = env.PLUGIN_MAL_LAST_ACTIVITY_TITLE ?? envDefaults.PLUGIN_MAL_LAST_ACTIVITY_TITLE;
    const plugin_mal_last_activity_max = parseInt(process.env.PLUGIN_MAL_LAST_ACTIVITY_MAX ?? envDefaults.PLUGIN_MAL_LAST_ACTIVITY_MAX);
    const plugin_mal_last_activity_hide_title = toBoolean(env.PLUGIN_MAL_LAST_ACTIVITY_HIDE_TITLE);

    return {
      pluginMal: {
        username: plugin_mal_username,
        sections: splitString(plugin_mal_sections),
        hide_header: plugin_mal_hide_header,
        hide_terminal_emojis: plugin_mal_hide_terminal_emojis,

        anime_favorites_max: plugin_mal_anime_favorites_max,
        anime_favorites_title: plugin_mal_anime_favorites_title,
        anime_favorites_hide_title: plugin_mal_anime_favorites_hide_title,

        characters_favorites_max: plugin_mal_characters_favorites_max,
        characters_favorites_hide_title: plugin_mal_characters_favorites_hide_title,
        character_favorites_title: plugin_mal_characters_favorites_title,

        people_favorites_max: plugin_mal_people_favorites_max,
        people_favorites_hide_title: plugin_mal_people_favorites_hide_title,
        people_favorites_title: plugin_mal_people_favorites_title,
        manga_favorites_title: plugin_mal_manga_favorites_title,

        manga_favorites_max: plugin_mal_manga_favorites_max,
        manga_favorites_hide_title: plugin_mal_manga_favorites_hide_title,

        statistics_simple_title: plugin_mal_statistics_simple_title,
        statistics_simple_hide_title: plugin_mal_statistics_simple_hide_title,

        statistics_anime_title: plugin_mal_statistics_anime_title,
        statistics_manga_title: plugin_mal_statistics_manga_title,
        statistics_media: splitString(plugin_mal_statistics_media),
        statistics_hide_title: plugin_mal_statistics_hide_title,

        anime_bar_title: plugin_mal_anime_bar_title,
        anime_bar_hide_title: plugin_mal_anime_bar_hide_title,

        manga_bar_title: plugin_mal_manga_bar_title,
        manga_bar_hide_title: plugin_mal_manga_bar_hide_title,

        last_activity_title: plugin_mal_last_activity_title,
        last_activity_max: plugin_mal_last_activity_max,
        last_activity_hide_title: plugin_mal_last_activity_hide_title,
      } as MyAnimeListPlugin,
    };
  }

  function loadPluginLastfm(): { pluginLastfm: LastFmPlugin } | null {
    const plugin_lastfm = toBoolean(process.env.PLUGIN_LASTFM as string);

    if (!plugin_lastfm || plugin_lastfm !== true) {
      return null;
    }

    activePlugins.push("lastfm");
    const plugin_lastfm_username = process.env.PLUGIN_LASTFM_USERNAME as string;

    if (!plugin_lastfm_username) {
      console.error("Missing PLUGIN_LASTFM_USERNAME: ", plugin_lastfm_username);
      return null;
    }

    const plugin_lastfm_sections = process.env.PLUGIN_LASTFM_SECTIONS ?? envDefaults.PLUGIN_LASTFM_SECTIONS;
    const plugin_lastfm_hide_header = toBoolean(env.PLUGIN_LASTFM_HIDE_HEADER);
    const plugin_lastfm_hide_intervals = toBoolean(env.PLUGIN_LASTFM_SHOW_INTERVALS);

    const plugin_lastfm_recenttracks_hide_title = toBoolean(env.PLUGIN_LASTFM_RECENTTRACKS_HIDE_TITLE);
    const plugin_lastfm_recenttracks_max = parseInt(process.env.PLUGIN_LASTFM_RECENTTRACKS_MAX ?? envDefaults.PLUGIN_LASTFM_RECENTTRACKS_MAX);

    const plugin_lastfm_topartists_hide_title = toBoolean(env.PLUGIN_LASTFM_TOPARTISTS_HIDE_TITLE);
    const plugin_lastfm_topartists_max = parseInt(process.env.PLUGIN_LASTFM_TOPARTISTS_MAX ?? envDefaults.PLUGIN_LASTFM_TOPARTISTS_MAX);

    const plugin_lastfm_topalbums_hide_title = toBoolean(env.PLUGIN_LASTFM_TOPALBUMS_HIDE_TITLE);
    const plugin_lastfm_topalbums_max = parseInt(process.env.PLUGIN_LASTFM_TOPALBUMS_MAX ?? envDefaults.PLUGIN_LASTFM_TOPALBUMS_MAX);

    const plugin_lastfm_toptracks_hide_title = toBoolean(env.PLUGIN_LASTFM_TOPTRACKS_HIDE_TITLE);
    const plugin_lastfm_toptracks_max = parseInt(process.env.PLUGIN_LASTFM_TOPTRACKS_MAX ?? envDefaults.PLUGIN_LASTFM_TOPTRACKS_MAX);

    const plugin_lastfm_statistics_hide_title = toBoolean(env.PLUGIN_LASTFM_STATISTICS_HIDE_TITLE);

    const plugin_lastfm_toptracks_title = env.PLUGIN_LASTFM_TOPTRACKS_TITLE ?? envDefaults.PLUGIN_LASTFM_TOPTRACKS_TITLE;
    const plugin_lastfm_topartists_title = env.PLUGIN_LASTFM_TOPARTISTS_TITLE ?? envDefaults.PLUGIN_LASTFM_TOPARTISTS_TITLE;
    const plugin_lastfm_topalbums_title = env.PLUGIN_LASTFM_TOPALBUMS_TITLE ?? envDefaults.PLUGIN_LASTFM_TOPALBUMS_TITLE;
    const plugin_lastfm_recenttracks_title = env.PLUGIN_LASTFM_RECENTTRACKS_TITLE ?? envDefaults.PLUGIN_LASTFM_RECENTTRACKS_TITLE;
    const plugin_lastfm_statistics_title = env.PLUGIN_LASTFM_STATISTICS_TITLE ?? envDefaults.PLUGIN_LASTFM_STATISTICS_TITLE;

    return {
      pluginLastfm: {
        username: plugin_lastfm_username,
        sections: splitString(plugin_lastfm_sections),
        hide_header: plugin_lastfm_hide_header,
        hide_intervals: plugin_lastfm_hide_intervals,

        statistics_hide_title: plugin_lastfm_statistics_hide_title,

        recent_tracks_hide_title: plugin_lastfm_recenttracks_hide_title,
        recent_tracks_max: plugin_lastfm_recenttracks_max,

        top_artists_max: plugin_lastfm_topartists_max,
        top_artists_hide_title: plugin_lastfm_topartists_hide_title,

        top_albums_max: plugin_lastfm_topalbums_max,
        top_albums_hide_title: plugin_lastfm_topalbums_hide_title,

        top_tracks_max: plugin_lastfm_toptracks_max,
        top_tracks_hide_title: plugin_lastfm_toptracks_hide_title,

        statistics_title: plugin_lastfm_statistics_title,
        recent_tracks_title: plugin_lastfm_recenttracks_title,
        top_artists_title: plugin_lastfm_topartists_title,
        top_albums_title: plugin_lastfm_topalbums_title,
        top_tracks_title: plugin_lastfm_toptracks_title,
      } as LastFmPlugin,
    };
  }

  function loadPluginGithub(): { pluginGithub: githubPlugin } | null {
    const plugin_github = toBoolean(process.env.PLUGIN_GITHUB as string);

    if (!plugin_github || plugin_github !== true) {
      return null;
    }

    const plugin_github_username = process.env.PLUGIN_GITHUB_USERNAME as string;

    if (!plugin_github_username) {
      console.error(`Missing PLUGIN_GITHUB_USERNAME: ${plugin_github_username}`);
      return null;
    }

    activePlugins.push("github");
    const plugin_github_sections = process.env.PLUGIN_GITHUB_SECTIONS ?? envDefaults.PLUGIN_GITHUB_SECTIONS;
    const plugin_github_hide_header = toBoolean(env.PLUGIN_GITHUB_HIDE_HEADER);

    const plugin_github_profile_hide_title = toBoolean(env.PLUGIN_GITHUB_PROFILE_HIDE_TITLE);

    const plugin_github_repositories_title = env.PLUGIN_GITHUB_REPOSITORIES_TITLE ?? envDefaults.PLUGIN_GITHUB_REPOSITORIES_TITLE;
    const plugin_github_repositories_hide_title = toBoolean(env.PLUGIN_GITHUB_REPOSITORIES_HIDE_TITLE);

    const plugin_github_favorite_languages_title = env.PLUGIN_GITHUB_FAVORITE_LANGUAGES_TITLE ?? envDefaults.PLUGIN_GITHUB_FAVORITE_LANGUAGES_TITLE;
    const plugin_github_favorite_languages_hide_title = toBoolean(env.PLUGIN_GITHUB_FAVORITE_LANGUAGES_HIDE_TITLE);

    const plugin_github_favorite_license_title = env.PLUGIN_GITHUB_FAVORITE_LICENSE_TITLE ?? envDefaults.PLUGIN_GITHUB_FAVORITE_LICENSE_TITLE;
    const plugin_github_favorite_license_hide_title = toBoolean(env.PLUGIN_GITHUB_FAVORITE_LICENSE_HIDE_TITLE);

    return {
      pluginGithub: {
        username: plugin_github_username,
        sections: splitString(plugin_github_sections),
        hide_header: plugin_github_hide_header,

        profile_hide_title: plugin_github_profile_hide_title,

        repositories_title: plugin_github_repositories_title,
        repositories_hide_title: plugin_github_repositories_hide_title,

        favorite_languages_title: plugin_github_favorite_languages_title,
        favorite_languages_hide_title: plugin_github_favorite_languages_hide_title,

        favorite_license_title: plugin_github_favorite_license_title,
        favorite_license_hide_title: plugin_github_favorite_license_hide_title,
      } as githubPlugin,
    };
  }

  console.log("LOADED ENV");
  return {
    ...baseEnv,
    ...loadPluginMal(),
    ...loadPluginLastfm(),
    ...loadPluginGithub(),
    activePlugins: activePlugins,
  };
}

export default loadEnv;
