import React from "react";
import { fetchMalData } from "./api/axios/malApi";
import { Env } from "./loadEnv";
import RenderLastFM from "./plugins/lastfm/lastfm";
import RenderMyAnimeList from "./plugins/mal/Mal";

function calculateHeight(env: Env): number {
  const activePlugins = env.activePlugins;
  const titleHeight = 34.5;
  let height = 50;

  activePlugins.forEach((plugin) => {
    if (plugin === "base") {
      height += 15;
    } else if (plugin === "mal") {
      if (env.pluginMal) {
        // title
        height += 50;
        env.pluginMal.plugin_mal_sections.forEach((section) => {
          switch (section) {
            case "statistics":
              height += 159;
              break;
            case "stats_circle":
              height += 23;
              break;
            case "stats_verticalbar":
              height += 159;
              break;
            case "anime_bar" || "manga_bar":
              height += 68;
              break;
            case "stats_simple":
              height += 80; // caso for half é 105px
              break;
            case "anime_favorites":
              height += titleHeight + 124 * (env.pluginMal?.plugin_mal_anime_favorites_max || 0);
              break;
            case "manga_favorites":
              height += 250;
              break;
            case "people_favorites":
              height += 250;
              break;
            case "character_favorites":
              height += titleHeight + 54 * (env.pluginMal?.plugin_mal_characters_favorites_max || 0);
              break;
            case "anime_simple_favorites" || "manga_simple_favorites" || "people_simple_favorites" || "character_simple_favorites":
              height += 158;
              break;
            case "last_activity":
              height += titleHeight + 84 * (env.pluginMal?.plugin_mal_lastupdates_max || 0); //confererir ele fica 91px sem half com half ele fica os 80 certinho, arruar isso
              break;
            default:
              height += 23;
              break;
          }
        });
      }
    } else if (plugin === "lastfm") {
      if (env.pluginLastfm) {
        height += 23;
      }
    }
  });

  return height;
}

async function fetchLastFMData() {
  return null;
}

async function renderActivePlugins(env: Env) {
  console.log("RENDER ACTIVE PLUGINS");
  const pluginComponents: { [key: string]: JSX.Element | null } = {
    base: null,
    mal: null,
    lastfm: null,
  };

  if (env.base) {
    console.log("RENDER BASE");
    //   const splitBase = base.split(",");
    pluginComponents.base = <div key="base">B A S E</div>;
  }

  if (env.pluginMal) {
    console.log("RENDER MAL");
    const malData = await fetchMalData(env.pluginMal, env.pluginMal.plugin_mal_username);
    pluginComponents.mal = <RenderMyAnimeList malPlugin={env.pluginMal} malData={malData} key="mal" />;
  }

  if (env.pluginLastfm) {
    console.log("RENDER LASTFM");
    const lastfmData = await fetchLastFMData();
    pluginComponents.lastfm = <RenderLastFM lastfmPlugin={env.pluginLastfm} key="lastfm" />;
  }

  //remove null vales from active plugins
  Object.keys(pluginComponents).forEach((key) => {
    if (!pluginComponents[key]) {
      delete pluginComponents[key];
    }
  });

  //sort active plugins based on sortOrder if sortOrder is defined
  let activePlugins = Object.values(pluginComponents);
  if (env.sortOrder) {
    activePlugins = env.sortOrder.map((key) => pluginComponents[key]);
  }

  return activePlugins;
}

export { calculateHeight, fetchLastFMData, fetchMalData, renderActivePlugins };
