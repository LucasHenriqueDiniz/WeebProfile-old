import fs from "fs";
import path from "path";
import GITHUB_ENV_VARIABLES from "../plugins/github/ENV_VARIABLES";
import LASTFM_ENV_VARIABLES from "../plugins/lastfm/ENV_VARIABLES";
import MAL_ENV_VARIABLES from "../plugins/mal/ENV_VARIABLES";
import ENV_VARIABLES_TYPE from "../../types/envVariables";
import { AllMyAnimeListSections } from "../plugins/mal/types/envMal";
import { allLastFmSections } from "../plugins/lastfm/types/envLastFM";
import { allGIThubSections } from "../plugins/github/types/envGithub";
import splitString from "../../utils/splitString";

type PluginEnvVariables = Record<string, ENV_VARIABLES_TYPE>;

function generateTitle(main: string, sub?: string) {
  let title = "<!-- This file is auto-generated, don't update it manually -->";
  title += "\n\n<!-- Title -->\n\n";
  title += `# ${main}\n\n`;
  sub ? (title += `${sub}\n\n`) : (title += "<sub>This README is auto-generated and will be updated with the latest plugin options and supported sections.</sub>\n\n");
  return title;
}

function generateSummary(summaryOptions: string[]) {
  let summary = "\n<!-- Summary -->\n\n";
  summary += "### 📝 Contents\n\n";
  summary += summaryOptions.map((option) => `- [${option}](#${option.toLowerCase().replace(/ /g, "-")})\n`).join("");
  return summary;
}

function generateOptionsTable(envVariables: PluginEnvVariables, pluginName: string, splitSections: string[]) {
  let optionsTable = "\n<!-- Plugin options -->\n\n";
  optionsTable += "### ➡️ Available options\n\n";
  optionsTable += "<table>\n";
  optionsTable += "  <tr>\n";
  optionsTable += '    <td align="center" nowrap="nowrap"><b>Variable</b></td>\n';
  optionsTable += '    <td align="center" nowrap="nowrap"><b>Description</b></td>\n';
  optionsTable += "  </tr>\n";

  for (const key in envVariables) {
    const { type, defaultValue, required, description } = envVariables[key];
    const isFirstKey = key === Object.keys(envVariables)[0];
    const variableName = isFirstKey ? key : `${pluginName}_${key}`;

    optionsTable += "  <tr>\n";
    optionsTable += "    <td nowrap='nowrap'>\n";
    optionsTable += `      <code>${variableName.toLocaleUpperCase()}`;
    optionsTable += required ? " <span style='color: red;'>*</span>" : "";
    optionsTable += '    <td rowspan="2">\n';
    optionsTable += `      <p>${description || "No description provided"}</p>\n`;
    key === "sections"
      ? (optionsTable += `      <b>Available sections:</b>
      ${splitSections.map((section) => `<code>${section}</code>`).join(", ")}\n`)
      : "";
    optionsTable += "      <p><b>Example:</b></p>\n";
    optionsTable += "      <code>\n";
    optionsTable += `${(() => {
      switch (type) {
        case "stringArray":
          return `${variableName.toLocaleUpperCase()}="${defaultValue ? defaultValue.split(",")[0] : "section1, section2"}"`;
        case "number":
          return `${variableName.toLocaleUpperCase()}=${defaultValue || 0}`;
        case "boolean":
          return `${variableName.toLocaleUpperCase()}=true`;
        default:
          return `${variableName.toLocaleUpperCase()}="${defaultValue || "value"}"`;
      }
    })()}\n`;
    optionsTable += "      </code>\n";
    optionsTable += "    </td>\n";
    optionsTable += "  </tr>\n";
    optionsTable += "  <tr>\n";
    optionsTable += `    <td nowrap="nowrap">\n`;
    optionsTable += `      <b>type:</b> <code>${type}</code><br>`;
    defaultValue ? (optionsTable += `      <br><b>default:</b> ${defaultValue}`) : "";
    required ? (optionsTable += `      <br><b>required:</b> <span style="color: red;">true</span>`) : "";
    optionsTable += "    </td>\n";
    optionsTable += "  </tr>\n";
  }
  optionsTable += "</table>\n";

  return optionsTable;
}

function generateSectionsTable(sections: string[], pluginName: string) {
  let sectionsTable = "\n<!-- Supported sections -->\n\n";
  sectionsTable += "### 🖼️ Supported sections\n\n";
  sectionsTable += "<table>\n";
  sectionsTable += "  <tr>\n";
  sectionsTable += '    <td align="center" nowrap="nowrap">Section</td>\n';
  sectionsTable += '    <td align="center" nowrap="nowrap">Image</td>\n';
  sectionsTable += "  </tr>\n";

  for (const section of sections) {
    const imagePath = path.join(__dirname, `../plugins/${pluginName}/assets/${section}.svg`);
    const imageExists = fs.existsSync(imagePath);

    sectionsTable += "  <tr>\n";
    sectionsTable += `    <td nowrap="nowrap"><code>${section}</code></td>\n`;
    sectionsTable += `    <td nowrap="nowrap">${
      imageExists
        ? `<img src="../../assets/${pluginName}/${section}.svg?sanitize=true" alt="${section} visualization" width="300">`
        : `<span style="color: red;">Image for ${section} not found</span>`
    }</td>\n`;
    sectionsTable += "  </tr>\n";
  }
  sectionsTable += "</table>\n";

  return sectionsTable;
}

function generateReadmeSection(pluginName: string, envVariables: PluginEnvVariables, allSections: string) {
  console.log("Generating README for", pluginName);
  const splitSections = splitString(allSections);
  let readmeContent = generateTitle(`${pluginName.toUpperCase()} Plugin`);
  readmeContent += generateSummary(["Available options", "Supported sections"]);
  readmeContent += generateOptionsTable(envVariables, pluginName, splitSections);
  readmeContent += generateSectionsTable(splitSections, pluginName);

  return readmeContent;
}

function generateMainReadme() {
  console.log("Generating main README");
  let mainReadme = generateTitle("🗻 WeebProfile", "A simple and customizable way to display code, anime, and music stats on your GitHub profile README.");
  mainReadme += generateSummary(["Available plugins", "Getting started", "Documentation", "Contributing", "License"]);
  mainReadme += "\n\n### 📦 Available plugins\n\n";
  mainReadme += "- [MAL](./mal/README.md)\n";
  mainReadme += "- [Last.fm](./lastfm/README.md)\n";
  mainReadme += "- [GitHub](./github/README.md)\n";

  return mainReadme;
}

// @TODO create a constant with all plugins and iterate over them
// @TODO make the main readme function
// - docmentation - how to use the plugin
// - contributing - example of adding a new plugin
// - license - Apache 2.0

// Example usage
const outputDir = path.join(__dirname, "../plugins");

// Generate README for MAL plugin
const malReadme = generateReadmeSection("mal", MAL_ENV_VARIABLES, AllMyAnimeListSections);
fs.writeFileSync(path.join(outputDir, "mal/README.md"), malReadme);

// Generate README for Last.fm plugin
const lastfmReadme = generateReadmeSection("lastfm", LASTFM_ENV_VARIABLES, allLastFmSections);
fs.writeFileSync(path.join(outputDir, "lastfm/README.md"), lastfmReadme);

// Generate README for GitHub plugin
const githubReadme = generateReadmeSection("github", GITHUB_ENV_VARIABLES, allGIThubSections);
fs.writeFileSync(path.join(outputDir, "github/README.md"), githubReadme);

// Generate main README
const mainReadme = generateMainReadme();
fs.writeFileSync(path.join(__dirname, "../README.md"), mainReadme);
