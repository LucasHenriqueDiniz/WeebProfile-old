interface LastFMPlugin {
  plugin_lastfm_username: string | undefined;
}

function lastFMContent(lastfmPlugin: LastFMPlugin): string {
  return `
  <section>
    <h1>LastFM</h1>
    <p>Username: ${lastfmPlugin.plugin_lastfm_username}</p>
  </section>
  `;
}

export default function renderLastFM(lastfmPlugin: LastFMPlugin): string {
  return lastFMContent(lastfmPlugin);
}
