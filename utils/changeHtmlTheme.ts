import { ThemeName } from "../src/dev/types";

function changeTheme(setThemeName?: (themeName: ThemeName) => void) {
  const html = document.documentElement;
  const theme = html.getAttribute("data-color-mode") === "light" ? "dark" : "light";
  //change themeName state
  if (setThemeName) setThemeName(theme);
  //change html class and data-color-mode attribute
  html.className = theme === "light" ? "light-theme" : "dark-theme";
  html.setAttribute("data-color-mode", theme);
}

export default changeTheme;
