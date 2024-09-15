import React from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { LastFmArtist } from "../../../types/plugins/lastFmTypes";
import getEnvVariables from "../../../utils/getEnvVariables";
import getPseudoCommands from "../../../utils/getPseudoCommands";
import ImageGrid from "../_components/Default/DefaultImageGrid";
import DefaultTitle from "../_components/Default/Default_Title";
import RenderBasedOnStyle from "../_components/RenderBasedOnStyle";
import TerminalCommand from "../_components/Terminal/Terminal_Command";
import TerminalGrid from "../_components/Terminal/Terminal_Grid";
import TerminalLineBreak from "../_components/Terminal/Terminal_LineBreak";
import { GridItemProps } from "../_components/types";

interface Props {
  topArtists: LastFmArtist[];
  interval: string | undefined;
}

function TopArtistsGrid({ topArtists, interval }: Props): JSX.Element {
  const { pluginLastfm, style } = getEnvVariables();
  if (!pluginLastfm) throw new Error("LastFM plugin not found in TopArtistsGrid component");

  const hideTitle = pluginLastfm.top_artists_hide_title;
  const hideIntervals = pluginLastfm.hide_intervals;

  const data = topArtists.map((artist) => ({
    title: artist.artist,
    image: artist.image,
    value: artist.totalPlays,
  })) as GridItemProps[];

  return (
    <section id="last-fm" className="top-artists">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            {!hideTitle && <DefaultTitle title="Top Artists" subtitle={hideIntervals ? undefined : interval} icon={<MdOutlinePersonOutline />} />}
            <ImageGrid data={data} />
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "lastfm", section: "top_artists_default", username: pluginLastfm.username, period: interval })} />
            <TerminalGrid data={data} rightText="Artist" leftText="Plays" />
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}

export default TopArtistsGrid;
