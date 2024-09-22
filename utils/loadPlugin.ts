import ENV_VARIABLES_TYPE from "../types/envVariables";
import splitString from "./splitString";
import toBoolean from "./toBoolean";

function loadPlugin<T extends Record<string, any>>(
  envVars: Record<string, string>,
  activePlugins: string[],
  pluginSpecificEnvVariables: Record<string, ENV_VARIABLES_TYPE>,
  pluginName: string
): T | null {
  console.log("LOAD PLUGIN", pluginName);
  const pluginConfig: any = {};
  const firstKey = Object.keys(pluginSpecificEnvVariables)[0];

  if (!toBoolean(envVars[firstKey.toUpperCase()])) {
    console.log("NOT ENABLED", pluginName);
    return null;
  }

  for (const key in pluginSpecificEnvVariables) {
    const { defaultValue, required, type } = pluginSpecificEnvVariables[key];
    //ignore if === plugin_name
    const variable = key === firstKey ? key : `PLUGIN_${pluginName.toUpperCase()}_${key.toUpperCase()}`;
    let value = envVars[variable];

    if (required && !value) {
      console.error("ERROR", `Missing required environment variable: ${variable} for plugin ${pluginName}, value: ${value}`);
      break;
    }

    if (!value && defaultValue) {
      value = defaultValue;
    }

    switch (type) {
      case "boolean":
        pluginConfig[key] = toBoolean(value);
        break;
      case "number":
        pluginConfig[key] = parseInt(value);
        break;
      case "stringArray":
        pluginConfig[key] = splitString(value);
        break;
      default:
        pluginConfig[key] = value;
    }
  }

  activePlugins.push(pluginName);
  console.log("LOADED PLUGIN", pluginName);
  console.log(pluginConfig);
  return pluginConfig as T;
}

export default loadPlugin;
