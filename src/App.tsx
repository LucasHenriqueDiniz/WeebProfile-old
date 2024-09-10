import React, { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import RenderBodyReact from "./RenderBodyReact";
import config from "./config";
import GithubProfile from "./dev/GithubProfile";
import "./styles/default.css";
import "./styles/fonts.css";
import { CiDark, CiLight } from "react-icons/ci";

type ThemeName = "light" | "dark";

function App() {
  const loadedEnv = config;
  const [themeName, setThemeName] = useState<ThemeName>("dark");

  const { gistId, ghToken, filename, base, sortOrder, storeMethod, hideMain, pluginMal, pluginLastfm, svg_columns, activePlugins } = loadedEnv;

  const [element, setElement] = useState<JSX.Element | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [svg_width, setSvgWidth] = useState<string>("half");

  useEffect(() => {
    const fetchElement = async () => {
      const result = await RenderBodyReact({ env: loadedEnv });
      setElement(result);
    };
    try {
      fetchElement();
    } catch (error) {
      console.error("Error fetching element:", error);
      setError("Error fetching data");
    }
  }, [loadedEnv]);

  const changeSvgWidth = () => {
    const svgElement = document.getElementById("svg-main");
    // const currentWidth = svgElement?.getAttribute("width");
    const height = svgElement?.getAttribute("height");

    const newWidth = svgElement?.classList.contains("half") ? "840" : "480";

    if (svgElement) {
      setSvgWidth(svg_width === "half" ? "full" : "half");
      svgElement.setAttribute("width", newWidth);
      svgElement.setAttribute("viewBox", `0 0 ${newWidth} ${height}`);
      svgElement.classList.toggle("half");
    }
  };

  return (
    <>
      <GithubProfile themeName={themeName} setThemeName={setThemeName}>
        <div className="button-section monospace w100">
          <div className="profile-name">Github Profile</div>
          <div className="flex-d gap-8">
            <div className="flex gap-8 items-center">
              <p>Change Theme:</p>
              <button className="button-readme" onClick={() => setThemeName(themeName === "dark" ? "light" : "dark")}>
                {themeName === "dark" ? <CiLight color="white" /> : <CiDark color="black" />}
              </button>
            </div>
            <div className="flex gap-8 items-center">
              <p>Change SVG Width to:</p>
              <button className="button-readme" onClick={() => changeSvgWidth()}>
                {svg_width === "half" ? "Full" : "Half"}
              </button>
            </div>
          </div>
        </div>
        {element && !error ? element : <AiOutlineLoading size={50} className="loading-icon" />}
        {error && <div className="error">{error}</div>}
      </GithubProfile>
    </>
  );
}

export default App;
