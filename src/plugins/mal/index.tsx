import { SiMyanimelist } from "react-icons/si";
import { Header } from "../!templates/Default/Default_Header";
import ErrorMessage from "../!templates/Error_Style";
import RenderBasedOnStyle from "../!templates/RenderBasedOnStyle";
import TerminalBody from "../!templates/Terminal/Terminal_Body";
import AnimeFavorites from "./components/AnimeFavorites";
import CharactersFavorites from "./components/CharactersFavorites";
import StatisticsHorizontalBar from "./components/HorizontalBar";
import LastUpdates from "./components/LastUpdates";
import SimpleFavorites from "./components/SimpleFavorites";
import SimpleStatistics from "./components/SimpleStatistics";
import Statistics from "./components/Statistics";
import MyAnimeListPlugin, { AllMyAnimeListSections } from "./types/envMal";
import { MalData } from "./types/malTypes";
import MangaFavorites from "./components/MangaFavorites";
import PeopleFavorites from "./components/PeopleFavorites";

const sectionRenderers: Record<string, (malData: MalData) => JSX.Element> = {
  statistics: (malData: MalData) => <Statistics statisticsData={malData.statistics} />,
  last_activity: (malData: MalData) => <LastUpdates lastUpdatesData={malData.last_updated} />,
  statistics_simple: (malData: MalData) => <SimpleStatistics statisticsData={malData.statistics} />,

  // stats_circle: (malData: MalData) => <section>not yet made stats_circle</section>,
  anime_bar: (malData: MalData) => <StatisticsHorizontalBar animeOrMangaData={malData.statistics.anime} />,
  manga_bar: (malData: MalData) => <StatisticsHorizontalBar animeOrMangaData={malData.statistics.manga} />,

  anime_simple_favorites: (malData: MalData) => <SimpleFavorites favoritesData={malData.favorites.anime} type="anime" />,
  manga_simple_favorites: (malData: MalData) => <SimpleFavorites favoritesData={malData.favorites.manga} type="manga" />,
  people_simple_favorites: (malData: MalData) => <SimpleFavorites favoritesData={malData.favorites.people} type="people" />,
  character_simple_favorites: (malData: MalData) => <SimpleFavorites favoritesData={malData.favorites.characters} type="characters" />,

  anime_favorites: (malData: MalData) => <AnimeFavorites favoritesData={malData.favorites_full.anime} />,
  manga_favorites: (malData: MalData) => <MangaFavorites favoritesData={malData.favorites_full.manga} />,
  people_favorites: (malData: MalData) => <PeopleFavorites favoritesData={malData.favorites.people} />,
  character_favorites: (malData: MalData) => <CharactersFavorites favoritesData={malData.favorites.characters} />,
};

export default function renderMyAnimeList({ malPlugin, malData }: { malPlugin: MyAnimeListPlugin; malData: MalData }): JSX.Element {
  const sections = malPlugin.sections;
  const hideHeader = malPlugin.hide_header;

  const renderSection = (section: string): JSX.Element => {
    if (sectionRenderers[section]) {
      return sectionRenderers[section](malData);
    }
    console.log(`Section "${section}" not found, available sections: \n${AllMyAnimeListSections}`);
    return <ErrorMessage message={`Section ${section} not found`} />;
  };

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
            {!hideHeader && <Header icon={<SiMyanimelist />} title={"MyAnimeList"} />}
            {sections.map((section) => (
              <div key={section}>{renderSection(section)}</div>
            ))}
          </>
        }
      />
    </>
  );
}
