import config from "../src/config";
import loadEnv from "../src/loadEnv";
import envType from "../types/envType";
import isNodeEnvironment from "./isNodeEnv";

let cachedEnv: envType | null = null;

function getEnvVariables(): envType {
  const isNodeEnv = isNodeEnvironment();

  if (isNodeEnv) {
    // return loadEnv();
    if (!cachedEnv) {
      cachedEnv = loadEnv();
    }
    return cachedEnv;
  } else {
    return config;
  }
}

export default getEnvVariables;
