import React from "react";
import { MalData } from "../../../types/mal/malTypes";
import { Myanimelist } from "../../icons/MAL_icon";
import Title from "../Header";
import ClassicFavorites from "./classic/classic_favorites";
import ClassicLastUpdates from "./classic/classic_lastupdates";
import ClassicProfileReact from "./classic/classic_profile";
import DefaultAnimeFavorites from "./default/Default_AnimeFavorites";
import DefaultStatHorizontalBar from "./default/Default_HorizontalBar";
import Default_LastUpdates from "./default/Default_LastUpdates";
import DefaultSimpleFavorites from "./default/Default_SimpleFavorites";
import DefaultStatistics from "./default/Default_SimpleStatistics";
import Default_Statistics from "./default/Default_Statistics";
import Default_StatisticsVerticalBar from "./default/Default_StatisticsVerticalBar";
import DefaultCharactersFavorites from "./default/Default_CharactersFavorites";

export interface MyAnimeListPlugin {
  plugin_mal_username: string;
  plugin_mal_sections: string[];
  plugin_mal_style: "classic" | "terminal" | "default";
  plugin_mal_hide_title: boolean;

  plugin_mal_anime_favorites_max: number;
  plugin_mal_characters_favorites_max: number;
  plugin_mal_people_favorites_max: number;
  plugin_mal_manga_favorites_max: number;

  // Options
  plugin_mal_lastupdates_max: number;
}

const sectionRenderers: Record<string, Record<string, (malPlugin: MyAnimeListPlugin, malData: MalData) => JSX.Element>> = {
  classic: {
    profile_anime: (malPlugin: MyAnimeListPlugin, malData: MalData) => (
      <ClassicProfileReact statisticsData={malData.statistics.anime} lastUpdatesData={malData.last_updated.anime} username={malPlugin.plugin_mal_username} />
    ),
    profile_manga: (malPlugin: MyAnimeListPlugin, malData: MalData) => (
      <ClassicProfileReact statisticsData={malData.statistics.manga} lastUpdatesData={malData.last_updated.manga} username={malPlugin.plugin_mal_username} />
    ),
    anime_favorites: (malPlugin: MyAnimeListPlugin, malData: MalData) => (
      <ClassicFavorites favoritesData={malData.favorites.anime} username={malPlugin.plugin_mal_username} media="anime" />
    ),
    manga_favorites: (malPlugin: MyAnimeListPlugin, malData: MalData) => (
      <ClassicFavorites favoritesData={malData.favorites.manga} username={malPlugin.plugin_mal_username} media="manga" />
    ),
    character_favorites: (malPlugin: MyAnimeListPlugin, malData: MalData) => (
      <ClassicFavorites favoritesData={malData.favorites.characters} username={malPlugin.plugin_mal_username} media="characters" />
    ),
    people_favorites: (malPlugin: MyAnimeListPlugin, malData: MalData) => (
      <ClassicFavorites favoritesData={malData.favorites.people} username={malPlugin.plugin_mal_username} media="people" />
    ),
    last_updated_anime: (malPlugin: MyAnimeListPlugin, malData: MalData) => (
      <ClassicLastUpdates lastUpdatesData={malData.last_updated.anime} username={malPlugin.plugin_mal_username} />
    ),
    last_updated_manga: (malPlugin: MyAnimeListPlugin, malData: MalData) => (
      <ClassicLastUpdates lastUpdatesData={malData.last_updated.manga} username={malPlugin.plugin_mal_username} />
    ),
  },
  terminal: {
    profile: (malPlugin: MyAnimeListPlugin, malData: MalData) => <section>not yet made profile</section>,
  },
  default: {
    statistics: (malPlugin: MyAnimeListPlugin, malData: MalData) => <Default_Statistics statisticsData={malData.statistics} />,
    stats_circle: (malPlugin: MyAnimeListPlugin, malData: MalData) => <section>not yet made stats_circle</section>,
    stats_verticalbar: (malPlugin: MyAnimeListPlugin, malData: MalData) => <Default_StatisticsVerticalBar statisticsData={malData.statistics} />,
    anime_bar: (malPlugin: MyAnimeListPlugin, malData: MalData) => <DefaultStatHorizontalBar animeOrMangaData={malData.statistics.anime} />,
    manga_bar: (malPlugin: MyAnimeListPlugin, malData: MalData) => <DefaultStatHorizontalBar animeOrMangaData={malData.statistics.manga} />,
    stats_simple: (malPlugin: MyAnimeListPlugin, malData: MalData) => <DefaultStatistics statisticsData={malData.statistics} />,

    anime_simple_favorites: (malPlugin: MyAnimeListPlugin, malData: MalData) => <DefaultSimpleFavorites favoritesData={malData.favorites.anime} title="Anime Favorites" />,
    manga_simple_favorites: (malPlugin: MyAnimeListPlugin, malData: MalData) => <DefaultSimpleFavorites favoritesData={malData.favorites.manga} title="Manga Favorites" />,
    people_simple_favorites: (malPlugin: MyAnimeListPlugin, malData: MalData) => <DefaultSimpleFavorites favoritesData={malData.favorites.people} title="People Favorites" />,
    character_simple_favorites: (malPlugin: MyAnimeListPlugin, malData: MalData) => (
      <DefaultSimpleFavorites favoritesData={malData.favorites.characters} title="Character Favorites" />
    ),

    anime_favorites: (malPlugin: MyAnimeListPlugin, malData: MalData) => <DefaultAnimeFavorites favoritesData={malData.favorites_full.anime} />,
    manga_favorites: (malPlugin: MyAnimeListPlugin, malData: MalData) => <section>not yet made manga_favorites</section>,
    people_favorites: (malPlugin: MyAnimeListPlugin, malData: MalData) => <section>not yet made people_favorites</section>,
    character_favorites: (malPlugin: MyAnimeListPlugin, malData: MalData) => <DefaultCharactersFavorites favoritesData={malData.favorites.characters} />,

    last_activity: (malPlugin: MyAnimeListPlugin, malData: MalData) => (
      <Default_LastUpdates lastUpdatesData={malData.last_updated} maxItems={malPlugin.plugin_mal_lastupdates_max} />
    ),
  },
};

export default function renderMyAnimeList({ malPlugin, malData }: { malPlugin: MyAnimeListPlugin; malData: MalData }): JSX.Element {
  if (!malPlugin.plugin_mal_username || !malPlugin.plugin_mal_sections || !malPlugin.plugin_mal_style) {
    return <section>Missing required MAL plugin configuration</section>;
  }

  const sections = malPlugin.plugin_mal_sections;
  const style = malPlugin.plugin_mal_style;
  const username = malPlugin.plugin_mal_username;
  const hideTitle = malPlugin.plugin_mal_hide_title;

  const SectionsToRender = sections.map((section) => {
    if (!sectionRenderers[style][section]) {
      return (
        <section>
          {style} - Section not implemented: {section}
        </section>
      );
    }

    return <React.Fragment key={section}>{sectionRenderers[style][section](malPlugin, malData)}</React.Fragment>;
  });

  return (
    <>
      {!hideTitle && <Title icon={<Myanimelist />} title={"MyAnimeList"} />}
      {SectionsToRender}
    </>
  );
}
