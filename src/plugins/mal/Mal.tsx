import React from "react";
import MyAnimeListPlugin from "../../../types/env/MalPluginType";
import { MalData } from "../../../types/plugins/malTypes";
import { Myanimelist } from "../../icons/MAL_icon";
import Title from "../_components/Default/Default_Header";
import ErrorMessage from "../_components/Error_Style";
import RenderBasedOnStyle from "../_components/RenderBasedOnStyle";
import TerminalBody from "../_components/Terminal/Terminal_Body";
import TerminalHeader from "../_components/Terminal/Terminal_Header";
import LastUpdates from "./LastUpdates";
import Statistics from "./Statistics";
import SimpleFavorites from "./SimpleFavorites";
import SimpleStatistics from "./SimpleStatistics";
import AnimeFavorites from "./AnimeFavorites";
import CharactersFavorites from "./CharactersFavorites";
import StatisticsHorizontalBar from "./HorizontalBar";

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
  // manga_favorites: (malData: MalData) => <section>not yet made manga_favorites</section>,
  // people_favorites: (malData: MalData) => <section>not yet made people_favorites</section>,
  character_favorites: (malData: MalData) => <CharactersFavorites favoritesData={malData.favorites.characters} />,
};

export default function renderMyAnimeList({ malPlugin, malData }: { malPlugin: MyAnimeListPlugin; malData: MalData }): JSX.Element {
  const sections = malPlugin.sections;
  const hideHeader = malPlugin.hide_header;

  const renderSection = (section: string): JSX.Element => {
    if (sectionRenderers[section]) {
      return sectionRenderers[section](malData);
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
            {!hideHeader && <Title icon={<Myanimelist />} title={"MyAnimeList"} />}
            {sections.map((section) => renderSection(section))}
          </>
        }
      />
    </>
  );
}
