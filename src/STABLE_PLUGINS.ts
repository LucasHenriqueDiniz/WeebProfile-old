import ENV_VARIABLES_TYPE from "../types/envVariables";
import splitString from "../utils/splitString";
import GITHUB_ENV_VARIABLES from "./plugins/github/ENV_VARIABLES";
import { allGIThubSections } from "./plugins/github/types/envGithub";
import LASTFM_ENV_VARIABLES from "./plugins/lastfm/ENV_VARIABLES";
import { allLastFmSections } from "./plugins/lastfm/types/envLastFM";
import MAL_ENV_VARIABLES from "./plugins/mal/ENV_VARIABLES";
import { AllMyAnimeListSections } from "./plugins/mal/types/envMal";

export interface Plugin {
  name: string;
  envVariables: Record<string, ENV_VARIABLES_TYPE>;
  sections: string[];
}

const STABLE_PLUGINS: Plugin[] = [
  { name: "mal", envVariables: MAL_ENV_VARIABLES, sections: splitString(AllMyAnimeListSections) },
  { name: "lastfm", envVariables: LASTFM_ENV_VARIABLES, sections: splitString(allLastFmSections) },
  { name: "github", envVariables: GITHUB_ENV_VARIABLES, sections: splitString(allGIThubSections) },
];

export default STABLE_PLUGINS;
