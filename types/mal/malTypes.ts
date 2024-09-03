import { LastUpdatesAnime, LastUpdatesManga, MalLastUpdatesResponse } from "../maleLastUpdatesResponse";
import { AnyMalFavorite, MalFavoritesResponse } from "../malFavoritesResponse";
import { MalProfileResponse } from "../malProfileResponse";
import { AnimeStatistics, MalStatisticsResponse, MangaStatistics } from "../malStatisticsResponse";

interface LastUpdateItemProps {
  data: LastUpdatesAnime | LastUpdatesManga;
  stat: "anime" | "manga";
}

interface ClassicLastUpdatesProps {
  lastUpdatesData: LastUpdatesAnime[] | LastUpdatesManga[];
  username: string;
}

interface ClassicFavoritesProps {
  favoritesData: AnyMalFavorite;
  username: string;
  media: string;
}

interface ClassicProfileProps {
  statisticsData: AnimeStatistics | MangaStatistics;
  lastUpdatesData: LastUpdatesAnime[] | LastUpdatesManga[];
  username: string;
}

interface ProgressBarProps {
  value: number;
  total: number;
  status: string;
}

interface StatisticsBarProps {
  watching: number;
  completed: number;
  onHold: number;
  dropped: number;
  planToWatch: number;
}

interface MalProfileBoxProps {
  title: string;
  secondTitle: string;
  secondTitleHref: string;
  children: JSX.Element;
}

interface MalProfileStatsProps {
  data: AnimeStatistics | MangaStatistics;
  userName: string;
}

interface MalData {
  profile: MalProfileResponse;
  favorites: MalFavoritesResponse;
  last_updated: MalLastUpdatesResponse;
  statistics: MalStatisticsResponse;
}

export {
  MalData,
  ClassicFavoritesProps,
  ClassicLastUpdatesProps,
  ClassicProfileProps,
  LastUpdateItemProps,
  MalProfileBoxProps,
  MalProfileStatsProps,
  ProgressBarProps,
  StatisticsBarProps,
};
