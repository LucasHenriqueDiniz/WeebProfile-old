import React from "react";
import { FaBookOpen, FaCalendar, FaStar, FaVideo } from "react-icons/fa";
import { MalStatisticsResponse } from "../../../../types/malStatisticsResponse";
import { Stat } from "./Stat";
import DefaultTitle from "./Title";
import { FaCircleInfo } from "react-icons/fa6";

interface DefaultStatisticsProps {
  statisticsData: MalStatisticsResponse;
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
      <DefaultTitle title="Statistics" icon={<FaCircleInfo />} />
      <ul className="simple default-status-horizontal">
        <Stat title="Days Wasted" strong value={TotalDays.toString()} icon={<FaCalendar className="color-primary pb-2" />} />
        <Stat title="Mean Score" strong value={TotalMeanScore.toFixed(2)} icon={<FaStar className="color-primary pb-2" />} />
        <Stat title="Chapters Read" strong value={ChaptersRead.toString()} icon={<FaBookOpen className="color-primary pb-2" />} />
        <Stat title="Episodes Watched" strong value={EpisodesWatched.toString()} icon={<FaVideo className="color-primary pb-2" />} />
      </ul>
    </section>
  );
}
