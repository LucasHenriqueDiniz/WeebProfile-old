import githubPlugin from "../src/plugins/github/types/envGithub";
import LastFmPlugin from "../src/plugins/lastfm/types/envLastFM";
import MyAnimeListPlugin from "../src/plugins/mal/types/envMal";

export interface Env {
  gistId: string;
  ghToken: string;
  filename: string;
  storageMethod: string;
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

export default Env;
