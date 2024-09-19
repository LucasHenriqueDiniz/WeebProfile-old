import loadEnv from "./loadEnv";
import storeInGist from "./methods/gist/storeInGist";
import renderBodyString from "./RenderBodyString";

async function main() {
  console.log("Starting...");
  //load env
  const loadedEnv = loadEnv();
  //destructure env
  const { gistId, ghToken, filename, storeMethod } = loadedEnv;
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
