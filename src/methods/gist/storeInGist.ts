import updateGithubGist from "../../api/github/updateGist";

async function storeInGist(gistId: string, token: string, data: string, filename: string) {
  if (!gistId || !token) {
    console.error("Gist ID or Github Token not provided");
    return;
  }

  await updateGithubGist(gistId, token, data, "Github Profile Charts", filename);
}

export default storeInGist;
