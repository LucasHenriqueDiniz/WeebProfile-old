import React from "react";
import { FaBookOpen, FaCalendar, FaStar, FaVideo } from "react-icons/fa";
import { IoStatsChartOutline } from "react-icons/io5";
import { MalStatisticsResponse } from "../../../../types/malStatisticsResponse";
import { Stat } from "./Stat";
import DefaultTitle from "./Title";

interface DefaultStatisticsProps {
  statisticsData: MalStatisticsResponse;
}

function treatNumbers(number: number): string {
  // if number is greater than 1000, return it as 1k, 2832 -> 2.8k 231321838 -> 231.3M, 323123 -> 323.1k
  if (number < 1000) return number.toString();
  if (number < 1000000) return (number / 1000).toFixed(1) + "k";
  return (number / 1000000).toFixed(1) + "M";
}

export default function Default_SimpleStatistics({ statisticsData }: DefaultStatisticsProps): JSX.Element {
  const TotalDays = statisticsData.anime.days_watched + statisticsData.manga.days_read;
  const TotalMeanScore =
    (statisticsData.anime.mean_score * statisticsData.anime.total_entries + statisticsData.manga.mean_score * statisticsData.manga.total_entries) /
    (statisticsData.anime.total_entries + statisticsData.manga.total_entries);
  const ChaptersRead = statisticsData.manga.chapters_read;
  const EpisodesWatched = statisticsData.anime.episodes_watched;

  return (
    <section className="default-status">
      <DefaultTitle title="Statistics" icon={<IoStatsChartOutline />} />
      <ul className="simple default-status-horizontal">
        <Stat title="Days Wasted" strong value={TotalDays.toFixed(1)} icon={<FaCalendar className="color-primary pb-2" />} />
        <Stat title="Mean Score" strong value={TotalMeanScore.toFixed(2)} icon={<FaStar className="color-primary pb-2" />} />
        <Stat title="Chapters Read" strong value={treatNumbers(ChaptersRead)} icon={<FaBookOpen className="color-primary pb-2" />} smallInHalf />
        <Stat title="Episodes Watched" strong value={treatNumbers(EpisodesWatched)} icon={<FaVideo className="color-primary pb-2" />} smallInHalf />
      </ul>
    </section>
  );
}
