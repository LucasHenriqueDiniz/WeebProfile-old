import React from "react";

export interface LastFMPlugin {
  plugin_lastfm_username: string;
}

function LastFMContent({ lastfmPlugin }: { lastfmPlugin: LastFMPlugin }): JSX.Element {
  return (
    <section>
      <h1>LastFM</h1>
      <p>Username: ${lastfmPlugin.plugin_lastfm_username}</p>
    </section>
  );
}

export default function renderLastFM({ lastfmPlugin }: { lastfmPlugin: LastFMPlugin }): JSX.Element {
  return <LastFMContent lastfmPlugin={lastfmPlugin} />;
}
