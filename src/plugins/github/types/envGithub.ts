export const allGIThubSections = "profile, repositories, favorite_languages, favorite_license";

export interface GithubPlugin {
  plugin_github: boolean;
  username: string;
  sections: string[];
  hide_header: boolean;
  title: string;

  profile_hide_title: boolean;

  repositories_title: string;
  repositories_hide_title: boolean;

  favorite_languages_title: string;
  favorite_languages_hide_title: boolean;

  favorite_license_title: string;
  favorite_license_hide_title: boolean;
}

export default GithubPlugin;
