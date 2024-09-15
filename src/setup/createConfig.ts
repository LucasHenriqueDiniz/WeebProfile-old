import fs from "fs";
import path from "path";
import loadEnv from "../loadEnv";

const loadedEnv = loadEnv();

if (!loadedEnv.gistId) {
  throw new Error("Missing GIST_ID");
}

const configContent = `
// This file is generated automatically, do not edit directly!
// Generated at ${new Date().toISOString()}

import { Env } from "./loadEnv";

const config = ${JSON.stringify(loadedEnv, null, 2)} as Env;

export default config;
`;

const configFilePath = path.resolve(__dirname, "../config.ts");

fs.writeFileSync(configFilePath, configContent);

console.log("config.js file created successfully!");
