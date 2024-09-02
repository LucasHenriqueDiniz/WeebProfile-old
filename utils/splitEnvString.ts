function splitString(envString: string): string[] {
  // string example "PLUGIN_SECTIONS: anime, manga" => { PLUGIN_SECTIONS: ["anime", "manga"] }

  return envString.split(",").map((s) => s.trim());
}

export default splitString;
