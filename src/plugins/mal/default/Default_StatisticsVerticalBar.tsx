import React from "react";
import { FaBookOpen, FaCalendar, FaDatabase, FaQuestionCircle, FaStar, FaVideo } from "react-icons/fa";
import { FaCircleCheck, FaCirclePause, FaCirclePlay, FaCircleXmark } from "react-icons/fa6";
import { MdOutlineRestartAlt } from "react-icons/md";
import { MalStatisticsResponse } from "../../../../types/malStatisticsResponse";
import { Stat } from "./Stat";
import DefaultTitle from "./Title";

interface DefaultStatisticsProps {
  statisticsData: MalStatisticsResponse;
}

interface StatisticsRowProps {
  icon: JSX.Element;
  title: string;
  value: string;
  strong?: boolean;
}

function StatisticRow({ rows }: { rows: StatisticsRowProps[] }): JSX.Element {
  return (
    <ul className="default-status-vertical">
      {rows.map((row, index) => (
        <Stat key={index} title={row.title} value={row.value} icon={row.icon} strong={row.strong} />
      ))}
    </ul>
  );
}

function VerticalBar({
  watching,
  completed,
  onHold,
  dropped,
  planToWatch,
}: {
  watching: number;
  completed: number;
  onHold: number;
  dropped: number;
  planToWatch: number;
}): JSX.Element {
  const total = watching + completed + onHold + dropped + planToWatch;
  const watchingPorcentage = (watching / total) * 100;
  const completedPorcentage = (completed / total) * 100;
  const onHoldPorcentage = (onHold / total) * 100;
  const droppedPorcentage = (dropped / total) * 100;
  const planToWatchPorcentage = (planToWatch / total) * 100;

  return (
    <div className="vertical-status-bar">
      <span className="bar-section default-bg-watching" style={{ height: `${watchingPorcentage}%` }}></span>
      <span className="bar-section default-bg-completed" style={{ height: `${completedPorcentage}%` }}></span>
      <span className="bar-section default-bg-on-hold" style={{ height: `${onHoldPorcentage}%` }}></span>
      <span className="bar-section default-bg-dropped" style={{ height: `${droppedPorcentage}%` }}></span>
      <span className="bar-section default-bg-plan-to-watch" style={{ height: `${planToWatchPorcentage}%` }}></span>
    </div>
  );
}

export default function Default_StatisticsVerticalBar({ statisticsData }: DefaultStatisticsProps): JSX.Element {
  const animeStatistics = statisticsData.anime;
  const mangaStatistics = statisticsData.manga;

  return (
    <section className="w100 flex justify-between gap-8">
      <div className="w100 flex-d justify-between">
        <DefaultTitle title="Anime" />
        <div className="w100 flex  gap-4">
          <VerticalBar
            watching={animeStatistics.watching}
            completed={animeStatistics.completed}
            onHold={animeStatistics.on_hold}
            dropped={animeStatistics.dropped}
            planToWatch={animeStatistics.plan_to_watch}
          />
          <StatisticRow
            rows={[
              { icon: <FaStar className="color-primary" />, title: "Mean Score", value: animeStatistics.mean_score.toString(), strong: true },
              { icon: <FaCirclePlay className="default-watching" />, title: "Watching", value: animeStatistics.watching.toString() },
              { icon: <FaCircleCheck className="default-completed" />, title: "Completed", value: animeStatistics.completed.toString() },
              { icon: <FaCirclePause className="default-on-hold" />, title: "On Hold", value: animeStatistics.on_hold.toString() },
              { icon: <FaCircleXmark className="default-dropped" />, title: "Dropped", value: animeStatistics.dropped.toString() },
              { icon: <FaQuestionCircle className="default-plan-to-watch" />, title: "Plan to Watch", value: animeStatistics.plan_to_watch.toString() },
            ]}
          />
          <StatisticRow
            rows={[
              { icon: <FaCalendar className="color-primary" />, title: "Total Days", value: animeStatistics.days_watched.toString(), strong: true },
              { icon: <FaDatabase className="color-primary" />, title: "Total Entries", value: animeStatistics.total_entries.toString() },
              { icon: <MdOutlineRestartAlt className="color-primary" />, title: "Rewatched", value: animeStatistics.rewatched.toString() },
              { icon: <FaVideo className="color-primary" />, title: "Episodes Watched", value: animeStatistics.episodes_watched.toString() },
            ]}
          />
        </div>
      </div>
      <div className="w100 flex-d justify-between">
        <DefaultTitle title="Manga" />
        <div className="w100 flex gap-4">
          <VerticalBar
            watching={mangaStatistics.reading}
            completed={mangaStatistics.completed}
            onHold={mangaStatistics.on_hold}
            dropped={mangaStatistics.dropped}
            planToWatch={mangaStatistics.plan_to_read}
          />
          <StatisticRow
            rows={[
              { icon: <FaStar className="color-primary" />, title: "Mean Score", value: mangaStatistics.mean_score.toString(), strong: true },
              { icon: <FaCirclePlay className="default-watching" />, title: "Watching", value: mangaStatistics.reading.toString() },
              { icon: <FaCircleCheck className="default-completed" />, title: "Completed", value: mangaStatistics.completed.toString() },
              { icon: <FaCirclePause className="default-on-hold" />, title: "On Hold", value: mangaStatistics.on_hold.toString() },
              { icon: <FaCircleXmark className="default-dropped" />, title: "Dropped", value: mangaStatistics.dropped.toString() },
              { icon: <FaQuestionCircle className="default-plan-to-watch" />, title: "Plan to Watch", value: mangaStatistics.plan_to_read.toString() },
            ]}
          />
          <StatisticRow
            rows={[
              { icon: <FaCalendar className="color-primary" />, title: "Total Days", value: mangaStatistics.days_read.toString(), strong: true },
              { icon: <FaDatabase className="color-primary" />, title: "Total Entries", value: mangaStatistics.total_entries.toString() },
              { icon: <MdOutlineRestartAlt className="color-primary" />, title: "Reread", value: mangaStatistics.reread.toString() },
              { icon: <FaBookOpen className="color-primary" />, title: "Chapters Read", value: mangaStatistics.chapters_read.toString() },
              { icon: <FaVideo className="color-primary" />, title: "Volumes Read", value: mangaStatistics.volumes_read.toString() },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
