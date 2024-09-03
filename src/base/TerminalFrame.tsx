import React from "react";

interface TerminalFrameProps {
  children: JSX.Element;
  x?: number;
  y?: number;
}

function TerminalFrame({ children, x = 0, y = 0 }: TerminalFrameProps) {
  return (
    <foreignObject width="960" height="100%" x={x} y={y}>
      {/* @ts-ignore */}
      <div xmlns="http://www.w3.org/1999/xhtml" xmlnsXlink="http://www.w3.org/1999/xlink" class="terminal-wrapper h100">
        {children}
      </div>
    </foreignObject>
  );
}

export default TerminalFrame;
