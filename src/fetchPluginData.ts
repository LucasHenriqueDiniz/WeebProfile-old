import envType from "../types/envType";
import fetchGithubData from "./plugins/github/services/fetchGithub";
import { githubResponse } from "./plugins/github/types";
import LastFmApi from "./plugins/lastfm/services/lastFmApi";
import { LastFmData } from "./plugins/lastfm/types/lastFmTypes";
import { fetchMalData } from "./plugins/mal/services/malApi";
import { MalData } from "./plugins/mal/types/malTypes";

export interface pluginsData {
  mal: MalData | null;
  lastfm: LastFmData | null;
  github: githubResponse | null;
}

async function fetchPluginData(env: envType): Promise<pluginsData> {
  const pluginData: pluginsData = {
    mal: null,
    lastfm: null,
    github: null,
  };

  if (env.pluginMal) {
    pluginData.mal = await fetchMalData(env.pluginMal, env.pluginMal.username);
  }

  if (env.pluginLastfm) {
    pluginData.lastfm = await LastFmApi(env.pluginLastfm);
  }

  if (env.pluginGithub) {
    pluginData.github = await fetchGithubData(env.pluginGithub, env.ghToken);
  }

  return pluginData;
}

export default fetchPluginData;
