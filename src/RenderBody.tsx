import React, { JSX } from "react";
import { renderToString } from "react-dom/server";
import { MalData } from "../types/mal/malTypes";
import { getImageFavorites, getImageLastUpdates, myAnimeListFullRequest } from "./api/axios/malApi";
import ForeignObject from "./base/ForeignObject";
import SvgContainer from "./base/SvgContainer";
import { Env } from "./loadEnv";
import RenderLastFM from "./plugins/lastfm/lastfm";
import RenderMyAnimeList from "./plugins/mal/Mal";

interface RenderBodyProps {
  env: Env;
}

function calculateHeight(env: Env): number {
  const activePlugins = env.activePlugins;
  let height = 0;

  activePlugins.forEach((plugin) => {
    if (plugin === "base") {
      height += 250;
    } else if (plugin === "mal") {
      if (env.pluginMal) {
        height += env.pluginMal.plugin_mal_sections.length * 250;

        if (env.pluginMal.plugin_mal_sections.includes("favorites")) {
          height += 170 * env.pluginMal.plugin_mal_favorites_media.length;
        }
      }
    } else if (plugin === "lastfm") {
      if (env.pluginLastfm) {
        height += 250;
      }
    }
  });

  return height;
}

async function fetchMalData(sections: string[], username: string) {
  const fullRequest = await myAnimeListFullRequest(username);

  const malData: MalData = {
    profile: fullRequest,
    favorites: await getImageFavorites(fullRequest.data.favorites),
    last_updated: await getImageLastUpdates(fullRequest.data.updates),
    statistics: fullRequest.data.statistics,
  };

  return malData;
}

async function RenderBody({ env }: RenderBodyProps): Promise<string> {
  const pluginComponents: { [key: string]: JSX.Element | null } = {
    base: null,
    mal: null,
    lastfm: null,
  };

  if (env.base) {
    //   const splitBase = base.split(",");
    pluginComponents.base = <div>B A S E</div>;
  }

  if (env.pluginMal) {
    const malData = await fetchMalData(env.pluginMal.plugin_mal_sections, env.pluginMal.plugin_mal_username);
    pluginComponents.mal = <RenderMyAnimeList malPlugin={env.pluginMal} malData={malData} />;
  }

  if (env.pluginLastfm) {
    pluginComponents.lastfm = <RenderLastFM lastfmPlugin={env.pluginLastfm} />;
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

  const svgHeight = calculateHeight(env);

  //return active plugins in order as string
  const htmlString = renderToString(
    <SvgContainer columns={env.svg_columns} height={svgHeight}>
      <ForeignObject>
        <>{activePlugins}</>
      </ForeignObject>
    </SvgContainer>,
  );
  return htmlString;
}

export default RenderBody;
