import React from "react";
import LastFmPlugin from "../../../../types/env/LastFmPluginType";
import { LastFmTrack } from "../../../../types/plugins/lastFmTypes";
import List, { ListItemProps } from "./_List";
import DefaultTitle from "./_Title";
import { MdOutlineAudiotrack } from "react-icons/md";

function LastFMRecentTracks({ recentTracks, lastFmPlugin, interval }: { recentTracks: LastFmTrack[]; lastFmPlugin: LastFmPlugin; interval?: string | undefined }): JSX.Element {
  const hideTitle = lastFmPlugin.recent_tracks_hide_title;
  const hideIntervals = lastFmPlugin.hide_intervals;

  const data = recentTracks.map((track) => ({
    title: track.track,
    subtitle: track.artist,
    plays: track.date,
    image: track.image,
  })) as ListItemProps[];

  return (
    <section id="last-fm" className="recent-tracks">
      {!hideTitle && <DefaultTitle title="Recent Tracks" subtitle={hideIntervals ? undefined : interval} icon={<MdOutlineAudiotrack />} />}
      <List data={data} />
    </section>
  );
}

export default LastFMRecentTracks;
