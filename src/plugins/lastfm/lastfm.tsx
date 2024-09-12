import React from "react";
import { FaLastfm } from "react-icons/fa";
import LastFmPlugin from "../../../types/env/LastFmPluginType";
import { LastFmResponse } from "../../../types/plugins/lastFmTypes";
import Header from "../_components/Header";
import RecentTracks from "./default/RecentTracks";
import Statistics from "./default/Statistics";
import TopAlbumsDefault from "./default/TopAlbumsDefault";
import TopAlbumsGrid from "./default/TopAlbumsGrid";
import TopAlbumsList from "./default/TopAlbumsList";
import TopArtistsDefault from "./default/TopArtistsDefault";
import TopArtistsGrid from "./default/TopArtistsGrid";
import TopArtistsList from "./default/TopArtistsList";
import TopTracksDefault from "./default/TopTracksDefault";
import TopTracksGrid from "./default/TopTracksGrid";
import TopTracksList from "./default/TopTracksList";

interface Props {
  lastfmPlugin: LastFmPlugin;
  lastfmData: LastFmResponse;
}

const sectionRenderers: Record<string, Record<string, (lastFmPlugin: LastFmPlugin, lastFmData: LastFmResponse) => JSX.Element>> = {
  default: {
    recent_tracks: (lastFmPlugin: LastFmPlugin, lastFmData: LastFmResponse) => <RecentTracks lastFmPlugin={lastFmPlugin} recentTracks={lastFmData.data.recentTracks} />,

    statistics: (lastFmPlugin: LastFmPlugin, lastFmData: LastFmResponse) => <Statistics lastFmPlugin={lastFmPlugin} statsData={lastFmData} />,

    top_albums_grid: (lastFmPlugin: LastFmPlugin, lastFmData: LastFmResponse) => (
      <TopAlbumsGrid topAlbums={lastFmData.data.topAlbums} lastFmPlugin={lastFmPlugin} interval={lastFmData.topAlbumsInterval} />
    ),
    top_albums_list: (lastFmPlugin: LastFmPlugin, lastFmData: LastFmResponse) => (
      <TopAlbumsList topAlbums={lastFmData.data.topAlbums} lastFmPlugin={lastFmPlugin} interval={lastFmData.topAlbumsInterval} />
    ),
    top_albums_default: (lastFmPlugin: LastFmPlugin, lastFmData: LastFmResponse) => (
      <TopAlbumsDefault topAlbums={lastFmData.data.topAlbums} lastFmPlugin={lastFmPlugin} interval={lastFmData.topAlbumsInterval} />
    ),

    top_artists_grid: (lastFmPlugin: LastFmPlugin, lastFmData: LastFmResponse) => (
      <TopArtistsGrid topArtists={lastFmData.data.topArtists} lastFmPlugin={lastFmPlugin} interval={lastFmData.topArtistsInterval} />
    ),
    top_artists_list: (lastFmPlugin: LastFmPlugin, lastFmData: LastFmResponse) => (
      <TopArtistsList topArtists={lastFmData.data.topArtists} lastFmPlugin={lastFmPlugin} interval={lastFmData.topArtistsInterval} />
    ),
    top_artists_default: (lastFmPlugin: LastFmPlugin, lastFmData: LastFmResponse) => (
      <TopArtistsDefault topArtists={lastFmData.data.topArtists} lastFmPlugin={lastFmPlugin} interval={lastFmData.topArtistsInterval} />
    ),

    top_tracks_grid: (lastFmPlugin: LastFmPlugin, lastFmData: LastFmResponse) => (
      <TopTracksGrid topTracks={lastFmData.data.topTracks} lastFmPlugin={lastFmPlugin} interval={lastFmData.topTracksInterval} />
    ),
    top_tracks_list: (lastFmPlugin: LastFmPlugin, lastFmData: LastFmResponse) => (
      <TopTracksList topTracks={lastFmData.data.topTracks} lastFmPlugin={lastFmPlugin} interval={lastFmData.topTracksInterval} />
    ),
    top_tracks_default: (lastFmPlugin: LastFmPlugin, lastFmData: LastFmResponse) => (
      <TopTracksDefault topTracks={lastFmData.data.topTracks} lastFmPlugin={lastFmPlugin} interval={lastFmData.topTracksInterval} />
    ),
  },
  terminal: {
    lastfm: (lastFmPlugin: LastFmPlugin, lastFmData: LastFmResponse) => <section>not yet made lastfm</section>,
  },
};

export default function renderLastFM({ lastfmPlugin, lastfmData }: Props): JSX.Element {
  const hideHeader = lastfmPlugin.hide_header;
  const sections = lastfmPlugin.sections;
  const style = lastfmPlugin.style;

  const SectionsToRender = sections.map((section) => {
    if (!sectionRenderers[style][section]) {
      return (
        <section className="error" key={section}>
          {style} - Section not implemented: {section}
        </section>
      );
    }

    return <React.Fragment key={section}>{sectionRenderers[style][section](lastfmPlugin, lastfmData)}</React.Fragment>;
  });

  return (
    <>
      {!hideHeader && <Header icon={<FaLastfm />} title={"LastFM"} />}
      {SectionsToRender}
    </>
  );
}
