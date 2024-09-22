<!-- This file is auto-generated, don't update it manually -->

<!-- Title -->

# GITHUB Plugin

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
      <code>PLUGIN_GITHUB <span style='color: red;'>*</span>    <td rowspan="2">
      <p>Enable GitHub plugin</p>
      <p><b>Example:</b></p>
      <code>
PLUGIN_GITHUB=true
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>boolean</code><br>      <br><b>required:</b> <span style="color: red;">true</span>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_USERNAME <span style='color: red;'>*</span>    <td rowspan="2">
      <p>GitHub username</p>
      <p><b>Example:</b></p>
      <code>
GITHUB_USERNAME="value"
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>string</code><br>      <br><b>required:</b> <span style="color: red;">true</span>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_SECTIONS    <td rowspan="2">
      <p>Sections to display in the profile</p>
      <b>Available sections:</b>
      <code>profile</code>, <code>repositories</code>, <code>favorite_languages</code>, <code>favorite_license</code>
      <p><b>Example:</b></p>
      <code>
GITHUB_SECTIONS="top_tracks"
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>stringArray</code><br>      <br><b>default:</b> top_tracks    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_HIDE_HEADER    <td rowspan="2">
      <p>Hide the header of the profile</p>
      <p><b>Example:</b></p>
      <code>
GITHUB_HIDE_HEADER=true
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>boolean</code><br>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_TITLE    <td rowspan="2">
      <p>Title of the profile</p>
      <p><b>Example:</b></p>
      <code>
GITHUB_TITLE="GitHub"
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>string</code><br>      <br><b>default:</b> GitHub    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_PROFILE_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the profile section</p>
      <p><b>Example:</b></p>
      <code>
GITHUB_PROFILE_HIDE_TITLE=true
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>boolean</code><br>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_REPOSITORIES_TITLE    <td rowspan="2">
      <p>Title of the repositories section</p>
      <p><b>Example:</b></p>
      <code>
GITHUB_REPOSITORIES_TITLE="<qnt> Repositories"
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>string</code><br>      <br><b>default:</b> <qnt> Repositories    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_REPOSITORIES_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the repositories section</p>
      <p><b>Example:</b></p>
      <code>
GITHUB_REPOSITORIES_HIDE_TITLE=true
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>boolean</code><br>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_FAVORITE_LANGUAGES_TITLE    <td rowspan="2">
      <p>Title of the favorite languages section</p>
      <p><b>Example:</b></p>
      <code>
GITHUB_FAVORITE_LANGUAGES_TITLE="<qnt> Languages"
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>string</code><br>      <br><b>default:</b> <qnt> Languages    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_FAVORITE_LANGUAGES_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the favorite languages section</p>
      <p><b>Example:</b></p>
      <code>
GITHUB_FAVORITE_LANGUAGES_HIDE_TITLE=true
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>boolean</code><br>    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_FAVORITE_LICENSE_TITLE    <td rowspan="2">
      <p>Title of the favorite license section</p>
      <p><b>Example:</b></p>
      <code>
GITHUB_FAVORITE_LICENSE_TITLE="Favorite License"
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>string</code><br>      <br><b>default:</b> Favorite License    </td>
  </tr>
  <tr>
    <td nowrap='nowrap'>
      <code>GITHUB_FAVORITE_LICENSE_HIDE_TITLE    <td rowspan="2">
      <p>Hide the title of the favorite license section</p>
      <p><b>Example:</b></p>
      <code>
GITHUB_FAVORITE_LICENSE_HIDE_TITLE=true
      </code>
    </td>
  </tr>
  <tr>
    <td nowrap="nowrap">
      <b>type:</b> <code>boolean</code><br>    </td>
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
    <td nowrap="nowrap"><code>profile</code></td>
    <td nowrap="nowrap"><span style="color: red;">Image for profile not found</span></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><code>repositories</code></td>
    <td nowrap="nowrap"><span style="color: red;">Image for repositories not found</span></td>
  </tr>
  <tr>
    <td nowrap="nowrap"><code>favorite_languages</code></td>
    <td nowrap="nowrap">![favorite_languages](./src/plugins/github/assets/favorite_languages.svg?sanitize=true)</td>
  </tr>
  <tr>
    <td nowrap="nowrap"><code>favorite_license</code></td>
    <td nowrap="nowrap">![favorite_license](./src/plugins/github/assets/favorite_license.svg?sanitize=true)</td>
  </tr>
</table>
