import { s_html } from "../../utils/litHtmlToString";

interface foreignObject {
  children?: string;
  x?: number;
  y?: number;
}

function foreignObject({ children, x = 0, y = 0 }: foreignObject) {
  return `<foreignObject width="480" height="100%" x="${x}" y="${y}">
  <div xmlns="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" class="items-wrapper h100">
    ${children}
  </div>
</foreignObject>`;
}

export default foreignObject;
