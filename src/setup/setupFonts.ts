import fs from "fs";
import path from "path";
import asyncReplace from "../../utils/AsyncReplace";
import imageToBase64 from "image-to-base64";

//
// This script is used to convert all the fonts in the raw_fonts.css to base64 and save it in the fonts.css
// This need to be used every time you change the raw_fonts.css (npm run setup-fonts)
//

async function setupFonts() {
  //check if raw_fonts.css exists
  if (!fs.existsSync(path.resolve(__dirname, "../styles/raw_fonts.css"))) {
    throw new Error("raw_fonts.css not found");
  }

  //check if fonts.css exists
  if (!fs.existsSync(path.resolve(__dirname, "../styles/fonts.css"))) {
    console.log("fonts.css not found, creating it...");
    fs.mkdirSync(path.resolve(__dirname, "../styles"), { recursive: true });
  }

  //create fonts.css using raw_fonts.css and converting all the url() to base64 usign image-to-base64
  const rawFonts = fs.readFileSync(path.resolve(__dirname, "../styles/raw_fonts.css"), "utf8");
  const fonts = await asyncReplace(rawFonts, /url\((.*?)\)/g, async (match) => {
    const url = match.match(/url\((.*?)\)/)![1].replace(/['"]+/g, "");
    const base64 = await imageToBase64(url);
    return `url("data:image/png;base64,${base64}")`;
  });

  console.log("Loaded raw_fonts.css and converted all url() to base64");

  fs.writeFileSync(path.resolve(__dirname, "../styles/fonts.css"), fonts);
  console.log("fonts.css created with success!");
}

setupFonts();
