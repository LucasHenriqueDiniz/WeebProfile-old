interface AnimeStatistics {
  [key: string]: any;
  days_watched: number;
  mean_score: number;
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_watch: number;
  total_entries: number;
  rewatched: number;
  episodes_watched: number;
}

interface MangaStatistics {
  [key: string]: any;
  days_read: number;
  mean_score: number;
  reading: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_read: number;
  total_entries: number;
  reread: number;
  chapters_read: number;
  volumes_read: number;
}

interface MalStatisticsResponse {
  [key: string]: any;
  anime: AnimeStatistics;
  manga: MangaStatistics;
}

// example Response
// {
//     "data": {
//       "anime": {
//         "days_watched": 58.6,
//         "mean_score": 6.47,
//         "watching": 7,
//         "completed": 252,
//         "on_hold": 8,
//         "dropped": 35,
//         "plan_to_watch": 56,
//         "total_entries": 358,
//         "rewatched": 14,
//         "episodes_watched": 3668
//       },
//       "manga": {
//         "days_read": 54.1,
//         "mean_score": 6.67,
//         "reading": 23,
//         "completed": 41,
//         "on_hold": 7,
//         "dropped": 48,
//         "plan_to_read": 21,
//         "total_entries": 140,
//         "reread": 4,
//         "chapters_read": 7425,
//         "volumes_read": 419
//       }
//     }
//   }

export { MalStatisticsResponse, AnimeStatistics, MangaStatistics };
