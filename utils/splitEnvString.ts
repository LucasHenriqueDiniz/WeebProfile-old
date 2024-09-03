function splitString(envString: string): string[] {
  // string example "PLUGIN_SECTIONS: anime, manga" => { PLUGIN_SECTIONS: ["anime", "manga"] }
  try {
    return envString.split(",").map((s) => s.trim());
  } catch (e) {
    throw new Error("Failed to split string, envString: " + envString);
  }
}

export default splitString;
