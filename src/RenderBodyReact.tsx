import React from "react";
import ForeignObject from "./base/ForeignObject";
import SvgContainer from "./base/SvgContainer";
import { Env } from "./loadEnv";
import { calculateRealHeight, renderActivePlugins } from "./RenderBodyUtils";

import "./styles/default.css";
import "./styles/fonts.css";
import "./styles/half.css";

async function RenderBody({ env }: { env: Env }): Promise<JSX.Element> {
  console.log("MAIN > RENDER BODY REACT");
  const activePlugins = await renderActivePlugins(env);
  const svgHeight = await calculateRealHeight(activePlugins, env);

  return (
    <SvgContainer size={env.size ?? "full"} height={svgHeight}>
      <ForeignObject>
        <>{activePlugins}</>
      </ForeignObject>
    </SvgContainer>
  );
}

export default RenderBody;
