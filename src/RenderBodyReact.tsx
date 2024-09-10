import React from "react";
import ForeignObject from "./base/ForeignObject";
import SvgContainer from "./base/Dev_SvgContainer";
import { Env } from "./loadEnv";
import { calculateHeight, renderActivePlugins } from "./RenderBodyUtils";

async function RenderBody({ env }: { env: Env }): Promise<JSX.Element> {
  const activePlugins = await renderActivePlugins(env);

  const svgHeight = calculateHeight(env);

  //return active plugins in order as string
  return (
    <SvgContainer columns={env.svg_columns} height={svgHeight}>
      <ForeignObject>
        <>{activePlugins}</>
      </ForeignObject>
    </SvgContainer>
  );
}

export default RenderBody;
