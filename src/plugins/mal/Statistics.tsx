import React from "react";
import { FaBookOpen, FaCalendar, FaDatabase, FaQuestionCircle, FaStar, FaVideo } from "react-icons/fa";
import { FaCircleCheck, FaCirclePause, FaCirclePlay, FaCircleXmark } from "react-icons/fa6";
import { MdOutlineRestartAlt } from "react-icons/md";
import { MalStatisticsResponse } from "../../../types/malStatisticsResponse";
import abbreviateNumber from "../../../utils/abbreviateNumber";
import getEmojiStatus from "../../../utils/getEmojiStatus";
import getEnvVariables from "../../../utils/getEnvVariables";
import getPseudoCommands from "../../../utils/getPseudoCommands";
import { StatisticRow } from "../_components/Default/Default_StatRow";
import DefaultTitle from "../_components/Default/Default_Title";
import RenderBasedOnStyle from "../_components/RenderBasedOnStyle";
import TerminalCommand from "../_components/Terminal/Terminal_Command";
import TerminalGrid from "../_components/Terminal/Terminal_Grid";
import TerminalLineBreak from "../_components/Terminal/Terminal_LineBreak";
import { GridItemProps } from "../_components/types";

export default function MalStatistics({ statisticsData }: { statisticsData: MalStatisticsResponse }): JSX.Element {
  const { pluginMal, size } = getEnvVariables();
  if (!pluginMal) throw new Error("MAL plugin not found in MalStatistics component");

  const animeStatistics = statisticsData.anime;
  const mangaStatistics = statisticsData.manga;

  const title = pluginMal.statistics_title; // No use for now
  const hideTitle = pluginMal.statistics_hide_title;

  const animeDataAsGridItemProps: GridItemProps[] = [
    {
      title: "Mean Score",
      value: animeStatistics.mean_score.toString(),
    },
    {
      title: "Total Days",
      value: animeStatistics.days_watched.toString(),
    },
    {
      title: "Total Entries",
      value: abbreviateNumber(animeStatistics.total_entries),
    },
    {
      title: "Rewatched",
      value: abbreviateNumber(animeStatistics.rewatched),
    },
    {
      title: "Episodes Watched",
      value: abbreviateNumber(animeStatistics.episodes_watched),
    },
    {
      title: "Watching",
      value: abbreviateNumber(animeStatistics.watching),
    },
    {
      title: "Completed",
      value: abbreviateNumber(animeStatistics.completed),
    },
    {
      title: "On Hold",
      value: abbreviateNumber(animeStatistics.on_hold),
    },
    {
      title: "Dropped",
      value: abbreviateNumber(animeStatistics.dropped),
    },
    {
      title: "Plan to Watch",
      value: abbreviateNumber(animeStatistics.plan_to_watch),
    },
  ];

  animeDataAsGridItemProps.forEach((item) => {
    item.title = getEmojiStatus(item.title) + " " + item.title;
  });

  const mangaDataAsGridItemProps: GridItemProps[] = [
    {
      title: "Mean Score",
      value: mangaStatistics.mean_score.toString(),
    },
    {
      title: "Total Days",
      value: mangaStatistics.days_read.toString(),
    },
    {
      title: "Total Entries",
      value: abbreviateNumber(mangaStatistics.total_entries),
    },
    {
      title: "Reread",
      value: abbreviateNumber(mangaStatistics.reread),
    },
    {
      title: "Chapters Read",
      value: abbreviateNumber(mangaStatistics.chapters_read),
    },
    {
      title: "Volumes Read",
      value: abbreviateNumber(mangaStatistics.volumes_read),
    },
    {
      title: "Watching",
      value: abbreviateNumber(mangaStatistics.reading),
    },
    {
      title: "Completed",
      value: abbreviateNumber(mangaStatistics.completed),
    },
    {
      title: "On Hold",
      value: abbreviateNumber(mangaStatistics.on_hold),
    },
    {
      title: "Dropped",
      value: abbreviateNumber(mangaStatistics.dropped),
    },
    {
      title: "Plan to Read",
      value: abbreviateNumber(mangaStatistics.plan_to_read),
    },
  ];

  mangaDataAsGridItemProps.forEach((item) => {
    item.title = getEmojiStatus(item.title) + " " + item.title;
  });

  return (
    <section id="mal" className="statistics">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            <div className="w100 flex-d justify-between">
              {!hideTitle && <DefaultTitle title="Anime Statistics" />}
              <div className="w100 flex">
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
              {hideTitle && <DefaultTitle title={"Manga"} />}
              <div className="w100 flex">
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
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "mal", section: "statistics", username: pluginMal.username, type: "all" })} />
            <div className="w100 flex half:flex-d gap-4">
              {animeStatistics && (
                <div className="flex-d w100">
                  <TerminalGrid data={animeDataAsGridItemProps} rightText="Anime Statistics" centerText="Values" />
                </div>
              )}
              <TerminalLineBreak className="hidden half:block" />
              {mangaStatistics && (
                <div className="flex-d w100">
                  <TerminalGrid data={mangaDataAsGridItemProps} rightText="Manga Statistics" centerText="Values" />
                </div>
              )}
            </div>
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}
