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

    const plugin_mal_profile_media = process.env.PLUGIN_MAL_PROFILE_MEDIA ?? envDefaults.PLUGIN_MAL_PROFILE_MEDIA;

    const plugin_mal_favorites_media = process.env.PLUGIN_MAL_FAVORITE_MEDIA ?? envDefaults.PLUGIN_MAL_FAVORITES_MEDIA;
    const plugin_mal_favorites_rows = process.env.PLUGIN_MAL_FAVORITES_ROWS ?? envDefaults.PLUGIN_MAL_FAVORITES_ROWS;

    const plugin_mal_lastactivity_media = process.env.PLUGIN_MAL_LASTACTIVITY_MEDIA ?? envDefaults.PLUGIN_MAL_LASTACTIVITY_MEDIA;

    return {
      pluginMal: {
        plugin_mal_username: plugin_mal_username,
        plugin_mal_sections: splitString(plugin_mal_sections),
        plugin_mal_style: plugin_mal_style as "classic" | "terminal",
        plugin_mal_profile_media: splitString(plugin_mal_profile_media),
        plugin_mal_favorites_media: splitString(plugin_mal_favorites_media),
        plugin_mal_favorites_rows: parseInt(plugin_mal_favorites_rows),
        plugin_mal_lastactivity_media: splitString(plugin_mal_lastactivity_media),
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

  return {
    ...baseEnv,
    ...loadPluginMal(),
    ...loadPluginLastfm(),
    activePlugins: activePlugins,
  };
}

export default loadEnv;
