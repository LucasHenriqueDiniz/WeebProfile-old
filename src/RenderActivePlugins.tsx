import { ReactNode } from "react";
import envType from "../types/envType";
import TerminalHeader from "./plugins/!templates/Terminal/Terminal_Header";
import RenderGithub from "./plugins/github";
import fetchGithubData from "./plugins/github/services/fetchGithub";
import RenderLastFM from "./plugins/lastfm";
import LastFmApi from "./plugins/lastfm/services/lastFmApi";
import RenderMyAnimeList from "./plugins/mal";
import { fetchMalData } from "./plugins/mal/services/malApi";

async function RenderActivePlugins(env: envType): Promise<ReactNode> {
  console.log("RENDER ACTIVE PLUGINS");
  const pluginComponents: { [key: string]: JSX.Element | null } = {};
  const pluginsOrder = env.pluginsOrder;

  if (env.pluginMal) {
    console.log("RENDER MAL");
    const malData = await fetchMalData(env.pluginMal, env.pluginMal.username);
    pluginComponents.mal = <RenderMyAnimeList malPlugin={env.pluginMal} malData={malData} key="mal" />;
  }

  if (env.pluginLastfm) {
    console.log("RENDER LASTFM");
    const lastfmData = await LastFmApi(env.pluginLastfm);
    pluginComponents.lastfm = <RenderLastFM lastfmPlugin={env.pluginLastfm} lastfmData={lastfmData} key="lastfm" />;
  }

  if (env.pluginGithub) {
    console.log("RENDER GITHUB");
    const githubData = await fetchGithubData(env.pluginGithub, env.ghToken);
    pluginComponents.github = <RenderGithub githubPlugin={env.pluginGithub} githubData={githubData} key="github" />;
  }

  const activePlugins = Object.values(pluginComponents).filter(Boolean);

  if (pluginsOrder.length > 0) {
    activePlugins.sort((a, b) => {
      const aIndex = pluginsOrder.indexOf((a as any).key);
      const bIndex = pluginsOrder.indexOf((b as any).key);
      return aIndex - bIndex;
    });
  }

  return (
    <>
      {env.style === "terminal" && activePlugins.length > 0 && <TerminalHeader />}
      {activePlugins}
    </>
  );
}

export default RenderActivePlugins;
