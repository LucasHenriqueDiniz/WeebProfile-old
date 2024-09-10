import { MalImage } from "./mal/malTypes";

interface BaseFavorite {
  mal_id: number;
  url: string;
  images: MalImage;
}

interface AnimeFavorites extends BaseFavorite {
  title: string;
  type: string;
  start_year: number;
}

interface MangaFavorites extends BaseFavorite {
  title: string;
  type: string;
  start_year: number;
}

interface CharacterFavorites extends BaseFavorite {
  name: string;
}

interface PeopleFavorites extends BaseFavorite {
  name: string;
}

interface MalFavoritesResponse {
  [key: string]: any;
  anime: AnimeFavorites[];
  manga: MangaFavorites[];
  characters: CharacterFavorites[];
  people: PeopleFavorites[];
}

interface FullMalAnimeResponse {
  mal_id: number;
  url: string;
  images: MalImage;
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  approved: boolean;
  titles: {
    type: string;
    title: string;
  }[];
  title: string;
  title_english?: string;
  title_japanese?: string;
  title_synonyms?: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
    };
    string: string;
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  licensors: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  studios: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  explicit_genres: any[];
  themes: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  demographics: any[];
  relations: {
    relation: string;
    entry: {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }[];
  }[];
  theme: {
    openings: string[];
    endings: string[];
  };
  external: {
    name: string;
    url: string;
  }[];
  streaming: {
    name: string;
    url: string;
  }[];
}

interface MalFullFavoritesResponse {
  [key: string]: any;
  anime: FullMalAnimeResponse[];
  manga: { images: MalImage }[];
  characters: { images: MalImage }[];
  people: { images: MalImage }[];
}

type AnyMalFavoriteUnique = AnimeFavorites | MangaFavorites | CharacterFavorites | PeopleFavorites;
type AnyMalFavorite = AnimeFavorites[] | MangaFavorites[] | CharacterFavorites[] | PeopleFavorites[];

export {
  MalFavoritesResponse,
  AnimeFavorites,
  MangaFavorites,
  CharacterFavorites,
  PeopleFavorites,
  AnyMalFavorite,
  AnyMalFavoriteUnique,
  FullMalAnimeResponse,
  MalFullFavoritesResponse,
};
