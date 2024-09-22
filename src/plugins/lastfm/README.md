<!-- This file is auto-generated, don't update it manually -->

<!-- Title -->

# LASTFM Plugin

<sub>This README is auto-generated and will be updated with the latest plugin options and supported sections.</sub>


<!-- Summary -->

### 📝 Contents

- [Available options](#available-options)
- [Supported sections](#supported-sections)

<!-- Plugin options -->

### ➡️ Available options

<table>
  <tr>
    <td align="center" nowrap="nowrap"><b>Variable</b></td>
    <td align="center" nowrap="nowrap"><b>Description</b></td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>PLUGIN_LASTFM <span style='color: red;'>*</span>    <td rowspan="2">
      <p>Enable LastFM plugin</p>
      <p><b>Example:</b></p>
      <code>
PLUGIN_LASTFM=true
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>boolean</code><br>      <br><b>required:</b> <span style="color: red;">true</span>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_USERNAME <span style='color: red;'>*</span>    <td rowspan="2">
      <p>LastFM username</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_USERNAME="value"
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>string</code><br>      <br><b>required:</b> <span style="color: red;">true</span>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_SECTIONS    <td rowspan="2">
      <p>Sections to display in the profile</p>
      <b>Available sections:</b>
      <code>recent_tracks</code>, <code>statistics</code>, <code>top_artists_grid</code>, <code>top_artists_list</code>, <code>top_artists_default</code>, <code>top_albums_list</code>, <code>top_albums_grid</code>, <code>top_albums_default</code>, <code>top_tracks_list</code>, <code>top_tracks_grid</code>, <code>top_tracks_default</code>
      <p><b>Example:</b></p>
      <code>
LASTFM_SECTIONS="top_tracks"
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>stringArray</code><br>      <br><b>default:</b> top_tracks    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_HIDE_HEADER    <td rowspan="2">
      <p>Hide the header of the profile</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_HIDE_HEADER=true
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>boolean</code><br>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_HIDE_INTERVALS    <td rowspan="2">
      <p>Hide the intervals of the profile</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_HIDE_INTERVALS=true
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>boolean</code><br>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_RECENT_TRACKS_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the recent tracks section</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_RECENT_TRACKS_HIDE_TITLE=true
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>boolean</code><br>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_RECENT_TRACKS_MAX    <td rowspan="2">
      <p>Number of recent tracks to display</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_RECENT_TRACKS_MAX=5
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>number</code><br>      <br><b>default:</b> 5    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_ARTISTS_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the top artists section</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_TOP_ARTISTS_HIDE_TITLE=true
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>boolean</code><br>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_ARTISTS_MAX    <td rowspan="2">
      <p>Number of top artists to display</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_TOP_ARTISTS_MAX=5
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>number</code><br>      <br><b>default:</b> 5    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_ALBUMS_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the top albums section</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_TOP_ALBUMS_HIDE_TITLE=true
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>boolean</code><br>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_ALBUMS_MAX    <td rowspan="2">
      <p>Number of top albums to display</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_TOP_ALBUMS_MAX=5
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>number</code><br>      <br><b>default:</b> 5    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_TRACKS_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the top tracks section</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_TOP_TRACKS_HIDE_TITLE=true
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>boolean</code><br>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_TRACKS_MAX    <td rowspan="2">
      <p>Number of top tracks to display</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_TOP_TRACKS_MAX=5
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>number</code><br>      <br><b>default:</b> 5    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_STATISTICS_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the statistics section</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_STATISTICS_HIDE_TITLE=true
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>boolean</code><br>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_TRACKS_TITLE    <td rowspan="2">
      <p>Title of the top tracks section</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_TOP_TRACKS_TITLE="Top Tracks"
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>string</code><br>      <br><b>default:</b> Top Tracks    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_ARTISTS_TITLE    <td rowspan="2">
      <p>Title of the top artists section</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_TOP_ARTISTS_TITLE="Top Artists"
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>string</code><br>      <br><b>default:</b> Top Artists    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_TOP_ALBUMS_TITLE    <td rowspan="2">
      <p>Title of the top albums section</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_TOP_ALBUMS_TITLE="Top Albums"
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>string</code><br>      <br><b>default:</b> Top Albums    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_RECENT_TRACKS_TITLE    <td rowspan="2">
      <p>Title of the recent tracks section</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_RECENT_TRACKS_TITLE="Recent Tracks"
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>string</code><br>      <br><b>default:</b> Recent Tracks    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>LASTFM_STATISTICS_TITLE    <td rowspan="2">
      <p>Title of the statistics section</p>
      <p><b>Example:</b></p>
      <code>
LASTFM_STATISTICS_TITLE="Statistics"
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>string</code><br>      <br><b>default:</b> Statistics    </td>
  </tr>
</table>

<!-- Supported sections -->

### 🖼️ Supported sections

<table>
  <tr>
    <td align="center" nowrap="nowrap">Section</td>
    <td align="center" nowrap="nowrap">Image</td>
  </tr>
  <tr>
    <td nowrap="nowrap"><code>recent_tracks</code></td>
    <td nowrap="nowrap">![recent_tracks](./src/plugins/lastfm/assets/recent_tracks.svg?sanitize=true)</td>
  </tr>
  <tr>
    <td nowrap="nowrap"><code>statistics</code></td>
    <td nowrap="nowrap">![statistics](./src/plugins/lastfm/assets/statistics.svg?sanitize=true)</td>
  </tr>
  <tr>
    <td nowrap="nowrap"><code>top_artists_grid</code></td>
    <td nowrap="nowrap">![top_artists_grid](./src/plugins/lastfm/assets/top_artists_grid.svg?sanitize=true)</td>
  </tr>
  <tr>
    <td nowrap="nowrap"><code>top_artists_list</code></td>
    <td nowrap="nowrap">![top_artists_list](./src/plugins/lastfm/assets/top_artists_list.svg?sanitize=true)</td>
  </tr>
  <tr>
    <td nowrap="nowrap"><code>top_artists_default</code></td>
    <td nowrap="nowrap">![top_artists_default](./src/plugins/lastfm/assets/top_artists_default.svg?sanitize=true)</td>
  </tr>
  <tr>
    <td nowrap="nowrap"><code>top_albums_list</code></td>
    <td nowrap="nowrap">![top_albums_list](./src/plugins/lastfm/assets/top_albums_list.svg?sanitize=true)</td>
  </tr>
  <tr>
    <td nowrap="nowrap"><code>top_albums_grid</code></td>
    <td nowrap="nowrap">![top_albums_grid](./src/plugins/lastfm/assets/top_albums_grid.svg?sanitize=true)</td>
  </tr>
  <tr>
    <td nowrap="nowrap"><code>top_albums_default</code></td>
    <td nowrap="nowrap">![top_albums_default](./src/plugins/lastfm/assets/top_albums_default.svg?sanitize=true)</td>
  </tr>
  <tr>
    <td nowrap="nowrap"><code>top_tracks_list</code></td>
    <td nowrap="nowrap">![top_tracks_list](./src/plugins/lastfm/assets/top_tracks_list.svg?sanitize=true)</td>
  </tr>
  <tr>
    <td nowrap="nowrap"><code>top_tracks_grid</code></td>
    <td nowrap="nowrap">![top_tracks_grid](./src/plugins/lastfm/assets/top_tracks_grid.svg?sanitize=true)</td>
  </tr>
  <tr>
    <td nowrap="nowrap"><code>top_tracks_default</code></td>
    <td nowrap="nowrap">![top_tracks_default](./src/plugins/lastfm/assets/top_tracks_default.svg?sanitize=true)</td>
  </tr>
</table>
