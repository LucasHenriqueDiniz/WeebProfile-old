import React from "react";
import { AiOutlineTrophy } from "react-icons/ai";
import { TopTrack } from "../../../types/plugins/lastFmTypes";
import getEnvVariables from "../../../utils/getEnvVariables";
import getPseudoCommands from "../../../utils/getPseudoCommands";
import List from "../_components/Default/Default_List";
import DefaultTitle from "../_components/Default/Default_Title";
import RenderBasedOnStyle from "../_components/RenderBasedOnStyle";
import TerminalCommand from "../_components/Terminal/Terminal_Command";
import TerminalLineBreak from "../_components/Terminal/Terminal_LineBreak";
import TerminalList from "../_components/Terminal/Terminal_List";
import { ListItemProps } from "../_components/types";

interface Props {
  topTracks: TopTrack[];
  interval: string | undefined;
}

function LastFmTopTracksList({ topTracks, interval }: Props): JSX.Element {
  const { pluginLastfm } = getEnvVariables();
  if (!pluginLastfm) throw new Error("LastFM plugin not found in TopTracksList component");

  const hideTitle = pluginLastfm.top_tracks_hide_title;
  const hideIntervals = pluginLastfm.hide_intervals;
  const maxTopTracks = pluginLastfm.top_tracks_max;

  const data = topTracks.map((track) => ({
    right: track.track,
    image: track.image,
    center: track.artist,
    left: track.plays + " plays",
  })) as ListItemProps[];

  return (
    <section id="last-fm" className="top-tracks">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            {!hideTitle && <DefaultTitle title="Top Tracks" subtitle={hideIntervals ? undefined : interval} icon={<AiOutlineTrophy />} />}
            <List data={data} />
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "lastfm", section: "top_tracks", username: pluginLastfm.username, period: interval, limit: maxTopTracks })} />
            <TerminalList data={data} />
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}

export default LastFmTopTracksList;
