import React from "react";
import { MdOutlineAudiotrack } from "react-icons/md";
import { LastFmTrack } from "../types/lastFmTypes";
import getEnvVariables from "../../../../utils/getEnvVariables";
import getPseudoCommands from "../../../../utils/getPseudoCommands";
import List from "../../!templates/Default/Default_List";
import DefaultTitle from "../../!templates/Default/Default_Title";
import RenderBasedOnStyle from "../../!templates/RenderBasedOnStyle";
import TerminalCommand from "../../!templates/Terminal/Terminal_Command";
import TerminalLineBreak from "../../!templates/Terminal/Terminal_LineBreak";
import TerminalList from "../../!templates/Terminal/Terminal_List";
import { ListItemProps } from "../../!templates/types";

interface Props {
  recentTracks: LastFmTrack[];
  interval?: string;
}

function LastFMRecentTracks({ recentTracks, interval }: Props): JSX.Element {
  const { pluginLastfm, style } = getEnvVariables();
  if (!pluginLastfm) throw new Error("LastFM plugin not found in LastFMRecentTracks component");

  const hideTitle = pluginLastfm.recent_tracks_hide_title;
  const hideIntervals = pluginLastfm.hide_intervals;
  const maxRecentTracks = pluginLastfm.recent_tracks_max;

  const data = recentTracks.map((track) => ({
    right: track.track,
    center: track.artist,
    left: track.date,
    image: track.image,
  })) as ListItemProps[];

  return (
    <section id="last-fm" className="recent-tracks">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            {!hideTitle && <DefaultTitle title="Recent Tracks" subtitle={hideIntervals ? undefined : interval} icon={<MdOutlineAudiotrack />} />}
            <List data={data} />
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand
              command={getPseudoCommands({ plugin: "lastfm", section: "recent_tracks", username: pluginLastfm.username, period: interval, limit: maxRecentTracks })}
            />
            <TerminalList data={data} />
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}

export default LastFMRecentTracks;
