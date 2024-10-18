import loadEnv from "./loadEnv";
import storeInGist from "./methods/gist/storeInGist";
import storeLocally from "./methods/local/storeLocally";
import RenderBody from "./RenderBody";

async function main() {
  console.log("Starting...");
  //load env
  const loadedEnv = loadEnv();
  //destructure env
  const { gistId, ghToken, filename, storageMethod } = loadedEnv;
  //render body
  const htmlString = await RenderBody({ env: loadedEnv });

  if (!htmlString || typeof htmlString !== "string") {
    throw new Error(`Something went wrong while rendering body, make sure the function returns a string ${typeof htmlString}`);
  }

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
