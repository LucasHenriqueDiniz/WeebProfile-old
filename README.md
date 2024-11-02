# This repository will be discontinued because i did a complete refactor, The the new repository will be: [WeebProfile](https://github.com/LucasHenriqueDiniz/WeebProfile)

<!-- This file is auto-generated, don't update it manually -->

<div align='center'>
<img src='./src/readme/imgs/banner.png' height='400' justify='center' />
</div>

<!-- This file is auto-generated, don't update it manually -->

<!-- Title -->

# WeebProfile 🦀

A simple and customizable way to display code, anime, and music stats on your GitHub profile README.


<!-- Summary -->

## 📝 Contents

- [Available plugins](#-available-plugins)
- [Supported sections](#-supported-sections)
- [Setup](#-setup)
- [Contributing](#-contributing)
- [License](#-license)


## 📦 Available plugins

- [MAL](./src/plugins/mal/README.md)
- [LASTFM](./src/plugins/lastfm/README.md)
- [GITHUB](./src/plugins/github/README.md)

<!-- Supported sections -->

## 🖼️ Supported sections

<h4>Right now we support 29 sections with 2 styles each</h4>

<p>Here are the available sections and their respective images:</p>

<details open><b>
<summary>MAL</b></summary>

# <p><b>Default Style:</b></p>

<sub>This is the default style for all sections. If you want to use a different style, you can specify it in the plugin options.</sub>

<table>
  <tr>
    <td align="center" nowrap="nowrap">Section</td>
    <td align="center" align="center" width="600px" nowrap="nowrap">Default Image Showcase</td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>statistics</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/default/statistics.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>anime_bar</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/default/anime_bar.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>manga_bar</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/default/manga_bar.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>statistics_simple</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/default/statistics_simple.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>anime_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/default/anime_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>manga_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/default/manga_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>people_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/default/people_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>character_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/default/character_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>anime_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/default/anime_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>manga_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/default/manga_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>people_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/default/people_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>character_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/default/character_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>last_activity</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/default/last_activity.svg"></td>
  </tr>
</table>

# <p><b>Terminal Style:</b></p>

<sub>This is the terminal style version of the sections. If you want to use this style you can specify it in the plugin options.<code>style: 'terminal'</code></sub>

<table>
  <tr>
    <td align="center" nowrap="nowrap">Section</td>
    <td align="center" nowrap="nowrap" align="center" width="600px">Terminal Image Showcase</td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>statistics</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/terminal/statistics.svg"></td>
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
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/terminal/statistics_simple.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>anime_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/terminal/anime_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>manga_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/terminal/manga_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>people_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/terminal/people_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>character_simple_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/terminal/character_simple_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>anime_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/terminal/anime_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>manga_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/terminal/manga_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>people_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/terminal/people_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>character_favorites</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/terminal/character_favorites.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>last_activity</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/mal/assets/terminal/last_activity.svg"></td>
  </tr>
</table>
</details>

<details open><b>
<summary>LASTFM</b></summary>

# <p><b>Default Style:</b></p>

<sub>This is the default style for all sections. If you want to use a different style, you can specify it in the plugin options.</sub>

<table>
  <tr>
    <td align="center" nowrap="nowrap">Section</td>
    <td align="center" align="center" width="600px" nowrap="nowrap">Default Image Showcase</td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>recent_tracks</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/default/recent_tracks.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>statistics</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/default/statistics.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_artists_grid</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/default/top_artists_grid.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_artists_list</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/default/top_artists_list.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_artists_default</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/default/top_artists_default.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_albums_list</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/default/top_albums_list.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_albums_grid</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/default/top_albums_grid.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_albums_default</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/default/top_albums_default.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_tracks_list</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/default/top_tracks_list.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_tracks_grid</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/default/top_tracks_grid.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_tracks_default</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/default/top_tracks_default.svg"></td>
  </tr>
</table>

# <p><b>Terminal Style:</b></p>

<sub>This is the terminal style version of the sections. If you want to use this style you can specify it in the plugin options.<code>style: 'terminal'</code></sub>

<table>
  <tr>
    <td align="center" nowrap="nowrap">Section</td>
    <td align="center" nowrap="nowrap" align="center" width="600px">Terminal Image Showcase</td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>recent_tracks</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/terminal/recent_tracks.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>statistics</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/terminal/statistics.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_artists_grid</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/terminal/top_artists_grid.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_artists_list</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/terminal/top_artists_list.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_artists_default</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/terminal/top_artists_default.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_albums_list</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/terminal/top_albums_list.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_albums_grid</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/terminal/top_albums_grid.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_albums_default</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/terminal/top_albums_default.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_tracks_list</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/terminal/top_tracks_list.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_tracks_grid</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/terminal/top_tracks_grid.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>top_tracks_default</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/lastfm/assets/terminal/top_tracks_default.svg"></td>
  </tr>
</table>
</details>

<details open><b>
<summary>GITHUB</b></summary>

# <p><b>Default Style:</b></p>

<sub>This is the default style for all sections. If you want to use a different style, you can specify it in the plugin options.</sub>

<table>
  <tr>
    <td align="center" nowrap="nowrap">Section</td>
    <td align="center" align="center" width="600px" nowrap="nowrap">Default Image Showcase</td>
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
    <td align="center" nowrap="nowrap"><img src="./src/plugins/github/assets/default/favorite_languages.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>favorite_license</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/github/assets/default/favorite_license.svg"></td>
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
    <td align="center" nowrap="nowrap" align="center" width="600px">Terminal Image Showcase</td>
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
    <td align="center" nowrap="nowrap"><img src="./src/plugins/github/assets/terminal/favorite_languages.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>favorite_license</code></td>
    <td align="center" nowrap="nowrap"><img src="./src/plugins/github/assets/terminal/favorite_license.svg"></td>
  </tr>
  <tr>
    <td align="center" nowrap="nowrap"><code>repository</code></td>
    <td align="center" nowrap="nowrap"><span style="color: red;">Image for repository not found</span></td>
  </tr>
</table>
</details>

<!-- SETUP:ACTION -->

## ⚙️ Getting Started

Setting up your <b>WeebProfile</b> is easy and can be done in a few steps:

### 1. Create a new GitHub Gist and copy the ID

- Go to your GitHub profile and create a new public Gist
- Copy the Gist ID from the URL (e.g. `https://gist.github.com/username/gist_id`)

![Gist ID example](/src/readme/imgs/gist_id_example.png)

### 2. If you haven't already, create a readme repository

- Create a new repository with your username as the repository name (e.g. `github.com/username/username`)
- Create a new file called `README.md`
- Commit the changes, now in your profile, you should see the repository like this:
  ![Repository example](/src/readme/imgs/create_readme_repo.png)

### 3. Create a new GitHub Token

> 💡 A GitHub personal token is required since this action will fetch data that cannot be accessed through repository-scoped tokens (like [`${{ secrets.GITHUB_TOKEN }}` or `${{ github.token }}`](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#about-the-github_token-secret)) such as users, pull requests, commits, activity, etc.

- Go to [GitHub settings>Developer settings>Personal access tokens>personal access token(classic)](https://github.com/settings/tokens)
- Generate a new token (classic) with the `gist` scope
- Copy the token and save it in a safe place (you won't be able to see it again)

Only the `gist` scope is required for now as it's the only method to save the SVG without being local.

Additional scopes may be required depending on which features will be used. Each plugin documentation enumerates which scopes are required to make it work.

As a general rule, the following scopes may be required:

- `public_repo` for some plugins
  <!-- - `read:org` for all organizations related metrics -->
- `repo` for all private repositories related metrics
  <!-- - `read:user` for some private repositories related metrics -->
  <!-- - `read:packages` for some packages related metrics -->
  <!-- - `read:project` for some projects related metrics -->

> 💡 When a plugin has not enough scopes to operate and error message will be displayed in the action console

### 4. Add the Gist ID and GitHub Token to your repository secrets

- Go to the repository settings and click on the <code>Secrets and Variables</code> tab
- Go to the <code>Actions</code> section <code>https://github.com/username/username/settings/secrets/actions</code>
- Add a new secret called `GIST_ID` with the Gist ID
- Add a new secret called `WEEB_GH_TOKEN` with the GitHub Token
  ![Repository secrets](/src/readme/imgs/add_secrets_repo.png)

### 5. Create a new GitHub Action

- Go to the `.github/workflows` folder in your repository (if it doesn't exist, create it)
- Create a new file called `weeb_profile.yml` and paste the following code:

```yml
name: WeebProfile
on:
# 🦀 Schedule
schedule: [{ cron: "0 0 * * *" }] # Everyday at 00:00 UTC
# 💡 The following line lets you run workflow manually from the action tab!
workflow_dispatch:
# 🚀 Push event
jobs:
  weeb_profile:
    runs-on: ubuntu-latest
    steps:
      - name: 🦀 LastFM & Github 🦀
        uses: LucasHenriqueDiniz/WeebProfile@main
        with:
          FILENAME: LastFM.svg
          GIST_ID: ${{ secrets.GIST_ID }}
          GH_TOKEN: ${{ secrets.WEEB_GH_TOKEN }}
          STORAGE_METHOD: gist
          STYLE: default
          SIZE: half

          PLUGIN_LASTFM: true
          PLUGIN_LASTFM_HIDE_HEADER: true
          PLUGIN_LASTFM_USERNAME: Amayacrab
          PLUGIN_LASTFM_SECTIONS: recent_tracks, top_artists_grid, top_albums_grid

          PLUGIN_GITHUB: true
          PLUGIN_GITHUB_HIDE_HEADER: true
          PLUGIN_GITHUB_USERNAME: LucasHenriqueDiniz
          PLUGIN_GITHUB_SECTIONS: favorite_languages

      - name: 🦀 MyAnimeList 🦀
        uses: LucasHenriqueDiniz/WeebProfile@main
        with:
          FILENAME: MyAnimeList.svg
          GIST_ID: ${{ secrets.GIST_ID }}
          GH_TOKEN: ${{ secrets.WEEB_GH_TOKEN }}
          STORAGE_METHOD: gist
          SIZE: half
          STYLE: default

          PLUGIN_MAL: true
          PLUGIN_MAL_HIDE_HEADER: true
          PLUGIN_MAL_USERNAME: Amayacrab
          PLUGIN_MAL_SECTIONS: statistics_simple, character_simple_favorites, anime_favorites
```

![Repository workflow](/src/readme/imgs/workflow_example.png)

- Commit the changes
- Go to the Actions tab in your repository, you should see the workflow running

> 💡 Now in the `Actions` tab of your repository, you should see the workflow running and generating the SVGs.

> 💡 The SVGs will be saved in the Gist you created in step 1

> 💡 You can run it manually by clicking on the `Run workflow` button

### 6. Add the SVGs to your profile

- Go to your GitHub profile and click on the `Edit profile` button
- In the `About` section, paste the following code:

```md
![LastFM](https://gist.githubusercontent.com/username/gist_id/raw/LastFM.svg)
![MyAnimeList](https://gist.githubusercontent.com/username/gist_id/raw/MyAnimeList.svg)
```

> 💡 Don't forget to replace `username` and `gist_id` with your GitHub username and Gist ID

> 💡 If you used other filename in the action replace in the link ex: LastFM.svg or MyAnimeList.svg

- Replace `username` and `gist_id` with your GitHub username and Gist ID
- Save the changes

### 7. Done!

> 💡 Now in your profile, you should see the SVGs like this

Example:
![Profile example](/src/readme/imgs/profile_example.png)

<!-- CONFIGS -->

## 🛠️ Configuration

The `weeb_profile.yml` file is where you can configure the plugins and the SVGs that will be generated.
Each plugin has its own configuration, and you can enable or disable them by setting the `PLUGIN_NAME` to `true` or `false`.
You can see the available configurations for each plugin in the [Available plugins](#-available-plugins) section.

### 🌐 Global configurations

<table>
  <tr>
    <th>Key</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>FILENAME</td>
    <td>MyProfile.svg</td>
    <td>The name of the SVG file that will be generated</td>
  </tr>
  <tr>
    <td>GIST_ID</td>
    <td>''</td>
    <td>The Gist ID where the SVG will be saved</td>
  </tr>
  <tr>
    <td>GH_TOKEN</td>
    <td>''</td>
    <td>The GitHub Token used to save the SVG</td>
  </tr>
  <tr>
    <td>SIZE</td>
    <td>half</td>
    <td>The size of the SVG (half or full)</td>
  </tr>
  <tr>
    <td>STYLE</td>
    <td>default</td>
    <td>The style of the SVG (default or terminal)</td>
  </tr>
  <tr>
    <td>STORAGE_METHOD</td>
    <td>gist</td>
    <td>The storage method of the SVG (gist, local or repository)</td>
  </tr>
  <tr>
    <td>CUSTOM_CSS</td>
    <td>''</td>
    <td>The custom CSS that will be applied to the SVG</td>
  </tr>
  <tr>
    <td>PLUGINS_ORDER</td>
    <td>'github, lastfm, mal'</td>
    <td>The order of the plugins that will be generated</td>
  </tr>
  <tr>
    <td>CUSTOM_PATH</td>
    <td>''</td>
    <td>The custom path where the SVG will be saved when using local storage</td>
  </tr>
  <tr>
    <td>hide_terminal_emojis</td>
    <td>false</td>
    <td>Hide emojis in the terminal style</td>
  </tr>
</table>

> 💡 Every section will always have <code>hide_title</code> or <code>title</code> options, where you can respectively hide the title or use a custom title
## 🤝 Contributing

If you are interested in contributing, the following resources may interest you:

- [💪 Contribution guide](/CONTRIBUTING.md)
- [🧬 Architecture @TODO](/ARCHITECTURE.md)
- [📜 License](/LICENSE)

Use [`💬 discussions`](https://github.com/LucasHenriqueDiniz/WeebProfile/discussions) for feedback, new features suggestions, bugs reports or to request help for installation.
<!-- License -->

## 📜 License

```
Apache License 2.0
Copyright (c) 2024-2024
```

<!-- ![Sponsors]() -->
