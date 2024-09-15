import React, { ReactNode } from "react";
import LastFmApi from "./api/axios/lastFmApi";
import { Env } from "./loadEnv";
import RenderLastFM from "./plugins/lastfm/lastfm";
import RenderMyAnimeList from "./plugins/mal/Mal";
import { fetchMalData } from "./api/axios/malApi";

async function RenderActivePlugins(env: Env): Promise<ReactNode[]> {
  console.log("RENDER ACTIVE PLUGINS");
  const pluginComponents: { [key: string]: JSX.Element | null } = {};

  if (env.pluginMal) {
    console.log("RENDER MAL");
    const malData = await fetchMalData(env.pluginMal, env.pluginMal.username);
    pluginComponents.mal = <RenderMyAnimeList malPlugin={env.pluginMal} malData={malData} key="mal" />;
  }

  if (env.pluginLastfm) {
    console.log("RENDER LASTFM");
    const lastfmData = await LastFmApi(env.pluginLastfm);
    pluginComponents.lastfm = <RenderLastFM lastfmPlugin={env.pluginLastfm} key="lastfm" lastfmData={lastfmData} />;
  }

  return Object.values(pluginComponents);
}

export default RenderActivePlugins;
