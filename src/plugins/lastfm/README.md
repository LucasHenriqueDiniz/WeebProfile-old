<!--header-->
<table>
  <tr><td colspan="2"><a href="/README.md#-plugins">← Back to plugins index</a></td></tr>
  <tr><th colspan="2">🎵 LastFM Plugin</th></tr>
  <tr><td colspan="2" align="center"></td></tr>

  <tr>
    <th rowspan="3">Supported features<br><sub><a href="metadata.yml">→ Full specification (TODO)</a></sub></th>
    <td>
    <a href="/source/templates/default/README.md"><code>📗 Default template (TODO)</code></a>
    <a href="/source/templates/terminal/README.md"><code>📙 Terminal template (TODO) </code></a>
    </td>
  </tr>
@TODO
</table>

<!--/options-->

## 🛈 Examples workflows

<!--examples-->

```yaml
- name: 🦀 LastFM 🦀
  uses: LucasHenriqueDiniz/WeebProfile@main
  with:
    FILENAME: LastFM.svg
    GIST_ID: ${{ secrets.GIST_ID }}
    GH_TOKEN: ${{ secrets.GH_TOKEN }}
    STORAGE_METHOD: gist
    SIZE: half

    PLUGIN_LASTFM: true
    PLUGIN_LASTFM_HIDE_HEADER: true
    PLUGIN_LASTFM_USERNAME: Amayacrab
    PLUGIN_LASTFM_STYLE: default
    PLUGIN_LASTFM_SECTIONS: recent_tracks, top_artists_default, top_albums_grid
    PLUGIN_LASTFM_RECENTTRACKS_MAX: 5
    PLUGIN_LASTFM_TOPARTISTS_MAX: 5
    PLUGIN_LASTFM_TOPALBUMS_MAX: 4
```

<!--/examples-->
