import dotenv from "dotenv";
import toBoolean from "../utils/toBoolean";
import renderMyAnimeList, { MyAnimeListPlugin } from "./plugins/mal/mal";
import envDefaults from "./envDefaults";
import renderBase from "./plugins/base";
import renderLastFM from "./plugins/lastfm";
import storeInGist from "./methods/gist/storeInGist";
import splitString from "../utils/splitEnvString";
import SvgContainer from "./base/SvgContainer";
import foreignObject from "./base/foreignObject";

dotenv.config();

function loadEnv() {
  const env = process.env;

  const baseEnv = {
    gistId: env.GIST_ID as string,
    ghToken: env.GH_TOKEN as string,
    filename: env.FILENAME as string,
    base: env.BASE ?? envDefaults.BASE,
    hideMain: toBoolean(env.HIDE_MAIN),
    sortOrder: env.SORT_ORDER as string,
    storeMethod: env.STORE_METHOD ?? envDefaults.STORE_METHOD,
  };

  function loadPluginMal(): { pluginMal: MyAnimeListPlugin } | "" {
    const plugin_mal = toBoolean(process.env.PLUGIN_MAL as string);
    if (!plugin_mal || plugin_mal !== true) {
      return "";
    }

    const plugin_mal_username = process.env.PLUGIN_MAL_USERNAME as string;
    if (!plugin_mal_username) {
      throw new Error("Missing PLUGIN_MAL_USERNAME");
    }

    const plugin_mal_sections = process.env.PLUGIN_MAL_SECTIONS ?? envDefaults.PLUGIN_MAL_SECTIONS;
    const plugin_mal_media = process.env.PLUGIN_MAL_MEDIA ?? envDefaults.PLUGIN_MAL_MEDIA;
    const plugin_mal_style = process.env.PLUGIN_MAL_STYLE ?? envDefaults.PLUGIN_MAL_STYLE;

    return {
      pluginMal: {
        plugin_mal_username: plugin_mal_username,
        plugin_mal_sections: splitString(plugin_mal_sections),
        plugin_mal_style: plugin_mal_style as "classic" | "terminal",
        plugin_mal_media: splitString(plugin_mal_media),
      },
    };
  }

  function loadPluginLastfm() {
    const plugin_lastfm = toBoolean(process.env.PLUGIN_LASTFM as string);

    if (!plugin_lastfm || plugin_lastfm !== true) {
      return "";
    }

    const plugin_lastfm_username = process.env.PLUGIN_LASTFM_USERNAME as string;

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
  };
}

async function main() {
  const { gistId, ghToken, filename, base, sortOrder, storeMethod, hideMain, pluginMal, pluginLastfm } = loadEnv();

  var activePlugins = [];
  let base_foreignObj = "";
  let plugin_mal_foreignObj = "";
  let plugin_lastfm_foreignObj = "";
  let data = "";

  if (base !== "" || hideMain) {
    activePlugins.push("base");
    const splitBase = base.split(",");
    base_foreignObj = renderBase({ base: splitBase });
  }

  if (pluginMal) {
    activePlugins.push("mal");
    plugin_mal_foreignObj = renderMyAnimeList(pluginMal);
  }

  if (pluginLastfm) {
    activePlugins.push("lastfm");
    plugin_lastfm_foreignObj = renderLastFM(pluginLastfm);
  }

  //sort active plugins based on sortOrder
  if (sortOrder) {
    activePlugins.sort((a, b) => {
      return sortOrder.indexOf(a) - sortOrder.indexOf(b);
    });
  }

  //push all active plugins to data
  activePlugins.map((plugin) => {
    switch (plugin) {
      case "base":
        data += base_foreignObj;
        break;
      case "mal":
        data += plugin_mal_foreignObj;
        break;
      case "lastfm":
        data += plugin_lastfm_foreignObj;
        break;
      default:
        throw new Error("Invalid plugin");
    }
  });

  var svgElement = SvgContainer({ children: foreignObject({ children: data }), width: 480, height: 888 });

  //store data
  switch (storeMethod) {
    case "gist":
      await storeInGist(gistId, ghToken, svgElement, filename);
      break;
    case "local":
      break;
    default:
      throw new Error("Invalid STORE_METHOD");
  }
}

main();
