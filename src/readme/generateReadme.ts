import fs from "fs";
import path from "path";
import ENV_VARIABLES_TYPE from "../../types/envVariables";
import STABLE_PLUGINS from "../STABLE_PLUGINS";

// @TODO IMPROVE THIS SHIT

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
  summary += "## 📝 Contents\n\n";
  summary += summaryOptions.map((option) => `- [${option}](#-${option.toLowerCase().replace(/ /g, "-")})\n`).join("");
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
  sectionsTable += "## 🖼️ Supported sections\n\n";
  sectionsTable += `<h4>Right ${pluginName} supports ${sections.length} sections with 2 styles each</h4>\n\n`;
  sectionsTable += "<p>Here are the available sections and their respective images:</p>\n\n";
  sectionsTable += "# <p><b>Default Style:</b></p>\n\n";
  sectionsTable += "<sub>This is the default style for all sections. If you want to use a different style, you can specify it in the plugin options.</sub>\n\n";
  sectionsTable += "<table>\n";
  sectionsTable += "  <tr>\n";
  sectionsTable += '    <td align="center" nowrap="nowrap">Section</td>\n';
  sectionsTable += '    <td align="center" width="600px" nowrap="nowrap">Default Image Showcase</td>\n';
  sectionsTable += "  </tr>\n";

  for (const section of sections) {
    const imagePath = path.join(__dirname, `../plugins/${pluginName}/assets/default/${section}.svg`);
    const imageExists = fs.existsSync(imagePath);

    sectionsTable += "  <tr>\n";
    sectionsTable += `    <td align="center" nowrap="nowrap"><code>${section}</code></td>\n`;
    sectionsTable += `    <td align="center" nowrap="nowrap">${
      imageExists ? `<img src="./src/plugins/${pluginName}/assets/default/${section.toLocaleLowerCase()}.svg">` : `<span style="color: red;">Image for ${section} not found</span>`
    }</td>\n`;
    sectionsTable += "  </tr>\n";
  }
  sectionsTable += "</table>\n";

  sectionsTable += "# <p><b>Terminal Style:</b></p>\n\n";
  sectionsTable +=
    "<sub>This is the terminal style version of the sections. If you want to use this style you can specify it in the plugin options.<code>style: 'terminal'</code></sub>\n\n";
  sectionsTable += "<table>\n";
  sectionsTable += "  <tr>\n";
  sectionsTable += '    <td align="center" nowrap="nowrap">Section</td>\n';
  sectionsTable += '    <td align="center" width="600px" nowrap="nowrap">Terminal Image Showcase</td>\n';
  sectionsTable += "  </tr>\n";

  for (const section of sections) {
    const imagePath = path.join(__dirname, `../plugins/${pluginName}/assets/terminal/${section}.svg`);
    const imageExists = fs.existsSync(imagePath);

    sectionsTable += "  <tr>\n";
    sectionsTable += `    <td align="center" nowrap="nowrap"><code>${section}</code></td>\n`;
    sectionsTable += `    <td align="center" nowrap="nowrap">${
      imageExists ? `<img src="./src/plugins/${pluginName}/assets/terminal/${section.toLocaleLowerCase()}.svg">` : `<span style="color: red;">Image for ${section} not found</span>`
    }</td>\n`;
    sectionsTable += "  </tr>\n";
  }
  sectionsTable += "</table>\n";

  return sectionsTable;
}

function generateAllSectionsTable() {
  //separete by plugin and then by section, use details tag

  let allSectionsTable = "\n<!-- Supported sections -->\n\n";
  allSectionsTable += "## 🖼️ Supported sections\n\n";
  STABLE_PLUGINS.forEach(({ name, sections }) => {
    allSectionsTable += `<details open><b>\n<summary>${name.toUpperCase()}</b></summary>\n\n`;
    allSectionsTable += `<h4>Right we support ${sections.length} sections with 2 styles each</h4>\n\n`;
    allSectionsTable += "<p>Here are the available sections and their respective images:</p>\n\n";
    allSectionsTable += "# <p><b>Default Style:</b></p>\n\n";
    allSectionsTable += "<sub>This is the default style for all sections. If you want to use a different style, you can specify it in the plugin options.</sub>\n\n";
    allSectionsTable += "<table>\n";
    allSectionsTable += "  <tr>\n";
    allSectionsTable += '    <td align="center" nowrap="nowrap">Section</td>\n';
    allSectionsTable += '    <td align="center" nowrap="nowrap">Image</td>\n';
    allSectionsTable += "  </tr>\n";
    sections.forEach((section) => {
      const imagePath = path.join(__dirname, `../plugins/${name}/assets/default/${section}.svg`);
      const imageExists = fs.existsSync(imagePath);

      allSectionsTable += "  <tr>\n";
      allSectionsTable += `    <td align="center" nowrap="nowrap"><code>${section}</code></td>\n`;
      allSectionsTable += `    <td align="center" nowrap="nowrap">${
        imageExists ? `<img src="./src/plugins/${name}/assets/default/${section.toLocaleLowerCase()}.svg">` : `<span style="color: red;">Image for ${section} not found</span>`
      }</td>\n`;
      allSectionsTable += "  </tr>\n";
    });
    allSectionsTable += "</table>\n";
    allSectionsTable += "</details>\n\n";

    allSectionsTable += "# <p><b>Terminal Style:</b></p>\n\n";
    allSectionsTable +=
      "<sub>This is the terminal style version of the sections. If you want to use this style you can specify it in the plugin options.<code>style: 'terminal'</code></sub>\n\n";
    allSectionsTable += "<table>\n";
    allSectionsTable += "  <tr>\n";
    allSectionsTable += '    <td align="center" nowrap="nowrap">Section</td>\n';
    allSectionsTable += '    <td align="center" nowrap="nowrap">Image</td>\n';
    allSectionsTable += "  </tr>\n";
    sections.forEach((section) => {
      const imagePath = path.join(__dirname, `../plugins/${name}/assets/terminal/${section}.svg`);
      const imageExists = fs.existsSync(imagePath);

      allSectionsTable += "  <tr>\n";
      allSectionsTable += `    <td align="center" nowrap="nowrap"><code>${section}</code></td>\n`;
      allSectionsTable += `    <td align="center" nowrap="nowrap">${
        imageExists ? `<img src="./src/plugins/${name}/assets/terminal/${section.toLocaleLowerCase()}.svg">` : `<span style="color: red;">Image for ${section} not found</span>`
      }</td>\n`;
      allSectionsTable += "  </tr>\n";
    });
    allSectionsTable += "</table>\n";
  });

  return allSectionsTable;
}

function generateReadmeSection(pluginName: string, envVariables: PluginEnvVariables, allSections: string[]) {
  console.log("Generating README for", pluginName);
  let readmeContent = generateTitle(`${pluginName.toUpperCase()} Plugin`);
  readmeContent += generateSummary(["Available options", "Supported sections"]);
  readmeContent += generateOptionsTable(envVariables, pluginName, allSections);
  readmeContent += generateSectionsTable(allSections, pluginName);

  return readmeContent;
}

function generateLiscense() {
  //get the license.md file and return it
  const file = fs.readFileSync(path.join(__dirname, "./documentation/license.md"));

  //replace @{currentYear} with the current year
  const currentYear = new Date().getFullYear();
  return file.toString().replace(/@{currentYear}/g, currentYear.toString());
}

function generateSetup() {
  //@TODO make like metrics and add the documentation for the configuration types when is available
  // 🤖 GitHub Action on a profile repository
  // 👍 All features
  // 👍 High availability (no downtimes)
  // 👎 Configuration can be a bit time-consuming
  // 📤 Shared instance (NOT AVAIBLE YET)
  // 👍 Easily configurable and previewable
  // 👎 Limited features (compute-intensive features are disabled)

  const config = fs.readFileSync(path.join(__dirname, "./documentation/setup.md"));
  return config.toString();
}

function generateContributing() {
  const contributing = fs.readFileSync(path.join(__dirname, "./documentation/contributing.md"));
  return contributing.toString();
}

function generateMainReadme() {
  console.log("Generating main README");
  let mainReadme = generateTitle("🗻 WeebProfile", "A simple and customizable way to display code, anime, and music stats on your GitHub profile README.");
  mainReadme += generateSummary(["Available plugins", "Supported sections", "Setup", "Contributing", "License"]);

  mainReadme += "\n\n## 📦 Available plugins\n\n";
  STABLE_PLUGINS.forEach(({ name }) => {
    mainReadme += `- [${name.toUpperCase()}](.src/plugins/${name}/README.md)\n`;
  });

  mainReadme += generateAllSectionsTable();

  mainReadme += generateSetup();
  mainReadme += generateContributing();
  mainReadme += generateLiscense();

  return mainReadme;
}

const outputDir = path.join(__dirname, "../plugins");

STABLE_PLUGINS.forEach(({ name, envVariables, sections }) => {
  const readme = generateReadmeSection(name, envVariables, sections);
  fs.writeFileSync(path.join(outputDir, `${name}/README.md`), readme);
});

// Generate main README
const mainReadme = generateMainReadme();
fs.writeFileSync(path.join(__dirname, "../../README.md"), mainReadme);
