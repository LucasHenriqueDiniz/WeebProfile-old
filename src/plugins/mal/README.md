<!-- This file is auto-generated, don't update it manually -->

<!-- Title -->

# MAL Plugin

<sub>This README is auto-generated and will be updated with the latest plugin options and supported sections.</sub>


<!-- Summary -->

## 📝 Contents

- [Available options](#-available-options)
- [Supported sections](#-supported-sections)

<!-- Plugin options -->

### ➡️ Available options

<table>
  <tr>
    <td align="center" nowrap="nowrap"><b>Variable</b></td>
    <td align="center" nowrap="nowrap"><b>Description</b></td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>PLUGIN_MAL <span style='color: red;'>*</span>    <td rowspan="2">
      <p>Enable MyAnimeList plugin</p>
      <p><b>Example:</b></p>
      <code>PLUGIN_MAL=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>

<b>required:</b> <span style="color: red;">true</span>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_USERNAME <span style='color: red;'>*</span>    <td rowspan="2">
      <p>MyAnimeList username</p>
      <p><b>Example:</b></p>
      <code>MAL_USERNAME="value"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>required:</b> <span style="color: red;">true</span>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_SECTIONS    <td rowspan="2">
      <p>Sections to display in the profile</p>
      <b>Available sections:</b>
      <code>statistics</code>, <code>anime_bar</code>, <code>manga_bar</code>, <code>statistics_simple</code>, <code>anime_simple_favorites</code>, <code>manga_simple_favorites</code>, <code>people_simple_favorites</code>, <code>character_simple_favorites</code>, <code>anime_favorites</code>, <code>manga_favorites</code>, <code>people_favorites</code>, <code>character_favorites</code>, <code>last_activity</code>
      <p><b>Example:</b></p>
      <code>MAL_SECTIONS="statistics_simple"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>stringArray</code>

<b>default:</b> statistics_simple, anime_favorites, last_activity    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_HIDE_HEADER    <td rowspan="2">
      <p>Hide the header of the profile</p>
      <p><b>Example:</b></p>
      <code>MAL_HIDE_HEADER=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_HIDE_TERMINAL_EMOJIS    <td rowspan="2">
      <p>Hide the terminal emojis</p>
      <p><b>Example:</b></p>
      <code>MAL_HIDE_TERMINAL_EMOJIS=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_ANIME_FAVORITES_MAX    <td rowspan="2">
      <p>Number of anime favorites to display</p>
      <p><b>Example:</b></p>
      <code>MAL_ANIME_FAVORITES_MAX=5</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>number</code>

<b>default:</b> 5    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_ANIME_FAVORITES_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the anime favorites section</p>
      <p><b>Example:</b></p>
      <code>MAL_ANIME_FAVORITES_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_ANIME_FAVORITES_TITLE    <td rowspan="2">
      <p>Title of the anime favorites section</p>
      <p><b>Example:</b></p>
      <code>MAL_ANIME_FAVORITES_TITLE="Anime Favorites"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> Anime Favorites    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_CHARACTER_FAVORITES_TITLE    <td rowspan="2">
      <p>Title of the character favorites section</p>
      <p><b>Example:</b></p>
      <code>MAL_CHARACTER_FAVORITES_TITLE="Character Favorites"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> Character Favorites    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_CHARACTER_FAVORITES_MAX    <td rowspan="2">
      <p>Number of character favorites to display</p>
      <p><b>Example:</b></p>
      <code>MAL_CHARACTER_FAVORITES_MAX=5</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>number</code>

<b>default:</b> 5    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_CHARACTER_FAVORITES_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the character favorites section</p>
      <p><b>Example:</b></p>
      <code>MAL_CHARACTER_FAVORITES_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_PEOPLE_FAVORITES_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the people favorites section</p>
      <p><b>Example:</b></p>
      <code>MAL_PEOPLE_FAVORITES_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_PEOPLE_FAVORITES_TITLE    <td rowspan="2">
      <p>Title of the people favorites section</p>
      <p><b>Example:</b></p>
      <code>MAL_PEOPLE_FAVORITES_TITLE="People Favorites"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> People Favorites    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_PEOPLE_FAVORITES_MAX    <td rowspan="2">
      <p>Number of people favorites to display</p>
      <p><b>Example:</b></p>
      <code>MAL_PEOPLE_FAVORITES_MAX=5</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>number</code>

<b>default:</b> 5    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_MANGA_FAVORITES_TITLE    <td rowspan="2">
      <p>Title of the manga favorites section</p>
      <p><b>Example:</b></p>
      <code>MAL_MANGA_FAVORITES_TITLE="Manga Favorites"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> Manga Favorites    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_MANGA_FAVORITES_MAX    <td rowspan="2">
      <p>Number of manga favorites to display</p>
      <p><b>Example:</b></p>
      <code>MAL_MANGA_FAVORITES_MAX=5</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>number</code>

<b>default:</b> 5    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_MANGA_FAVORITES_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the manga favorites section</p>
      <p><b>Example:</b></p>
      <code>MAL_MANGA_FAVORITES_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_STATISTICS_ANIME_TITLE    <td rowspan="2">
      <p>Title of the anime statistics section</p>
      <p><b>Example:</b></p>
      <code>MAL_STATISTICS_ANIME_TITLE="Anime Statistics"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> Anime Statistics    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_STATISTICS_MANGA_TITLE    <td rowspan="2">
      <p>Title of the manga statistics section</p>
      <p><b>Example:</b></p>
      <code>MAL_STATISTICS_MANGA_TITLE="Manga Statistics"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> Manga Statistics    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_STATISTICS_MEDIA    <td rowspan="2">
      <p>Media to display statistics for</p>
      <p><b>Example:</b></p>
      <code>MAL_STATISTICS_MEDIA="anime, manga"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> anime, manga    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_STATISTICS_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the statistics section</p>
      <p><b>Example:</b></p>
      <code>MAL_STATISTICS_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_ANIME_BAR_TITLE    <td rowspan="2">
      <p>Title of the anime statistics section</p>
      <p><b>Example:</b></p>
      <code>MAL_ANIME_BAR_TITLE="Anime Statistics"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>undefined</code>

<b>default:</b> Anime Statistics    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_ANIME_BAR_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the anime statistics section</p>
      <p><b>Example:</b></p>
      <code>MAL_ANIME_BAR_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_MANGA_BAR_TITLE    <td rowspan="2">
      <p>Title of the manga statistics section</p>
      <p><b>Example:</b></p>
      <code>MAL_MANGA_BAR_TITLE="Manga Statistics"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> Manga Statistics    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_MANGA_BAR_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the manga statistics section</p>
      <p><b>Example:</b></p>
      <code>MAL_MANGA_BAR_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_STATISTICS_SIMPLE_TITLE    <td rowspan="2">
      <p>Title of the simple statistics section</p>
      <p><b>Example:</b></p>
      <code>MAL_STATISTICS_SIMPLE_TITLE="Simple Statistics"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> Simple Statistics    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_STATISTICS_SIMPLE_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the simple statistics section</p>
      <p><b>Example:</b></p>
      <code>MAL_STATISTICS_SIMPLE_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_LAST_ACTIVITY_TITLE    <td rowspan="2">
      <p>Title of the last activity section</p>
      <p><b>Example:</b></p>
      <code>MAL_LAST_ACTIVITY_TITLE="Last Activity"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> Last Activity    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_LAST_ACTIVITY_MAX    <td rowspan="2">
      <p>Number of activities to display</p>
      <p><b>Example:</b></p>
      <code>MAL_LAST_ACTIVITY_MAX=6</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>number</code>

<b>default:</b> 6    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_LAST_ACTIVITY_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the last activity section</p>
      <p><b>Example:</b></p>
      <code>MAL_LAST_ACTIVITY_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>MAL_FAVORITES_HIDE_OVERLAY    <td rowspan="2">
      <p>Hide the overlay in the image with the name or title of the favorites section</p>
      <p><b>Example:</b></p>
      <code>MAL_FAVORITES_HIDE_OVERLAY=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
</table>

<!-- Supported sections -->

## 🖼️ Supported sections

<h4>Right mal supports 13 sections with 2 styles each</h4>

<p>Here are the available sections and their respective images:</p>

# <p><b>Default Style:</b></p>

<sub>This is the default style for all sections. If you want to use a different style, you can specify it in the plugin options.</sub>

<table>
  <tr>
    <td align="center" nowrap="nowrap">Section</td>
    <td align="center" width="600px" nowrap="nowrap">Default Image Showcase</td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>statistics</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/statistics.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>anime_bar</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/anime_bar.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>manga_bar</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/manga_bar.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>statistics_simple</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/statistics_simple.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>anime_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/anime_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>manga_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/manga_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>people_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/people_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>character_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/character_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>anime_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/anime_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>manga_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/manga_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>people_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/people_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>character_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/character_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>last_activity</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/last_activity.svg"></td>
  </tr>
</table>
# <p><b>Terminal Style:</b></p>

<sub>This is the terminal style version of the sections. If you want to use this style you can specify it in the plugin options.<code>style: 'terminal'</code></sub>

<table>
  <tr>
    <td align="center" nowrap="nowrap">Section</td>
    <td align="center" width="600px" nowrap="nowrap">Terminal Image Showcase</td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>statistics</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/statistics.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>anime_bar</code></td>
    <td align="center" nowrap="nowrap"><span style="color: red;">Image for anime_bar not found</span></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>manga_bar</code></td>
    <td align="center" nowrap="nowrap"><span style="color: red;">Image for manga_bar not found</span></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>statistics_simple</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/statistics_simple.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>anime_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/anime_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>manga_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/manga_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>people_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/people_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>character_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/character_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>anime_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/anime_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>manga_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/manga_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>people_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/people_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>character_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/character_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>last_activity</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/last_activity.svg"></td>
  </tr>
</table>
