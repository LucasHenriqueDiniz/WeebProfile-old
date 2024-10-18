import { renderToString } from "react-dom/server";
import envType from "../types/envType";
import calculateElementHeight from "../utils/calculateElementHeight";
import isNodeEnvironment from "../utils/isNodeEnv";
import ForeignObject from "./base/ForeignObject";
import SvgContainer from "./base/SvgContainer";
import fetchPluginData, { pluginsData } from "./fetchPluginData";
import LoadCss from "./loadCss";
import RenderActivePlugins from "./RenderActivePlugins";

let pluginsDataCache: pluginsData | null = null;

async function RenderBody({ env }: { env: envType }): Promise<JSX.Element | string> {
  const isNodeEnv = isNodeEnvironment();
  console.log("MAIN > RENDER BODY");

  if (!pluginsDataCache || isNodeEnv) {
    console.log("MAIN > FETCH PLUGIN DATA");
    pluginsDataCache = await fetchPluginData(env);
  }

  const activePlugins = await RenderActivePlugins(env, pluginsDataCache);
  const svgHeight = await calculateElementHeight(activePlugins, env);

  if (isNodeEnv) {
    const htmlString = renderToString(
      <SvgContainer size={env.size ?? "full"} height={svgHeight} style={env.style}>
        <>
          <defs>{await LoadCss(env)}</defs>
          <ForeignObject>
            <>{activePlugins}</>
          </ForeignObject>
        </>
      </SvgContainer>
    );

    return htmlString;
  }

  return (
    <SvgContainer size={env.size ?? "full"} height={svgHeight} style={env.style}>
      <>
        <ForeignObject>
          <>{activePlugins}</>
        </ForeignObject>
      </>
    </SvgContainer>
  );
}

export default RenderBody;
