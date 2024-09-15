import React from "react";
import { renderToString } from "react-dom/server";
import calculateElementHeight from "../utils/calculateElementHeight";
import ForeignObject from "./base/ForeignObject";
import SvgContainer from "./base/SvgContainer";
import { Env } from "./loadEnv";
import RenderActivePlugins from "./RenderActivePlugins";

async function RenderBody({ env }: { env: Env }): Promise<string> {
  console.log("MAIN > RENDER BODY NODE");
  const activePlugins = await RenderActivePlugins(env);

  const svgHeight = (await calculateElementHeight(activePlugins, env)) + 50;

  //return active plugins in order as string
  const htmlString = renderToString(
    <SvgContainer size={env.size ?? "full"} height={svgHeight}>
      <ForeignObject>
        <>{activePlugins}</>
      </ForeignObject>
    </SvgContainer>
  );
  return htmlString;
}

export default RenderBody;
