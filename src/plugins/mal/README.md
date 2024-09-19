<!--header-->
<table>
  <tr><td colspan="2"><a href="/README.md#-plugins">← Back to plugins index</a></td></tr>
  <tr><th colspan="2">🌸 MyAnimeList Plugin</th></tr>
  <tr><td colspan="2" align="center"></td></tr>

  <tr>
    <th rowspan="3">Supported features<br><sub><a href="metadata.yml">→ Full specification (TODO)</a></sub></th>
    <td>
    <a href="/source/templates/default/README.md"><code>📗 Classic template (TODO)</code></a>
    <a href="/source/templates/terminal/README.md"><code>📙 Terminal template (TODO) </code></a>
    </td>
  </tr>
@TODO
</table>

<!--/options-->

## 🛈 Examples workflows

<!--examples-->

```yaml
- name: 🦀 MyAnimeList 🦀
  uses: LucasHenriqueDiniz/WeebProfile@main
  with:
    FILENAME: MyAnimeList.svg
    GIST_ID: ${{ secrets.GIST_ID }}
    GH_TOKEN: ${{ secrets.GH_TOKEN }}
    STORAGE_METHOD: gist
    SIZE: half

    PLUGIN_MAL: true
    PLUGIN_LASTFM_HIDE_HEADER: true
    PLUGIN_MAL_HIDE_HEADER: true
    PLUGIN_MAL_USERNAME: Amayacrab
    PLUGIN_MAL_STYLE: default
    PLUGIN_MAL_SECTIONS: stats_simple, character_simple_favorites, anime_favorites
    PLUGIN_MAL_ANIME_FAVORITES_MAX: 3
    PLUGIN_MAL_CHARACTER_FAVORITES_MAX: 5
```

<!--/examples-->
