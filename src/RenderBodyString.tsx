import React from "react";
import { renderToString } from "react-dom/server";
import ForeignObject from "./base/ForeignObject";
import SvgContainer from "./base/SvgContainer";
import { Env } from "./loadEnv";
import { calculateHeight, renderActivePlugins } from "./RenderBodyUtils";

async function RenderBody({ env }: { env: Env }): Promise<string> {
  console.log("MAIN > RENDER BODY");
  const activePlugins = await renderActivePlugins(env);

  const svgHeight = calculateHeight(env);

  //return active plugins in order as string
  const htmlString = renderToString(
    <SvgContainer columns={env.svg_columns} height={svgHeight}>
      <ForeignObject>
        <>{activePlugins}</>
      </ForeignObject>
    </SvgContainer>
  );
  return htmlString;
}

export default RenderBody;
