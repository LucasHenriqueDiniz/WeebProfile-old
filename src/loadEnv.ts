import splitString from "../utils/splitEnvString";
import toBoolean from "../utils/toBoolean";
import envDefaults from "./envDefaults";
import { LastFMPlugin } from "./plugins/lastfm/lastfm";
import { MyAnimeListPlugin } from "./plugins/mal/Mal";

export interface Env {
  gistId: string;
  ghToken: string;
  filename: string;
  base: string[] | null;
  sortOrder: string[] | null;
  storeMethod: string;
  hideMain: boolean;
  svg_columns: number;
  pluginMal?: MyAnimeListPlugin;
  pluginLastfm?: LastFMPlugin;
  activePlugins: string[];
}

function loadEnv(env: NodeJS.ProcessEnv): Env {
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
  const sort_order = env.SORT_ORDER as string;
  const store_method = (env.STORE_METHOD as string) ?? envDefaults.STORE_METHOD;
  const base = (env.BASE as string) ?? envDefaults.BASE;
  const svg_columns = (env.SVG_COLUMNS as string) ?? envDefaults.SVG_COLUMNS;
  const activePlugins = [] as string[];

  const baseEnv = {
    gistId: GIST_ID,
    ghToken: GH_TOKEN,
    filename: filename,
    svg_columns: parseInt(svg_columns),
    base: base === "" ? null : splitString(base),
    hideMain: toBoolean(env.HIDE_MAIN),
    sortOrder: sort_order ? splitString(sort_order) : null,
    storeMethod: store_method,
  };

  function loadPluginMal(): { pluginMal: MyAnimeListPlugin } | null {
    const plugin_mal = toBoolean(process.env.PLUGIN_MAL as string);
    if (!plugin_mal || plugin_mal !== true) {
      return null;
    }

    const plugin_mal_username = process.env.PLUGIN_MAL_USERNAME as string;
    if (!plugin_mal_username) {
      throw new Error("Missing PLUGIN_MAL_USERNAME");
    }

    activePlugins.push("mal");
    const plugin_mal_sections = process.env.PLUGIN_MAL_SECTIONS ?? envDefaults.PLUGIN_MAL_SECTIONS;
    const plugin_mal_style = process.env.PLUGIN_MAL_STYLE ?? envDefaults.PLUGIN_MAL_STYLE;

    const plugin_mal_lastupdates_max = parseInt(process.env.PLUGIN_MAL_LASTUPDATES_MAX ?? envDefaults.PLUGIN_MAL_LASTUPDATES_MAX);
    const plugin_mal_anime_favorites_max = parseInt(process.env.PLUGIN_MAL_ANIME_FAVORITES_MAX ?? envDefaults.PLUGIN_MAL_ANIME_FAVORITES_MAX);
    const plugin_mal_characters_favorites_max = parseInt(process.env.PLUGIN_MAL_CHARACTERS_FAVORITES_MAX ?? envDefaults.PLUGIN_MAL_CHARACTERS_FAVORITES_MAX);
    const plugin_mal_people_favorites_max = parseInt(process.env.PLUGIN_MAL_PEOPLE_FAVORITES_MAX ?? envDefaults.PLUGIN_MAL_PEOPLE_FAVORITES_MAX);
    const plugin_mal_manga_favorites_max = parseInt(process.env.PLUGIN_MAL_MANGA_FAVORITES_MAX ?? envDefaults.PLUGIN_MAL_MANGA_FAVORITES_MAX);

    return {
      pluginMal: {
        plugin_mal_username: plugin_mal_username,
        plugin_mal_sections: splitString(plugin_mal_sections),
        plugin_mal_style: plugin_mal_style as "classic" | "terminal" | "default",
        plugin_mal_hide_title: toBoolean(env.PLUGIN_MAL_HIDE_TITLE),
        plugin_mal_lastupdates_max: plugin_mal_lastupdates_max,
        plugin_mal_anime_favorites_max: plugin_mal_anime_favorites_max,
        plugin_mal_characters_favorites_max: plugin_mal_characters_favorites_max,
        plugin_mal_people_favorites_max: plugin_mal_people_favorites_max,
        plugin_mal_manga_favorites_max: plugin_mal_manga_favorites_max,
      },
    };
  }

  function loadPluginLastfm(): { pluginLastfm: LastFMPlugin } | null {
    const plugin_lastfm = toBoolean(process.env.PLUGIN_LASTFM as string);

    if (!plugin_lastfm || plugin_lastfm !== true) {
      return null;
    }

    activePlugins.push("lastfm");
    const plugin_lastfm_username = (process.env.PLUGIN_LASTFM_USERNAME as string) ?? "NO USERNAME";

    return {
      pluginLastfm: {
        plugin_lastfm_username: plugin_lastfm_username,
      },
    };
  }

  console.log("LOADED ENV");
  return {
    ...baseEnv,
    ...loadPluginMal(),
    ...loadPluginLastfm(),
    activePlugins: activePlugins,
  };
}

export default loadEnv;
