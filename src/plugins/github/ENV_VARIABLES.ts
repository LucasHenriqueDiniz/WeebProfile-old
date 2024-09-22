import ENV_VARIABLES_TYPE from "../../../types/envVariables";
import githubPlugin, { allGIThubSections } from "./types/envGithub";

const GITHUB_ENV_VARIABLES: Record<keyof githubPlugin, ENV_VARIABLES_TYPE> = {
  plugin_github: { required: true, type: "boolean", description: "Enable GitHub plugin" },
  username: { required: true, type: "string", description: "GitHub username" },
  sections: { type: "stringArray", defaultValue: "top_tracks", description: `Sections to display in the profile` },
  hide_header: { type: "boolean", description: "Hide the header of the profile" },
  title: { type: "string", defaultValue: "GitHub", description: "Title of the profile" },
  profile_hide_title: { type: "boolean", description: "Hide the title of the profile section" },
  repositories_title: { type: "string", defaultValue: "<qnt> Repositories", description: "Title of the repositories section" },
  repositories_hide_title: { type: "boolean", description: "Hide the title of the repositories section" },
  favorite_languages_title: { type: "string", defaultValue: "<qnt> Languages", description: "Title of the favorite languages section" },
  favorite_languages_hide_title: { type: "boolean", description: "Hide the title of the favorite languages section" },
  favorite_license_title: { type: "string", defaultValue: "Favorite License", description: "Title of the favorite license section" },
  favorite_license_hide_title: { type: "boolean", description: "Hide the title of the favorite license section" },
};

export default GITHUB_ENV_VARIABLES;
