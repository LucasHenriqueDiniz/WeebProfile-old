function splitString(envString: string | undefined): string[] {
  // string example "PLUGIN_SECTIONS: anime, manga" => { PLUGIN_SECTIONS: ["anime", "manga"] }
  if (!envString) {
    console.warn("Empty string, envString: " + envString);
    return [];
  }
  try {
    return envString.split(",").map((s) => s.trim());
  } catch (e) {
    throw new Error("Failed to split string, envString: " + envString);
  }
}

export default splitString;
