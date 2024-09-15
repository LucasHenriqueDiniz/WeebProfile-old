import React from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { LastFmArtist } from "../../../types/plugins/lastFmTypes";
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
  topArtists: LastFmArtist[];
  interval: string | undefined;
}

function TopArtistsList({ topArtists, interval }: Props): JSX.Element {
  const { pluginLastfm, style } = getEnvVariables();
  if (!pluginLastfm) throw new Error("LastFM plugin not found in TopArtistsList component");

  const hideTitle = pluginLastfm.top_artists_hide_title;
  const hideIntervals = pluginLastfm.hide_intervals;

  const data = topArtists.map((artist) => ({
    right: artist.artist,
    image: artist.image,
    left: artist.totalPlays,
  })) as ListItemProps[];

  return (
    <section id="last-fm" className="top-artists">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            {!hideTitle && <DefaultTitle title="Top Artists" subtitle={hideIntervals ? undefined : interval} icon={<MdOutlinePersonOutline />} />}
            <List data={data} />
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "lastfm", section: "top_artists_default", username: pluginLastfm.username, period: interval })} />
            <TerminalList data={data} />
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}

export default TopArtistsList;
