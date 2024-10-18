export const allGIThubSections = "profile, repositories_data, favorite_languages, favorite_license, repository";

export interface GithubPlugin {
  plugin_github: boolean;
  username: string;
  sections: string[];
  hide_header: boolean;
  title: string;

  profile_hide_title: boolean;

  repositories_data_title: string;
  repositories_data_hide_title: boolean;

  repository_title: string;
  repository_hide_title: boolean;
  repository_name: string;

  favorite_languages_title: string;
  favorite_languages_hide_title: boolean;

  favorite_license_title: string;
  favorite_license_hide_title: boolean;
}

export default GithubPlugin;
