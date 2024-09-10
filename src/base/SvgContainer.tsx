import React from "react";
import fs from "fs";
import path from "path";

interface MalProfileBoxProps {
  children: JSX.Element;
  columns?: number; //@TODO: replace for "half" | "full"
  height?: number | string;
}

function SvgContainer({ children, columns = 2, height = 250 }: MalProfileBoxProps) {
  const cssFile = fs.readFileSync(path.resolve(__dirname, "../styles/default.css"), "utf8");
  const mimizedCss = cssFile.replace(/\s{2,10}/g, " ").replace(/(\r\n|\n|\r)/gm, "");
  const width = columns === 2 ? 840 : 420;

  // se for "half" importar o css half

  const fontsFile = fs.readFileSync(path.resolve(__dirname, "../styles/fonts.css"), "utf8");

  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="svg-main" width={width} height={height} className={`${columns === 2 ? "" : "half"}`}>
      <defs>
        <style>{fontsFile}</style>
      </defs>
      <style>{mimizedCss}</style>
      <>{children}</>
    </svg>
  );
}

export default SvgContainer;
