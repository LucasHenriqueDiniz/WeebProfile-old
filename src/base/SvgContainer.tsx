import getSvgWidth from "../../utils/getSvgWidth";

interface MalProfileBoxProps {
  children: JSX.Element;
  size: string;
  height: number | string;
  style: string;
}

function SvgContainer({ children, size, height, style }: MalProfileBoxProps) {
  const isHalf = size === "half";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="svg-main" width={getSvgWidth(isHalf)} height={height} className={`${size} ${style}`}>
      {children}
    </svg>
  );
}

export default SvgContainer;
