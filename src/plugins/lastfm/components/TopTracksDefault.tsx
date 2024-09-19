import React from "react";
import { AiOutlineTrophy } from "react-icons/ai";
import { TopTrack } from "../types/lastFmTypes";
import getEnvVariables from "../../../../utils/getEnvVariables";
import getPseudoCommands from "../../../../utils/getPseudoCommands";
import DefaultGrid from "../../!templates/Default/DefaultGrid";
import DefaultTitle from "../../!templates/Default/Default_Title";
import RenderBasedOnStyle from "../../!templates/RenderBasedOnStyle";
import TerminalCommand from "../../!templates/Terminal/Terminal_Command";
import TerminalLineBreak from "../../!templates/Terminal/Terminal_LineBreak";
import TerminalTree from "../../!templates/Terminal/Terminal_Tree";
import { GridItemProps } from "../../!templates/types";

interface Props {
  topTracks: TopTrack[];
  interval: string | undefined;
}

function LastFmTopTracksDefault({ topTracks, interval }: Props): JSX.Element {
  const { pluginLastfm } = getEnvVariables();
  if (!pluginLastfm) throw new Error("LastFM plugin not found in LastFmTopTracksDefault component");

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
            <DefaultGrid data={data} />
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "lastfm", section: "top_tracks", username: pluginLastfm.username, period: interval, limit: maxTopTracks })} />
            <TerminalTree data={data} title="Top Tracks" />
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}

export default LastFmTopTracksDefault;
