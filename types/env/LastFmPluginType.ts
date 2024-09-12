export interface LastFmPlugin {
  username: string;
  sections: string[];
  style: string;
  hide_intervals: boolean;
  hide_header: boolean;

  statistics_hide_title: boolean;

  recent_tracks_max: number;
  recent_tracks_hide_title: boolean;

  top_artists_max: number;
  top_artists_hide_title: boolean;

  top_albums_max: number;
  top_albums_hide_title: boolean;

  top_tracks_max: number;
  top_tracks_hide_title: boolean;
}

export default LastFmPlugin;
