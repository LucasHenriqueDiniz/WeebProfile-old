import loadEnv from "./loadEnv";
import storeInGist from "./methods/gist/storeInGist";
import storeLocally from "./methods/local/storeLocally";
import renderBodyString from "./RenderBodyString";

async function main() {
  console.log("Starting...");
  //load env
  const loadedEnv = loadEnv();
  //destructure env
  const { gistId, ghToken, filename, storageMethod } = loadedEnv;
  //render body
  const htmlString = await renderBodyString({ env: loadedEnv });

  //store data
  switch (storageMethod) {
    case "gist":
      await storeInGist(gistId, ghToken, htmlString, filename);
      break;
    case "local":
      await storeLocally(htmlString, filename);
      break;
    case "repository":
      console.error("Repository storage method not implemented yet");
      break;
    default:
      throw new Error("Invalid STORE_METHOD");
  }
}

main();
