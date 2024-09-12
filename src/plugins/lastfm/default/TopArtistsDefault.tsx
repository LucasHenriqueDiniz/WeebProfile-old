import React from "react";
import LastFmPlugin from "../../../../types/env/LastFmPluginType";
import { LastFmArtist } from "../../../../types/plugins/lastFmTypes";
import DefaultGrid, { DefaultGridItemProps } from "./_DefaultGrid";
import DefaultTitle from "./_Title";
import { MdOutlinePersonOutline } from "react-icons/md";

function LastFMTopArtistsDefault({ topArtists, lastFmPlugin, interval }: { topArtists: LastFmArtist[]; lastFmPlugin: LastFmPlugin; interval: string | undefined }): JSX.Element {
  const hideTitle = lastFmPlugin.top_artists_hide_title;
  const hideIntervals = lastFmPlugin.hide_intervals;

  const data = topArtists.map((artist) => ({
    image: artist.image,
    title: artist.artist,
    plays: artist.totalPlays,
  })) as DefaultGridItemProps[];

  return (
    <section id="last-fm" className="top-artists">
      {!hideTitle && <DefaultTitle title="Top Artists" subtitle={hideIntervals ? undefined : interval} icon={<MdOutlinePersonOutline />} />}
      <DefaultGrid data={data} />
    </section>
  );
}

export default LastFMTopArtistsDefault;
