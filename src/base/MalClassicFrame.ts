import exportCSS from "../styles/default";

interface MalClassicFrameProps {
  children: string;
  x?: number;
  y?: number;
}

function MalClassicFrame({ children, x = 0, y = 0 }: MalClassicFrameProps) {
  return `<foreignObject width="100%" height="100%" x="${x}" y="${y}">
    <div xmlns="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" class="items-wrapper h100">
      ${children}
    </div>
  </foreignObject>`;
}

export default MalClassicFrame;
