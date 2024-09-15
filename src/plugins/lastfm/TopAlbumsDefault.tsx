import React from "react";
import { MdAlbum } from "react-icons/md";
import { LastFmAlbum } from "../../../types/plugins/lastFmTypes";
import getEnvVariables from "../../../utils/getEnvVariables";
import getPseudoCommands from "../../../utils/getPseudoCommands";
import DefaultGrid from "../_components/Default/DefaultGrid";
import DefaultTitle from "../_components/Default/Default_Title";
import RenderBasedOnStyle from "../_components/RenderBasedOnStyle";
import TerminalCommand from "../_components/Terminal/Terminal_Command";
import TerminalLineBreak from "../_components/Terminal/Terminal_LineBreak";
import TerminalTree from "../_components/Terminal/Terminal_Tree";
import { GridItemProps } from "../_components/types";

interface Props {
  topAlbums: LastFmAlbum[];
  interval: string | undefined;
}

function LastFmTopAlbumsDefault({ topAlbums, interval }: Props): JSX.Element {
  const { pluginLastfm } = getEnvVariables();
  if (!pluginLastfm) throw new Error("LastFM plugin not found in LastFmTopAlbumsDefault component");

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
            <DefaultGrid data={data} />
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "lastfm", section: "top-albums", username: pluginLastfm.username, period: interval, limit: maxTopAlbums })} />
            <TerminalTree data={data} title="Top Albums" />
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}

export default LastFmTopAlbumsDefault;
