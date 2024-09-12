import React from "react";
import LastFmPlugin from "../../../../types/env/LastFmPluginType";
import { LastFmAlbum } from "../../../../types/plugins/lastFmTypes";
import DefaultGrid, { DefaultGridItemProps } from "./_DefaultGrid";
import DefaultTitle from "./_Title";
import { MdAlbum } from "react-icons/md";

function LastFmTopAlbumsDefault({ topAlbums, lastFmPlugin, interval }: { topAlbums: LastFmAlbum[]; lastFmPlugin: LastFmPlugin; interval: string | undefined }): JSX.Element {
  const hideTitle = lastFmPlugin.top_albums_hide_title;
  const hideIntervals = lastFmPlugin.hide_intervals;

  const data = topAlbums.map((artist) => ({
    title: artist.album,
    image: artist.image,
    plays: artist.plays,
  })) as DefaultGridItemProps[];

  return (
    <section id="last-fm" className="top-albums">
      {!hideTitle && <DefaultTitle title="Top Albums" subtitle={hideIntervals ? undefined : interval} icon={<MdAlbum />} />}
      <DefaultGrid data={data} />
    </section>
  );
}

export default LastFmTopAlbumsDefault;
