import imageToBase64 from "image-to-base64";
import isNodeEnvironment from "./isNodeEnv";

async function getImage64(imageUrl: string | undefined): Promise<string | null> {
  if (!imageUrl) {
    return null;
  }
  const isNodeEnv = isNodeEnvironment();
  if (isNodeEnv) {
    try {
      const base64 = await imageToBase64(imageUrl);
      return base64;
    } catch (error) {
      console.error("Error converting image to base64:", error);
      return null;
    }
  } else {
    // If in a browser environment, skip conversion and return the original URL
    console.log("Not in Node.js environment, skipping image conversion");
    return imageUrl;
  }
}

export default getImage64;
