import envType from "../types/envType";
import isNodeEnvironment from "../utils/isNodeEnv";

export async function LoadCss(Env: envType) {
  const isHalf = Env.size === "half";
  const customCss = Env.customCss;
  const style = Env.style;
  const isNodeEnv = isNodeEnvironment();

  if (isNodeEnv) {
    console.log("LOAD CSS NODE ENV");
    // NODE SIDE
    const fs = require("fs");
    const path = require("path");
    let css: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal;

    const fontsFile = fs.readFileSync(path.resolve(__dirname, "./styles/fonts.css"), "utf8");
    const halfCssFile = fs.readFileSync(path.resolve(__dirname, "./styles/half.css"), "utf8");
    const halfMimizedCss = halfCssFile.replace(/\s{2,10}/g, " ").replace(/(\r\n|\n|\r)/gm, "");
    const mainCssFile = fs.readFileSync(path.resolve(__dirname, "./styles/main.css"), "utf8");
    const mainMimizedCss = mainCssFile.replace(/\s{2,10}/g, " ").replace(/(\r\n|\n|\r)/gm, "");

    switch (style) {
      case "terminal":
        const terminalCss = fs.readFileSync(path.resolve(__dirname, "./styles/terminal.css"), "utf8");
        css = terminalCss.replace(/\s{2,10}/g, " ").replace(/(\r\n|\n|\r)/gm, "");
        break;
      default:
        const cssFile = fs.readFileSync(path.resolve(__dirname, "./styles/default.css"), "utf8");
        css = cssFile.replace(/\s{2,10}/g, " ").replace(/(\r\n|\n|\r)/gm, "");
        break;
    }
    return (
      <>
        {isHalf ? <style>{halfMimizedCss}</style> : null}
        <style>{fontsFile}</style>
        <style>{css}</style>
        {customCss && <style>{customCss}</style>}
        <style>{mainMimizedCss}</style>
      </>
    );
  } else {
    console.log("LOAD CSS CLIENT ENV");
    // CLIENT SIDE
    // for now just import css files in the app, later implement dynamic css loading in the client
    return <></>;
  }
}

export default LoadCss;
