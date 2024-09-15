// statistics
// anime_bar
// manga_bar
// stats_simple
// anime_simple_favorites
// manga_simple_favorites
// people_simple_favorites
// character_simple_favorites
// anime_favorites
// manga_favorites
// people_favorites
// character_favorites
// last_activity

export interface MyAnimeListPlugin {
  username: string;
  sections: string[];
  hide_header: boolean;
  hide_terminal_emojis: boolean;

  // Options
  statistics_title: string;
  statistics_hide_title: boolean;

  anime_bar_title: string;
  anime_bar_hide_title: boolean;

  manga_bar_title: string;
  manga_bar_hide_title: boolean;

  stats_simple_title: string;
  stats_simple_hide_title: boolean;

  anime_favorites_max: number;
  anime_favorites_hide_title: boolean;
  anime_favorites_title: string;

  characters_favorites_max: number;
  characters_favorites_hide_title: boolean;
  character_favorites_title: string;

  people_favorites_max: number;
  people_favorites_hide_title: boolean;
  people_favorites_title: string;

  manga_favorites_max: number;
  manga_favorites_hide_title: boolean;
  manga_favorites_title: string;

  last_activity_max: number;
  last_activity_hide_title: boolean;
  last_activity_title: string;
}

export default MyAnimeListPlugin;
