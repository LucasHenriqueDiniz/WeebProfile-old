import React from "react";

interface MalProfileBoxProps {
  children: JSX.Element;
  columns?: number;
  height?: number | string;
}

function SvgContainer({ children, columns = 2, height = 250 }: MalProfileBoxProps) {
  const width = columns === 2 ? 840 : 420;

  const originalWidth = width; // Substitua pelo valor real
  const originalHeight = height; // Substitua pelo valor real

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg-main"
      width="100%"
      height={height}
      viewBox={`0 0 ${originalWidth} ${originalHeight}`}
      className={`${columns === 2 ? "" : "half"}`}
    >
      <defs></defs>
      <>{children}</>
    </svg>
  );
}

export default SvgContainer;
