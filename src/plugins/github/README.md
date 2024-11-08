<!-- This file is auto-generated, don't update it manually -->

<!-- Title -->

# GITHUB Plugin

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
      <code>PLUGIN_GITHUB <span style='color: red;'>*</span>    <td rowspan="2">
      <p>Enable GitHub plugin</p>
      <p><b>Example:</b></p>
      <code>PLUGIN_GITHUB=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>

<b>required:</b> <span style="color: red;">true</span>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_USERNAME <span style='color: red;'>*</span>    <td rowspan="2">
      <p>GitHub username</p>
      <p><b>Example:</b></p>
      <code>GITHUB_USERNAME="value"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>required:</b> <span style="color: red;">true</span>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_SECTIONS    <td rowspan="2">
      <p>Sections to display in the profile</p>
      <b>Available sections:</b>
      <code>profile</code>, <code>repositories_data</code>, <code>favorite_languages</code>, <code>favorite_license</code>, <code>repository</code>
      <p><b>Example:</b></p>
      <code>GITHUB_SECTIONS="top_tracks"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>stringArray</code>

<b>default:</b> top_tracks    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_HIDE_HEADER    <td rowspan="2">
      <p>Hide the header of the profile</p>
      <p><b>Example:</b></p>
      <code>GITHUB_HIDE_HEADER=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_TITLE    <td rowspan="2">
      <p>Title of the profile</p>
      <p><b>Example:</b></p>
      <code>GITHUB_TITLE="GitHub"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> GitHub    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_PROFILE_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the profile section</p>
      <p><b>Example:</b></p>
      <code>GITHUB_PROFILE_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_REPOSITORIES_TITLE    <td rowspan="2">
      <p>Title of the repositories section</p>
      <p><b>Example:</b></p>
      <code>GITHUB_REPOSITORIES_TITLE="<qnt> Repositories"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> <qnt> Repositories    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_REPOSITORIES_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the repositories section</p>
      <p><b>Example:</b></p>
      <code>GITHUB_REPOSITORIES_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_FAVORITE_LANGUAGES_TITLE    <td rowspan="2">
      <p>Title of the favorite languages section</p>
      <p><b>Example:</b></p>
      <code>GITHUB_FAVORITE_LANGUAGES_TITLE="<qnt> Languages"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> <qnt> Languages    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_FAVORITE_LANGUAGES_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the favorite languages section</p>
      <p><b>Example:</b></p>
      <code>GITHUB_FAVORITE_LANGUAGES_HIDE_TITLE=true</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>boolean</code>
    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_FAVORITE_LICENSE_TITLE    <td rowspan="2">
      <p>Title of the favorite license section</p>
      <p><b>Example:</b></p>
      <code>GITHUB_FAVORITE_LICENSE_TITLE="Favorite License"</code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
<b>type:</b> <code>string</code>

<b>default:</b> Favorite License    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_FAVORITE_LICENSE_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the favorite license section</p>
      <p><b>Example:</b></p>
      <code>GITHUB_FAVORITE_LICENSE_HIDE_TITLE=true</code>
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

<h4><b>GITHUB</b> has 5 sections with 2 styles each.</h4>

<p>Here are the available sections and their respective images:</p>

# <p><b>Default Style:</b></p>

<sub>This is the default style for all sections. If you want to use a different style, you can specify it in the plugin options.</sub>

<table>
  <tr>
    <td align="center" nowrap="nowrap">Section</td>
    <td align="center" width="600px" nowrap="nowrap">Default Image Showcase</td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>profile</code></td>
    <td align="center" nowrap="nowrap"><span style="color: red;">Image for profile not found</span></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>repositories_data</code></td>
    <td align="center" nowrap="nowrap"><span style="color: red;">Image for repositories_data not found</span></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>favorite_languages</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/favorite_languages.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>favorite_license</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/default/favorite_license.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>repository</code></td>
    <td align="center" nowrap="nowrap"><span style="color: red;">Image for repository not found</span></td>
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
    <td align="center" nowrap="nowrap"><code>profile</code></td>
    <td align="center" nowrap="nowrap"><span style="color: red;">Image for profile not found</span></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>repositories_data</code></td>
    <td align="center" nowrap="nowrap"><span style="color: red;">Image for repositories_data not found</span></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>favorite_languages</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/favorite_languages.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>favorite_license</code></td>
    <td align="center" nowrap="nowrap"><img src="./assets/terminal/favorite_license.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>repository</code></td>
    <td align="center" nowrap="nowrap"><span style="color: red;">Image for repository not found</span></td>
  </tr>
</table>
