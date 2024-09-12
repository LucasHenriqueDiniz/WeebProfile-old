import React from "react";
import LastFmPlugin from "../../../../types/env/LastFmPluginType";
import { LastFmAlbum } from "../../../../types/plugins/lastFmTypes";
import ImageGrid, { ImageGridItemProps } from "./_ImageGrid";
import DefaultTitle from "./_Title";
import { MdAlbum } from "react-icons/md";

function LastFmTopAlbumsGrid({ topAlbums, lastFmPlugin, interval }: { topAlbums: LastFmAlbum[]; lastFmPlugin: LastFmPlugin; interval: string | undefined }): JSX.Element {
  const hideTitle = lastFmPlugin.top_albums_hide_title;
  const hideIntervals = lastFmPlugin.hide_intervals;

  const data = topAlbums.map((artist) => ({
    title: artist.album,
    image: artist.image,
    plays: artist.plays,
  })) as ImageGridItemProps[];

  return (
    <section id="last-fm" className="top-albums">
      {!hideTitle && <DefaultTitle title="Top Albums" subtitle={hideIntervals ? undefined : interval} icon={<MdAlbum />} />}
      <ImageGrid data={data} />
    </section>
  );
}

export default LastFmTopAlbumsGrid;
