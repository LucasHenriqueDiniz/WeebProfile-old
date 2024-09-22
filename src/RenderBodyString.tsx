import { renderToString } from "react-dom/server";
import envType from "../types/envType";
import calculateElementHeight from "../utils/calculateElementHeight";
import ForeignObject from "./base/ForeignObject";
import SvgContainer from "./base/SvgContainer";
import LoadCss from "./loadCss";
import RenderActivePlugins from "./RenderActivePlugins";

async function RenderBody({ env }: { env: envType }): Promise<string> {
  console.log("MAIN > RENDER BODY STRING");
  const activePlugins = await RenderActivePlugins(env);

  const svgHeight = await calculateElementHeight(activePlugins, env);

  //return active plugins in order as string
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

export default RenderBody;
