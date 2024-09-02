export default async function updateGithubGist(gistId: string, ghToken: string, data: string, gistTitle: string, filename: string) {
  if (!data || data.length === 0) {
    throw new Error("No data to update Gist with");
  }

  try {
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
            content: data,
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
      console.log("Data -------------------\n", data, "\n-------------------");
      console.log("Gist updated successfully:", response.status);
    }
  } catch (error) {
    console.error("Error updating Gist: ", error);
  }
}
