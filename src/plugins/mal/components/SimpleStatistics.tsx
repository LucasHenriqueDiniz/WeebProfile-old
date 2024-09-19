import { FaBookOpen, FaCalendar, FaStar, FaVideo } from "react-icons/fa";
import { IoStatsChartOutline } from "react-icons/io5";
import { Stat } from "../../!templates/Default/Default_StatRow";
import DefaultTitle from "../../!templates/Default/Default_Title";
import RenderBasedOnStyle from "../../!templates/RenderBasedOnStyle";
import TerminalCommand from "../../!templates/Terminal/Terminal_Command";
import TerminalLineBreak from "../../!templates/Terminal/Terminal_LineBreak";
import TerminalLineWithDots from "../../!templates/Terminal/Terminal_LineWithDots";
import abbreviateNumber from "../../../../utils/abbreviateNumber";
import getEmojiStatus from "../../../../utils/getEmojiStatus";
import getEnvVariables from "../../../../utils/getEnvVariables";
import getPseudoCommands from "../../../../utils/getPseudoCommands";
import { MalStatisticsResponse } from "../types/malStatisticsResponse";

export default function SimpleStatistics({ statisticsData }: { statisticsData: MalStatisticsResponse }): JSX.Element {
  const { pluginMal } = getEnvVariables();
  if (!pluginMal) throw new Error("MAL plugin not found in MalStatistics component");

  const title = pluginMal.stats_simple_title;
  const hideTitle = pluginMal.stats_simple_hide_title;

  const TotalDays = statisticsData.anime.days_watched + statisticsData.manga.days_read;
  const TotalMeanScore =
    (statisticsData.anime.mean_score * statisticsData.anime.total_entries + statisticsData.manga.mean_score * statisticsData.manga.total_entries) /
    (statisticsData.anime.total_entries + statisticsData.manga.total_entries);
  const ChaptersRead = statisticsData.manga.chapters_read;
  const EpisodesWatched = statisticsData.anime.episodes_watched;

  return (
    <section id="mal" className="simple-statistics">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            {!hideTitle && <DefaultTitle title={title} icon={<IoStatsChartOutline />} />}
            <ul className="simple default-status-horizontal">
              <Stat title="Days Wasted" strong value={TotalDays.toFixed(1)} icon={<FaCalendar className="color-primary pb-2" />} />
              <Stat title="Mean Score" strong value={TotalMeanScore.toFixed(2)} icon={<FaStar className="color-primary pb-2" />} />
              <Stat title="Chapters Read" strong value={abbreviateNumber(ChaptersRead)} icon={<FaBookOpen className="color-primary pb-2" />} smallInHalf />
              <Stat title="Episodes Watched" strong value={abbreviateNumber(EpisodesWatched)} icon={<FaVideo className="color-primary pb-2" />} smallInHalf />
            </ul>
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "mal", section: "simple-statistics", username: pluginMal.username, type: "all" })} />
            <TerminalLineWithDots title={`${getEmojiStatus("days_wasted")} Days Wasted`} value={TotalDays.toFixed(1)} />
            <TerminalLineWithDots title={`${getEmojiStatus("mean_score")} Mean Score`} value={TotalMeanScore.toFixed(2)} />
            <TerminalLineWithDots title={`${getEmojiStatus("chapters_read")} Chapters Read`} value={abbreviateNumber(ChaptersRead)} />
            <TerminalLineWithDots title={`${getEmojiStatus("episodes_watched")} Episodes Watched`} value={abbreviateNumber(EpisodesWatched)} />
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}
