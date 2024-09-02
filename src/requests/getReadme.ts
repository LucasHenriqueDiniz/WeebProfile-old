import axios from "axios";

const patternstart = "<!-- MAL_ACTIVITY:start -->";
const patternend = "<!-- MAL_ACTIVITY:end -->";

async function dofetch(URL: string, GH_TOKEN: string) {
  let fetching = await axios.get(URL, {
    headers: {
      Authorization: `token ${GH_TOKEN}`,
    },
  });
  if (!fetching || fetching.status !== 200) {
    throw new Error("Failed to fetch data from MyAnimeList");
  }
  return fetching.data;
}

function decodeFromBase64(input: string) {
  input = input.replace(/\s/g, "");
  return decodeURIComponent(encodeURIComponent(atob(input)));
}

async function readReadme(path: any, gh_token: any) {
  let url = `https://api.github.com/repos/${path}/git/trees/main`;
  let fetchrepo = await dofetch(url, gh_token);

  console.log(
    fetchrepo,
    "fetchrepo",
    fetchrepo.tree.find((x: any) => x.path === "README.md")
  );

  if (!fetchrepo.tree.find((x: any) => x.path === "README.md")) {
    throw new Error("No README.md found");
  }

  let readme = await dofetch(fetchrepo.tree.find((x: any) => x.path === "README.md").url, gh_token);

  return decodeFromBase64(readme.content);
}

function appendInReadme(readme: string, data: string) {
  if (!readme.includes(patternstart)) {
    throw new Error("No pattern start found");
  }
  if (!readme.includes(patternend)) {
    throw new Error("No pattern end found");
  }

  // replace start to end with none
  let start = readme.indexOf(patternstart);
  let end = readme.indexOf(patternend);
  let newreadme =
    readme.substring(0, start + patternstart.length) +
    "\n\n" +
    data +
    "\n\n" +
    readme.substring(end, readme.length);

  return newreadme;
}

export { readReadme, appendInReadme };
