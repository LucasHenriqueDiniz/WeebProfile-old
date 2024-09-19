import React from "react";
import { AiOutlineTrophy } from "react-icons/ai";
import getEnvVariables from "../../../../utils/getEnvVariables";
import getPseudoCommands from "../../../../utils/getPseudoCommands";
import ImageGrid from "../../!templates/Default/DefaultImageGrid";
import DefaultTitle from "../../!templates/Default/Default_Title";
import RenderBasedOnStyle from "../../!templates/RenderBasedOnStyle";
import TerminalCommand from "../../!templates/Terminal/Terminal_Command";
import TerminalGrid from "../../!templates/Terminal/Terminal_Grid";
import TerminalLineBreak from "../../!templates/Terminal/Terminal_LineBreak";
import { GridItemProps } from "../../!templates/types";

interface Props {
  topTracks: any[];
  interval: string | undefined;
}

function LastFmTopTracksGrid({ topTracks, interval }: Props): JSX.Element {
  const { pluginLastfm } = getEnvVariables();
  if (!pluginLastfm) throw new Error("LastFM plugin not found in LastFmTopTracksGrid component");

  const hideTitle = pluginLastfm.top_tracks_hide_title;
  const hideIntervals = pluginLastfm.hide_intervals;
  const maxTopTracks = pluginLastfm.top_tracks_max;

  const data = topTracks.map((track) => ({
    title: track.track,
    image: track.image,
    subtitle: track.artist,
    value: track.plays + " plays",
  })) as GridItemProps[];

  return (
    <section id="last-fm" className="top-tracks">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            {!hideTitle && <DefaultTitle title="Top Tracks" subtitle={hideIntervals ? undefined : interval} icon={<AiOutlineTrophy />} />}
            <ImageGrid data={data} />
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "lastfm", section: "top_tracks", username: pluginLastfm.username, period: interval, limit: maxTopTracks })} />
            <TerminalGrid data={data} rightText="Track" centerText="Artist" leftText="Plays" />
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}

export default LastFmTopTracksGrid;
