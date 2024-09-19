import React from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { LastFmArtist } from "../types/lastFmTypes";
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
  topArtists: LastFmArtist[];
  interval: string | undefined;
}

function LastFMTopArtistsDefault({ topArtists, interval }: Props): JSX.Element {
  const { pluginLastfm, style } = getEnvVariables();
  if (!pluginLastfm) throw new Error("LastFM plugin not found in LastFMTopArtistsDefault component");

  const hideTitle = pluginLastfm.recent_tracks_hide_title;
  const hideIntervals = pluginLastfm.hide_intervals;

  const data = topArtists.map((artist) => ({
    image: artist.image,
    title: artist.artist,
    value: artist.totalPlays,
  })) as GridItemProps[];

  return (
    <section id="last-fm" className="top-artists">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            {!hideTitle && <DefaultTitle title="Top Artists" subtitle={hideIntervals ? undefined : interval} icon={<MdOutlinePersonOutline />} />}
            <DefaultGrid data={data} />
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "lastfm", section: "top_artists_default", username: pluginLastfm.username, period: interval })} />
            <TerminalTree data={data} title="Top Artists" />
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}

export default LastFMTopArtistsDefault;
