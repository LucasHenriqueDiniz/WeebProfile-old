interface TerminalFrameProps {
  children?: string;
  x?: number;
  y?: number;
}

function TerminalFrame({ children, x = 0, y = 0 }: TerminalFrameProps) {
  return `<foreignObject width="480" height="100%" x="${x}" y="${y}">
  <div xmlns="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" class="terminal-wrapper h100">
    ${children}
  </div>
</foreignObject>`;
}

export default TerminalFrame;
