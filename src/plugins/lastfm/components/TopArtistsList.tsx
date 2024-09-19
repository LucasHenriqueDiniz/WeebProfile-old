import React from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { LastFmArtist } from "../types/lastFmTypes";
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
