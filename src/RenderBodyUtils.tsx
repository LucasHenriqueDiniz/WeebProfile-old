import React, { ReactNode } from "react";
import { fetchMalData } from "./api/axios/malApi";
import { Env } from "./loadEnv";
import RenderLastFM from "./plugins/lastfm/lastfm";
import RenderMyAnimeList from "./plugins/mal/Mal";
import LastFmApi from "./api/axios/lastFmApi";
import { renderToString } from "react-dom/server";
import { LoadCss } from "./base/SvgContainer";
import isNodeEnvironment from "../utils/isNodeEnv";
import getSvgWidth from "../utils/getSvgWidth";

async function calculateRealHeight(activePlugins: React.ReactNode[], env: Env) {
  const isNodeEnv = isNodeEnvironment();
  const isHalf = env.size === "half";
  const customCss = env.customCss;
  const css = LoadCss(isHalf, customCss);

  const htmlstring = () => {
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
          <div id="svg-main" className={`${env.size}`} style={{ width: "100%", maxWidth: getSvgWidth(isHalf), display: "flex", flexDirection: "column" }}>
            {activePlugins.map((plugin, index) => (
              <React.Fragment key={index}>{plugin}</React.Fragment>
            ))}
          </div>
        </body>
      </html>
    );
  };

  if (isNodeEnv) {
    const puppeteer = require("puppeteer");

    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--start-minimized", "--window-size=1024,768"],
    });
    const page = await browser.newPage();

    // Renderizar os activePlugins em uma página HTML temporária
    await page.setContent(htmlstring());

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
    div.innerHTML = htmlstring();
    document.body.appendChild(div);

    const height = div.getBoundingClientRect().height;
    document.body.removeChild(div);

    console.log("MAIN > REAL HEIGHT CLIENT", height);
    return height;
  }
}

async function renderActivePlugins(env: Env) {
  console.log("RENDER ACTIVE PLUGINS");

  const pluginComponents: { [key: string]: JSX.Element | null } = {
    mal: null,
    lastfm: null,
  };

  if (env.pluginMal) {
    console.log("RENDER MAL");
    const malData = await fetchMalData(env.pluginMal, env.pluginMal.username);
    pluginComponents.mal = <RenderMyAnimeList malPlugin={env.pluginMal} malData={malData} key="mal" />;
  }

  if (env.pluginLastfm) {
    console.log("RENDER LASTFM");
    const lastfmData = await LastFmApi(env.pluginLastfm);
    pluginComponents.lastfm = <RenderLastFM lastfmPlugin={env.pluginLastfm} key="lastfm" lastfmData={lastfmData} />;
  }

  //remove null vales from active plugins
  Object.keys(pluginComponents).forEach((key) => {
    if (!pluginComponents[key]) {
      delete pluginComponents[key];
    }
  });

  //sort active plugins based on sortOrder if sortOrder is defined
  return Object.values(pluginComponents);
}

export { fetchMalData, renderActivePlugins, calculateRealHeight };
