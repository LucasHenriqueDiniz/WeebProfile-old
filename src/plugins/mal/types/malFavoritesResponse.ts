import { MalImage } from "./malTypes";

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

interface TitlesEntity {
  type: string;
  title: string;
}

interface FromOrTo {
  day: number;
  month: number;
  year: number;
}

interface BasicMalEntity {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface ExternalEntity {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface RelationsEntity {
  relation: string;
  entry: BasicMalEntity[];
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
  titles?: TitlesEntity[] | null;
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
      from: FromOrTo;
      to: FromOrTo;
    };
    string?: string;
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
  producers: BasicMalEntity[] | null;
  licensors: BasicMalEntity[] | null;
  studios: BasicMalEntity[] | null;
  genres: BasicMalEntity[] | null;
  explicit_genres: any[];
  themes: BasicMalEntity[] | null;
  demographics: any[];
  relations: RelationsEntity[];
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

export interface MalFullMangaResponse {
  mal_id: number;
  url: string;
  images: MalImage;
  approved: boolean;
  titles?: TitlesEntity[] | null;
  title: string;
  title_english?: string;
  title_japanese?: string;
  title_synonyms?: null[] | null;
  type: string;
  chapters: number;
  volumes: number;
  status: string;
  publishing: boolean;
  published: {
    from: string;
    to: string;
    prop: {
      from: FromOrTo;
      to: FromOrTo;
    };
    string?: string;
  };
  score: number;
  scored: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors?: BasicMalEntity[] | null;
  serializations?: BasicMalEntity[] | null;
  genres?: BasicMalEntity[] | null;
  explicit_genres?: null[] | null;
  themes?: BasicMalEntity[] | null;
  demographics?: BasicMalEntity[] | null;
  relations?: RelationsEntity[] | null;
  external?: ExternalEntity[] | null;
}

interface MalFullFavoritesResponse {
  [key: string]: any;
  anime: FullMalAnimeResponse[];
  manga: MalFullMangaResponse[];
  characters: { images: MalImage }[];
  people: { images: MalImage }[];
}

type AnyMalFavoriteUnique = AnimeFavorites | MangaFavorites | CharacterFavorites | PeopleFavorites;
type AnyMalFavorite = AnimeFavorites[] | MangaFavorites[] | CharacterFavorites[] | PeopleFavorites[];

export type {
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
