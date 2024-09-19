import { MalImage } from "./malTypes";

interface UpdateEntry {
  mal_id: number;
  url: string;
  images: MalImage;
  title: string;
}

interface LastUpdatesAnime {
  entry: UpdateEntry;
  score: number;
  status: string;
  episodes_seen: number;
  episodes_total: number;
  date: string;
}

interface LastUpdatesManga {
  entry: UpdateEntry;
  score: number;
  status: string;
  chapters_read: number;
  chapters_total: number;
  date: string;
}

interface MalLastUpdatesResponse {
  [key: string]: any;
  anime: LastUpdatesAnime[];
  manga: LastUpdatesManga[];
}

type anyMalUpdate = LastUpdatesAnime | LastUpdatesManga;

export type { UpdateEntry, LastUpdatesAnime, LastUpdatesManga, MalLastUpdatesResponse, anyMalUpdate };
