import calculateElementHeight from "../utils/calculateElementHeight";
import ForeignObject from "./base/ForeignObject";
import SvgContainer from "./base/SvgContainer";
import RenderActivePlugins from "./RenderActivePlugins";
import "./styles/default.css";
import "./styles/terminal.css";
import "./styles/fonts.css";
import "./styles/half.css";
import "./styles/main.css";
import envType from "../types/envType";

async function RenderBody({ env }: { env: envType }): Promise<JSX.Element> {
  console.log("MAIN > RENDER BODY REACT");
  const activePlugins = await RenderActivePlugins(env);
  const svgHeight = await calculateElementHeight(activePlugins, env);

  //@ TODO - maybe make just one renderbody function and pass the renderToString as a parameter or something
  // return react component of active plugins
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
