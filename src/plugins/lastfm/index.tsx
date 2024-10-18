import { FaLastfm } from "react-icons/fa";
import Header from "../!templates/Default/Default_Header";
import ErrorMessage from "../!templates/Error_Style";
import RenderBasedOnStyle from "../!templates/RenderBasedOnStyle";
import TerminalBody from "../!templates/Terminal/Terminal_Body";
import {
  RecentTracks,
  Statistics,
  TopAlbumsDefault,
  TopAlbumsGrid,
  TopAlbumsList,
  TopArtistsDefault,
  TopArtistsGrid,
  TopArtistsList,
  TopTracksDefault,
  TopTracksGrid,
  TopTracksList,
} from "./components";
import LastFmPlugin, { allLastFmSections } from "./types/envLastFM";
import { LastFmData } from "./types/lastFmTypes";

interface Props {
  lastfmPlugin: LastFmPlugin;
  lastfmData: LastFmData;
}

interface SectionRenderers {
  [key: string]: (lastFmData: LastFmData) => JSX.Element;
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

export default function renderLastFM({ lastfmPlugin, lastfmData }: Props): JSX.Element {
  const sections = lastfmPlugin.sections;

  const renderSection = (section: string): JSX.Element => {
    if (sectionRenderers[section]) {
      return sectionRenderers[section](lastfmData);
    }
    return <ErrorMessage message={`Section "${section}" not found. Available sections: \n${allLastFmSections}`} />;
  };

  const hideHeader = lastfmPlugin.hide_header;

  return (
    <>
      <RenderBasedOnStyle
        terminalComponent={
          <TerminalBody>
            {sections.map((section) => (
              <div key={section}>{renderSection(section)}</div>
            ))}
          </TerminalBody>
        }
        defaultComponent={
          <>
            {!hideHeader && <Header title="LastFM" icon={<FaLastfm />} />}
            {sections.map((section) => (
              <div key={section}>{renderSection(section)}</div>
            ))}
          </>
        }
      />
    </>
  );
}
