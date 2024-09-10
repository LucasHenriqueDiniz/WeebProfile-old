import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import loadEnv, { Env } from "../loadEnv";

dotenv.config();

const env = process.env;

if (!env) {
  throw new Error("No env found");
}

const loadedEnv = loadEnv(process.env);

const configContent = `
// This file is generated automatically, do not edit directly!
import { Env } from "./loadEnv";

const config = ${JSON.stringify(loadedEnv, null, 2)} as Env;

export default config;
`;

const configFilePath = path.resolve(__dirname, "../config.ts");

fs.writeFileSync(configFilePath, configContent);

console.log("config.js file created successfully!");
