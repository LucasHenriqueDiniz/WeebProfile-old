import dotenv from "dotenv";
import loadEnv from "./loadEnv";
import storeInGist from "./methods/gist/storeInGist";
import renderBody from "./RenderBody";

dotenv.config();

async function main() {
  //load env
  const loadedEnv = loadEnv(process.env);
  //destructure env
  const { gistId, ghToken, filename, base, sortOrder, storeMethod, hideMain, pluginMal, pluginLastfm, svg_columns, activePlugins } = loadedEnv;
  //render body
  const htmlString = await renderBody({ env: loadedEnv });
  //store data
  switch (storeMethod) {
    case "gist":
      await storeInGist(gistId, ghToken, htmlString, filename);
      break;
    case "local":
      break;
    default:
      throw new Error("Invalid STORE_METHOD");
  }
}

main();
