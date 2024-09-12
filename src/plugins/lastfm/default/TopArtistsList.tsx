import React from "react";
import LastFmPlugin from "../../../../types/env/LastFmPluginType";
import { LastFmArtist } from "../../../../types/plugins/lastFmTypes";
import List, { ListItemProps } from "./_List";
import DefaultTitle from "./_Title";
import { MdOutlinePersonOutline } from "react-icons/md";

function LastFMTopArtistsList({ topArtists, lastFmPlugin, interval }: { topArtists: LastFmArtist[]; lastFmPlugin: LastFmPlugin; interval: string | undefined }): JSX.Element {
  const hideTitle = lastFmPlugin.top_artists_hide_title;
  const hideIntervals = lastFmPlugin.hide_intervals;

  const data = topArtists.map((artist) => ({
    title: artist.artist,
    image: artist.image,
    plays: artist.totalPlays,
  })) as ListItemProps[];

  return (
    <section id="last-fm" className="top-artists">
      {!hideTitle && <DefaultTitle title="Top Artists" subtitle={hideIntervals ? undefined : interval} icon={<MdOutlinePersonOutline />} />}
      <List data={data} />
    </section>
  );
}

export default LastFMTopArtistsList;
