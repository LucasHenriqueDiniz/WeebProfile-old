import React from "react";
import fs from "fs";
import path from "path";

interface MalProfileBoxProps {
  children: JSX.Element;
  columns?: number;
  height?: number;
}

function SvgContainer({ children, columns = 2, height = 250 }: MalProfileBoxProps) {
  const cssFile = fs.readFileSync(path.resolve(__dirname, "../styles/default.css"), "utf8");
  const mimizedCss = cssFile.replace(/\s{2,10}/g, " ").replace(/(\r\n|\n|\r)/gm, "");
  const width = columns === 2 ? 960 : 480;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <style>{mimizedCss}</style>
      <>{children}</>
    </svg>
  );
}

export default SvgContainer;
