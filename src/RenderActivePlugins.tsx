import { ReactNode } from "react";
import envType from "../types/envType";
import { pluginsData } from "./fetchPluginData";
import TerminalHeader from "./plugins/!templates/Terminal/Terminal_Header";
import RenderGithub from "./plugins/github";
import RenderLastFM from "./plugins/lastfm";
import RenderMyAnimeList from "./plugins/mal";

async function RenderActivePlugins(env: envType, pluginData: pluginsData): Promise<ReactNode> {
  console.log("RENDER ACTIVE PLUGINS");
  const pluginComponents: { [key: string]: JSX.Element | null } = {};
  const pluginsOrder = env.pluginsOrder;

  if (env.pluginMal) {
    console.log("RENDER MAL");
    pluginComponents.mal = <RenderMyAnimeList malPlugin={env.pluginMal} malData={pluginData.mal} key="mal" />;
  }

  if (env.pluginLastfm) {
    console.log("RENDER LASTFM");
    pluginComponents.lastfm = <RenderLastFM lastfmPlugin={env.pluginLastfm} lastfmData={pluginData.lastfm} key="lastfm" />;
  }

  if (env.pluginGithub) {
    console.log("RENDER GITHUB");
    pluginComponents.github = <RenderGithub githubPlugin={env.pluginGithub} githubData={pluginData.github} key="github" />;
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
