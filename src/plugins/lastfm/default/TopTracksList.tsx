import React from "react";
import LastFmPlugin from "../../../../types/env/LastFmPluginType";
import { TopTrack } from "../../../../types/plugins/lastFmTypes";
import List, { ListItemProps } from "./_List";
import DefaultTitle from "./_Title";
import { AiOutlineTrophy } from "react-icons/ai";

function LastFmTopTracksList({ topTracks, lastFmPlugin, interval }: { topTracks: TopTrack[]; lastFmPlugin: LastFmPlugin; interval: string | undefined }): JSX.Element {
  const hideTitle = lastFmPlugin.top_tracks_hide_title;
  const hideIntervals = lastFmPlugin.hide_intervals;

  const data = topTracks.map((track) => ({
    title: track.track,
    image: track.image,
    subtitle: track.artist,
    plays: track.plays + " plays",
  })) as ListItemProps[];

  return (
    <section id="last-fm" className="top-tracks">
      {!hideTitle && <DefaultTitle title="Top Tracks" subtitle={hideIntervals ? undefined : interval} icon={<AiOutlineTrophy />} />}
      <List data={data} />
    </section>
  );
}

export default LastFmTopTracksList;
