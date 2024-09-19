// profile
// repositories
// favorite_languages
// favorite_liscense

export interface githubPlugin {
  username: string;
  sections: string[];
  hide_header: boolean;
  title: string;

  profile_hide_title: boolean;

  repositories_title: string;
  repositories_hide_title: boolean;

  favorite_languages_title: string;
  favorite_languages_hide_title: boolean;

  favorite_liscense_title: string;
  favorite_liscense_hide_title: boolean;
}

export default githubPlugin;
