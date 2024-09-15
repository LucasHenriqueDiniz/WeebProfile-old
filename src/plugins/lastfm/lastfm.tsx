import React from "react";
import { FaLastfm } from "react-icons/fa";
import LastFmPlugin from "../../../types/env/LastFmPluginType";
import { LastFmResponse } from "../../../types/plugins/lastFmTypes";
import Header from "../_components/Default/Default_Header";
import ErrorMessage from "../_components/Error_Style";
import RenderBasedOnStyle from "../_components/RenderBasedOnStyle";
import TerminalBody from "../_components/Terminal/Terminal_Body";
import TerminalHeader from "../_components/Terminal/Terminal_Header";

import RecentTracks from "./RecentTracks";
import Statistics from "./Statistics";
import TopArtistsDefault from "./TopArtistsDefault";
import TopArtistsGrid from "./TopArtistsGrid";
import TopArtistsList from "./TopArtistsList";
import TopAlbumsList from "./TopAlbumsList";
import TopAlbumsGrid from "./TopAlbumsGrid";
import TopAlbumsDefault from "./TopAlbumsDefault";
import TopTracksList from "./TopTracksList";
import TopTracksGrid from "./TopTracksGrid";
import TopTracksDefault from "./TopTracksDefault";

interface Props {
  lastfmPlugin: LastFmPlugin;
  lastfmData: LastFmResponse;
}

export default function renderLastFM({ lastfmPlugin, lastfmData }: Props): JSX.Element {
  const sections = lastfmPlugin.sections;

  interface SectionRenderers {
    [key: string]: (lastFmData: LastFmResponse) => JSX.Element;
  }

  const sectionRenderers: SectionRenderers = {
    recent_tracks: (lastFmData) => <RecentTracks recentTracks={lastFmData.data.recentTracks} />,
    statistics: (lastFmData) => <Statistics statsData={lastFmData.data} />,

    top_artists_grid: (lastFmData) => <TopArtistsGrid topArtists={lastFmData.data.topArtists} interval={lastFmData.topArtistsInterval} />,
    top_artists_list: (lastFmData) => <TopArtistsList topArtists={lastFmData.data.topArtists} interval={lastFmData.topAlbumsInterval} />,
    top_artists_default: (lastFmData) => <TopArtistsDefault topArtists={lastFmData.data.topArtists} interval={lastFmData.topAlbumsInterval} />,

    top_albums_list: (lastFmData) => <TopAlbumsList topAlbums={lastFmData.data.topAlbums} interval={lastFmData.topAlbumsInterval} />,
    top_albums_grid: (lastFmData) => <TopAlbumsGrid topAlbums={lastFmData.data.topAlbums} interval={lastFmData.topAlbumsInterval} />,
    top_albums_default: (lastFmData) => <TopAlbumsDefault topAlbums={lastFmData.data.topAlbums} interval={lastFmData.topAlbumsInterval} />,

    top_tracks_list: (lastFmData) => <TopTracksList topTracks={lastFmData.data.topTracks} interval={lastFmData.topTracksInterval} />,
    top_tracks_grid: (lastFmData) => <TopTracksGrid topTracks={lastFmData.data.topTracks} interval={lastFmData.topTracksInterval} />,
    top_tracks_default: (lastFmData) => <TopTracksDefault topTracks={lastFmData.data.topTracks} interval={lastFmData.topTracksInterval} />,
  };

  const renderSection = (section: string): JSX.Element => {
    if (sectionRenderers[section]) {
      return sectionRenderers[section](lastfmData);
    }
    return <ErrorMessage message={`Section ${section} not found`} />;
  };

  return (
    <>
      <RenderBasedOnStyle
        terminalComponent={
          <>
            <TerminalHeader />
            <TerminalBody>{sections.map((section) => renderSection(section))}</TerminalBody>
          </>
        }
        defaultComponent={
          <>
            <Header title="LastFM" icon={<FaLastfm />} />
            {sections.map((section) => renderSection(section))}
          </>
        }
      />
    </>
  );
}
