import dotenv from "dotenv";
import loadEnv from "./loadEnv";
import storeInGist from "./methods/gist/storeInGist";
import renderBodyString from "./RenderBodyString";

dotenv.config();

async function main() {
  console.log("Starting...");

  //load env
  const loadedEnv = loadEnv(process.env);
  //destructure env
  const { gistId, ghToken, filename, base, sortOrder, storeMethod, hideMain, pluginMal, pluginLastfm, svg_columns, activePlugins } = loadedEnv;
  //render body
  const htmlString = await renderBodyString({ env: loadedEnv });

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
