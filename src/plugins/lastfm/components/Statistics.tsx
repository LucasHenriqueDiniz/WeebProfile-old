import React from "react";
import { IoStatsChartOutline } from "react-icons/io5";
import { LastFmData, LastFmFeaturedTrack } from "../types/lastFmTypes";
import getEnvVariables from "../../../../utils/getEnvVariables";
import getPseudoCommands from "../../../../utils/getPseudoCommands";
import Img64 from "../../../base/ImageComponent";
import DefaultTitle from "../../!templates/Default/Default_Title";
import RenderBasedOnStyle from "../../!templates/RenderBasedOnStyle";
import TerminalCommand from "../../!templates/Terminal/Terminal_Command";
import TerminalDots from "../../!templates/Terminal/Terminal_Dots";
import TerminalLineBreak from "../../!templates/Terminal/Terminal_LineBreak";
import TerminalLineWithDots from "../../!templates/Terminal/Terminal_LineWithDots";

const statisticsList = [
  { title: "Scrobbles", key: "totalScrobbles" },
  { title: "Artists", key: "totalArtists" },
  // { title: "Loved Tracks", key: "lovedTracks" },
];

const DefaultFeaturedTrack = ({ track }: { track: LastFmFeaturedTrack }): JSX.Element => {
  return (
    <>
      <div className="flex-d align-flexend h100 justify-evenly w100">
        <p className="sm-text-bold">Top Track</p>
        <p className="md-text-bold text-overflow text-nowrap w-fit text-end">{track.track}</p>
        <p className="md-2-text text-gray line-100 text-nowrap text-overflow w-fit text-end">{track.artist}</p>
      </div>
      <div className="featured-image-container">
        <Img64 url64={track.image} alt={track.track} defaultType="lastfm" className="music-image" />
      </div>
    </>
  );
};

const DefaultStatistic = ({ title, value }: { title: string; value: string }): JSX.Element => (
  <div className="text-center px-4 text-nowrap">
    <h3 className="capitalize md-text-bold text-gray line-100">{title}</h3>
    <p className="lg-text-bold">{value}</p>
  </div>
);

const TerminalFeaturedTrack = ({ track }: { track: LastFmFeaturedTrack }): JSX.Element => {
  return (
    <div className="terminal-statistic sm-text text-overflow">
      <span className="z-2">Top Track:</span>
      <TerminalDots />
      <span className="text-bold z-2">
        {track.track} - {track.artist}
      </span>
    </div>
  );
};

function LastFMStatistics({ statsData }: { statsData: LastFmData }): JSX.Element {
  const { pluginLastfm } = getEnvVariables();
  if (!pluginLastfm) throw new Error("LastFM plugin not found in LastFMStatistics component");

  const hideTitle = pluginLastfm.statistics_hide_title;
  const title = pluginLastfm.statistics_title;

  return (
    <section id="last-fm" className="statistics">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            {!hideTitle && <DefaultTitle title={title} icon={<IoStatsChartOutline />} />}
            <div className="h-64 max-h-64 featured-grid">
              <div className="flex gap-4">
                {statisticsList.map(({ title, key }) => (
                  <DefaultStatistic key={key} title={title} value={statsData[key]} />
                ))}
              </div>
              {statsData.featuredTrack && <DefaultFeaturedTrack track={statsData.featuredTrack} />}
            </div>
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "lastfm", section: "statistics", username: pluginLastfm.username })} />
            {statisticsList.map(({ title, key }) => (
              <TerminalLineWithDots key={key} title={title} value={statsData[key]} />
            ))}
            {statsData.featuredTrack && <TerminalFeaturedTrack track={statsData.featuredTrack} />}
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}

export default LastFMStatistics;
