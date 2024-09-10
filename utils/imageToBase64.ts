import imageToBase64 from "image-to-base64";

async function getImage64(imageUrl: string): Promise<string | null> {
  if (!imageUrl) {
    return "";
  }

  // Check if we're in a Node.js environment
  if (typeof process !== "undefined" && process.versions && process.versions.node) {
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
