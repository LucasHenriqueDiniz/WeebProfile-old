import loadEnv, { Env } from "../src/loadEnv";
import isNodeEnvironment from "./isNodeEnv";
import config from "../src/config";

function getEnvVariables(): Env {
  const isNodeEnv = isNodeEnvironment();

  if (isNodeEnv) {
    return loadEnv();
  } else {
    return config;
  }
}

export default getEnvVariables;
