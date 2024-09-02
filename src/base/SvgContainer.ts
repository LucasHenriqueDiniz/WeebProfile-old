import exportCSS from "../styles/default";
import { s_html } from "../../utils/litHtmlToString";

interface MalProfileBoxProps {
  children: string;
  width?: number;
  height?: number;
}

function SvgContainer({ children, width = 480, height = 250 }: MalProfileBoxProps) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
<style>${exportCSS()}</style>
  ${children}
</svg>
`;
}

export default SvgContainer;
