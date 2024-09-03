import React from "react";
import { MalData } from "../../../types/mal/malTypes";
import ClassicFavorites from "./classic/classic_favorites";
import ClassicLastUpdates from "./classic/classic_lastupdates";
import ClassicProfileReact from "./classic/classic_profile";

export interface MyAnimeListPlugin {
  plugin_mal_username: string;
  plugin_mal_sections: string[];
  plugin_mal_profile_media: string[];
  plugin_mal_style: "classic" | "terminal";
  plugin_mal_favorites_media: string[];
  plugin_mal_favorites_rows: number;
  plugin_mal_lastactivity_media: string[];
}

const sectionRenderers: Record<string, Record<string, (username: string, media: string, malData: MalData) => JSX.Element>> = {
  classic: {
    profile: (username: string, media: string, malData: MalData) => (
      <ClassicProfileReact statisticsData={malData.statistics[media]} lastUpdatesData={malData.last_updated[media]} username={username} />
    ),
    favorites: (username: string, media: string, malData: MalData) => <ClassicFavorites favoritesData={malData.favorites[media]} username={username} media={media} />,
    "last-updated": (username: string, media: string, malData: MalData) => <ClassicLastUpdates lastUpdatesData={malData.last_updated[media]} username={username} />,
  },
  terminal: {
    profile: (username: string, media: string) => <section>not implemented = {media} profile</section>,
    favorites: (username: string, media: string) => <section>not implemented = {media} favorites</section>,
    "last-updated": (username: string, media: string) => <section>not implemented {media} last-updated</section>,
  },
};

export default function renderMyAnimeList({ malPlugin, malData }: { malPlugin: MyAnimeListPlugin; malData: MalData }): JSX.Element {
  if (!malPlugin.plugin_mal_username || !malPlugin.plugin_mal_sections || !malPlugin.plugin_mal_style) {
    return <section>Missing required MAL plugin configuration</section>;
  }

  const sectionMediaConfigs: { [section: string]: string[] | undefined } = {
    profile: malPlugin.plugin_mal_profile_media,
    favorites: malPlugin.plugin_mal_favorites_media,
    "last-updated": malPlugin.plugin_mal_lastactivity_media,
  };

  const favoritesRows = malPlugin.plugin_mal_favorites_rows;
  const sections = malPlugin.plugin_mal_sections;
  const style = malPlugin.plugin_mal_style;
  const username = malPlugin.plugin_mal_username;

  const SectionsToRender = sections.flatMap((section) => {
    const mediaForSection = sectionMediaConfigs[section];
    if (!mediaForSection) return [];

    return mediaForSection.map((media) => <React.Fragment key={`${media}-${section}`}>{sectionRenderers[style][section](username, media, malData)}</React.Fragment>);
  });

  return <>{SectionsToRender}</>;
}
