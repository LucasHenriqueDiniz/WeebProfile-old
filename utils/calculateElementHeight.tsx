import { JSXElementConstructor, ReactElement, ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { Env } from "../src/loadEnv";
import getSvgWidth from "./getSvgWidth";
import isNodeEnvironment from "./isNodeEnv";

async function calculateElementHeight(activePlugins: ReactNode, env: Env): Promise<number> {
  const isNodeEnv = isNodeEnvironment();
  const isHalf = env.size === "half";
  // const css = await LoadCss(env);

  const htmlstring = (css: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode>) => {
    return renderToString(
      <html lang="en" data-color-mode="dark" data-light-theme="light" data-dark-theme="dark">
        <head>
          <meta charSet="UTF-8" />
          <title>WeebProfile</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          {css}
        </head>
        <body>
          <div id="svg-main" className={`${env.size} ${env.style}`} style={{ width: "100%", maxWidth: getSvgWidth(isHalf), display: "flex", flexDirection: "column" }}>
            {activePlugins}
          </div>
        </body>
      </html>
    );
  };

  if (isNodeEnv) {
    const puppeteer = require("puppeteer");
    const fs = require("fs");
    const path = require("path");

    const fontsFile = fs.readFileSync(path.resolve(__dirname, "../src/styles/fonts.css"), "utf8");

    const halfCssFile = fs.readFileSync(path.resolve(__dirname, "../src/styles/half.css"), "utf8");
    const halfMimizedCss = halfCssFile.replace(/\s{2,10}/g, " ").replace(/(\r\n|\n|\r)/gm, "");

    const mainCssFile = fs.readFileSync(path.resolve(__dirname, "../src/styles/main.css"), "utf8");
    const mainMimizedCss = mainCssFile.replace(/\s{2,10}/g, " ").replace(/(\r\n|\n|\r)/gm, "");

    const terminalCss = fs.readFileSync(path.resolve(__dirname, "../src/styles/terminal.css"), "utf8");
    const terminalMimizedCss = terminalCss.replace(/\s{2,10}/g, " ").replace(/(\r\n|\n|\r)/gm, "");

    const defaultCssFile = fs.readFileSync(path.resolve(__dirname, "../src/styles/default.css"), "utf8");
    const defaultMimizedCss = defaultCssFile.replace(/\s{2,10}/g, " ").replace(/(\r\n|\n|\r)/gm, "");

    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--start-minimized", "--window-size=1024,768"],
    });
    const page = await browser.newPage();

    // Renderizar os activePlugins em uma página HTML temporária
    await page.setContent(
      htmlstring(
        <>
          <style>{halfMimizedCss}</style>
          <style>{mainMimizedCss}</style>
          <style>{terminalMimizedCss}</style>
          <style>{defaultMimizedCss}</style>
          <style>{fontsFile}</style>
          <style>{fontsFile}</style>
        </>
      )
    );

    await page.waitForSelector("#svg-main");

    //wait 1s to test if the height is correct
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Obter o elemento que contém os activePlugins
    const pluginsContainer = await page.$("#svg-main");

    // Verificar se o elemento existe antes de obter as dimensões do container
    const boundingBox = pluginsContainer ? await pluginsContainer.boundingBox() : null;

    // body height
    const height = boundingBox?.height ?? 0;
    console.log("MAIN > REAL HEIGHT SERVER", height);

    await browser.close();

    return height;
  } else {
    // Not in Node env so we need to calculate the height in the browser
    const div = document.createElement("div");
    div.innerHTML = htmlstring(<></>);
    document.body.appendChild(div);

    const height = div.getBoundingClientRect().height;
    document.body.removeChild(div);

    console.log("MAIN > REAL HEIGHT CLIENT", height);
    return height;
  }
}

export default calculateElementHeight;
