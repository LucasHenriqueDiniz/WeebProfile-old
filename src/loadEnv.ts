import dotenv from "dotenv";
import envType from "../types/envType";
import isNodeEnvironment from "../utils/isNodeEnv";
import loadPlugin from "../utils/loadPlugin";
import splitString from "../utils/splitString";
import GITHUB_ENV_VARIABLES from "./plugins/github/ENV_VARIABLES";
import GithubPlugin from "./plugins/github/types/envGithub";
import LASTFM_ENV_VARIABLES from "./plugins/lastfm/ENV_VARIABLES";
import LastFmPlugin from "./plugins/lastfm/types/envLastFM";
import MAL_ENV_VARIABLES from "./plugins/mal/ENV_VARIABLES";
import MyAnimeListPlugin from "./plugins/mal/types/envMal";

if (isNodeEnvironment()) {
  dotenv.config();
}

function loadEnv(): envType {
  console.log("LOADING ENV");
  const env = process.env;
  const gistId = env.GIST_ID;
  const ghToken = env.GH_TOKEN;

  if (!gistId) {
    throw new Error("Missing GIST_ID, please add it to your environment variables");
  }

  if (!ghToken) {
    throw new Error("Missing GH_TOKEN, please add it to your environment variables");
  }

  const filename = env.FILENAME ?? "WeebProfile.svg";
  const storageMethod = env.STORAGE_METHOD?.toLowerCase() ?? "gist";
  const activePlugins: string[] = [];
  const size = env.SIZE?.toLowerCase() ?? "half";
  const pluginsOrder = splitString(env.PLUGINS_ORDER ?? "github, mal, lastfm");
  const style = env.STYLE ?? "default";
  const customCss = env.CUSTOM_CSS;
  const customPath = env.CUSTOM_PATH;

  if (storageMethod !== "gist" && storageMethod !== "local" && storageMethod !== "repository") {
    throw new Error("Invalid STORAGE_METHOD: " + storageMethod);
  }

  if (size !== "half" && size !== "full") {
    throw new Error("Invalid SIZE: " + size);
  }

  const malPluginConfig = loadPlugin<MyAnimeListPlugin>(env, activePlugins, MAL_ENV_VARIABLES, "mal");
  const lastfmPluginConfig = loadPlugin<LastFmPlugin>(env, activePlugins, LASTFM_ENV_VARIABLES, "lastfm");
  const githubPluginConfig = loadPlugin<GithubPlugin>(env, activePlugins, GITHUB_ENV_VARIABLES, "github");
  const baseEnv = {
    gistId: gistId,
    ghToken: ghToken,
    filename: filename,
    size: size,
    style: style,
    storageMethod: storageMethod,
    customCss: customCss,
    pluginsOrder: pluginsOrder,
    customPath: customPath,
    activePlugins: activePlugins,
  };
  return {
    ...baseEnv,
    pluginMal: malPluginConfig,
    pluginLastfm: lastfmPluginConfig,
    pluginGithub: githubPluginConfig,
  };
}

export default loadEnv;
