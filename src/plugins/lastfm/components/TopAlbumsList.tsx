import React from "react";
import { MdAlbum } from "react-icons/md";
import { LastFmAlbum } from "../types/lastFmTypes";
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
