export interface MyAnimeListPlugin {
  username: string;
  sections: string[];
  style: string;
  hide_header: boolean;

  // Options
  anime_favorites_max: number;
  anime_favorites_hide_title: boolean;

  characters_favorites_max: number;
  characters_favorites_hide_title: boolean;

  people_favorites_max: number;
  people_favorites_hide_title: boolean;

  manga_favorites_max: number;
  manga_favorites_hide_title: boolean;

  lastupdates_max: number;
  lastupdates_hide_title: boolean;
}

export default MyAnimeListPlugin;
