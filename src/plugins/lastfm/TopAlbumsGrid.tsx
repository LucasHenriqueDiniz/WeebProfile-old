import React from "react";
import { MdAlbum } from "react-icons/md";
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
  topAlbums: any[];
  interval: string | undefined;
}

function LastFmTopAlbumsGrid({ topAlbums, interval }: Props): JSX.Element {
  const { pluginLastfm } = getEnvVariables();
  if (!pluginLastfm) throw new Error("LastFM plugin not found in LastFmTopAlbumsGrid component");

  const hideTitle = pluginLastfm.top_albums_hide_title;
  const hideIntervals = pluginLastfm.hide_intervals;
  const maxTopAlbums = pluginLastfm.top_albums_max;

  const data = topAlbums.map((artist) => ({
    title: artist.album,
    image: artist.image,
    value: artist.plays,
  })) as GridItemProps[];

  return (
    <section id="last-fm" className="top-albums">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            {!hideTitle && <DefaultTitle title="Top Albums" subtitle={hideIntervals ? undefined : interval} icon={<MdAlbum />} />}
            <ImageGrid data={data} />
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "lastfm", section: "top-albums", username: pluginLastfm.username, period: interval, limit: maxTopAlbums })} />
            <TerminalGrid data={data} rightText="Album" leftText="Plays" />
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}

export default LastFmTopAlbumsGrid;
