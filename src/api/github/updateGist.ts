export default async function updateGithubGist(gistId: string, ghToken: string, data: string, gistTitle: string, filename: string) {
  if (!data || data.length === 0) {
    throw new Error("No data to update Gist with");
  }
  try {
    // remove all the <!-- --> comments from the html
    const formattedHtml = data.replace(/<!--.*?-->/gs, "");

    const gistApiUrl = `https://api.github.com/gists/${gistId}`;
    const response = await fetch(gistApiUrl, {
      method: "PATCH",
      headers: {
        Authorization: `token ${ghToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: gistTitle,
        files: {
          github_profile_charts: {
            content: formattedHtml,
            filename: filename,
            description: `Updated at ${new Date().toISOString()}`,
            type: "text/plain",
          },
        },
      }),
    });

    if (response.status !== 200) {
      throw new Error(`Error updating Gist: ${response.status} - ${response.statusText}`);
    } else {
      console.log("Data -------------------\n", formattedHtml, "\n-------------------");
      console.log("Gist updated successfully:", response.status);
    }
  } catch (error) {
    console.error("Error updating Gist: ", error);
  }
}
