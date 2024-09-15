import path from "path";
import React from "react";
import getSvgWidth from "../../utils/getSvgWidth";
import isNodeEnvironment from "../../utils/isNodeEnv";

interface MalProfileBoxProps {
  children: JSX.Element;
  size: string;
  height: number | string;
  customCss?: string;
}

export function LoadCss(isHalf: boolean, customCss: string | undefined): JSX.Element | null {
  const isNodeEnv = isNodeEnvironment();

  if (isNodeEnv) {
    // NODE SIDE
    const fs = require("fs");

    const cssFile = fs.readFileSync(path.resolve(__dirname, "../styles/default.css"), "utf8");
    const mimizedCss = cssFile.replace(/\s{2,10}/g, " ").replace(/(\r\n|\n|\r)/gm, "");
    const fontsFile = fs.readFileSync(path.resolve(__dirname, "../styles/fonts.css"), "utf8");

    const halfCssFile = fs.readFileSync(path.resolve(__dirname, "../styles/half.css"), "utf8");
    const halfMimizedCss = halfCssFile.replace(/\s{2,10}/g, " ").replace(/(\r\n|\n|\r)/gm, "");

    const terminalCss = fs.readFileSync(path.resolve(__dirname, "../styles/terminal.css"), "utf8");
    const terminalMimizedCss = terminalCss.replace(/\s{2,10}/g, " ").replace(/(\r\n|\n|\r)/gm, "");

    return (
      <>
        {isHalf ? <style>{halfMimizedCss}</style> : null}
        <style>{fontsFile}</style>
        <style>{mimizedCss}</style>
        <style>{terminalMimizedCss}</style>
        {customCss && <style>{customCss}</style>}
      </>
    );
  } else {
    // CLIENT SIDE
    // i know this is not the best way to do this, but for now it's the way i found to make it work
    const defaultLink = "../styles/default.css";
    const fontsLink = "../styles/fonts.css";
    const halfLink = "../styles/half.css";
    const terminalLink = "../styles/terminal.css";
    const mainLink = "../styles/main.css";

    const mainCss = document.createElement("link");
    mainCss.rel = "stylesheet";
    mainCss.href = mainLink;
    document.head.appendChild(mainCss);

    const defaultCss = document.createElement("link");
    defaultCss.rel = "stylesheet";
    defaultCss.href = defaultLink;
    document.head.appendChild(defaultCss);

    const fontCss = document.createElement("link");
    fontCss.rel = "stylesheet";
    fontCss.href = fontsLink;
    document.head.appendChild(fontCss);

    const halfCss = document.createElement("link");
    halfCss.rel = "stylesheet";
    halfCss.href = halfLink;
    isHalf && document.head.appendChild(halfCss);

    const customCssElement = document.createElement("style");
    customCssElement.innerHTML = `<style>${customCss}</style>`;
    customCss && document.head.appendChild(customCssElement);

    const terminalCss = document.createElement("link");
    terminalCss.rel = "stylesheet";
    terminalCss.href = terminalLink;
    document.head.appendChild(terminalCss);

    return <></>;
  }
}

function SvgContainer({ children, size, height, customCss }: MalProfileBoxProps) {
  const isHalf = size === "half";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="svg-main" width={getSvgWidth(isHalf)} height={height} className={`${size}`}>
      <defs>{LoadCss(isHalf, customCss)}</defs>
      <>{children}</>
    </svg>
  );
}

export default SvgContainer;
