import React from "react";
import { MdAlbum } from "react-icons/md";
import { LastFmAlbum } from "../../../types/plugins/lastFmTypes";
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
  topAlbums: LastFmAlbum[];
  interval: string | undefined;
}

function LastFmTopAlbumsList({ topAlbums, interval }: Props): JSX.Element {
  const { pluginLastfm, style } = getEnvVariables();
  const lastFm = pluginLastfm!;

  const hideTitle = lastFm.top_albums_hide_title;
  const hideIntervals = lastFm.hide_intervals;
  const maxTopAlbums = lastFm.top_albums_max;

  const data = topAlbums.map((artist) => ({
    right: artist.album,
    image: artist.image,
    center: artist.artist,
    left: artist.plays,
  })) as ListItemProps[];

  return (
    <section id="last-fm" className="top-albums">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            {!hideTitle && <DefaultTitle title="Top Albums" subtitle={hideIntervals ? undefined : interval} icon={<MdAlbum />} />}
            <List data={data} />
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "lastfm", section: "top-albums", username: lastFm.username, period: interval, limit: maxTopAlbums })} />
            <TerminalList data={data} />
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}

export default LastFmTopAlbumsList;
