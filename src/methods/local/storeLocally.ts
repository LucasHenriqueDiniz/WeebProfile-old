async function storeLocally(data: string, filename: string) {
  const isNodeEnv = typeof window === "undefined";
  if (!isNodeEnv) {
    console.error("Cannot store locally in a non-node environment");
    return;
  }

  const path = require("path");
  const { promisify } = require("util");
  const writeFile = promisify(require("fs").writeFile);

  try {
    const desktopPath = path.join(require("os").homedir(), "Desktop");
    const filePath = path.join(desktopPath, filename);
    await writeFile(filePath, data, "utf8");
    console.log(`File saved successfully to ${filePath}`);
  } catch (err) {
    console.error("Error saving file:", err);
  }
}

export default storeLocally;
