import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiPlus, FiStar } from "react-icons/fi";
import { GoPackage } from "react-icons/go";
import { IoIosSearch, IoMdArrowDropdown, IoMdGitPullRequest } from "react-icons/io";
import { LuBookOpen, LuCircleDot, LuMenu } from "react-icons/lu";
import { RiGitRepositoryLine } from "react-icons/ri";
import { SlDrawer } from "react-icons/sl";
import { VscGithubProject } from "react-icons/vsc";
import { APIUser, ThemeName } from "../types";
import "./header.css";

function changeTheme(themeName: ThemeName) {
  //change html class
  document.documentElement.className = themeName === "light" ? "light-theme" : "dark-theme";
}

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
  profileData: APIUser;
}

const TabContent = [
  { label: "Overview", active: true, icon: <LuBookOpen size={16} color="inherit" /> },
  { label: "Repositories", number: 28, icon: <RiGitRepositoryLine size={16} color="inherit" /> },
  { label: "Projects", icon: <VscGithubProject size={16} color="inherit" /> },
  { label: "Packages", icon: <GoPackage size={16} color="inherit" /> },
  { label: "Stars", number: 20, icon: <FiStar size={16} color="inherit" /> },
];

const TabItem = ({ label, number, active, icon }: { label: string; number?: number; active?: boolean; icon: React.ReactNode }) => (
  <div className={`tab-item  ${active ? "active" : ""}`}>
    <div className="content">
      {icon}
      <span className="label">{label}</span>
      {number !== undefined && <span className="number">{number}</span>}
    </div>
  </div>
);

const Header: React.FC<Props> = ({ themeName, setThemeName, profileData }) => {
  const [search, setSearch] = useState("");

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  useEffect(() => {
    changeTheme(themeName);
  }, [themeName]);

  return (
    <>
      <header className="header-container">
        <div className="header-left">
          <div className="drawer-button">
            <LuMenu size={20} color="inherit" />
          </div>
          <FaGithub className="header-github-logo" onClick={toggleTheme} />
          <div className="header-name">{profileData.login}</div>
        </div>
        <div className="header-right">
          <div className="header-search-form">
            <IoIosSearch size={16} color="inherit" />
            <input placeholder="Type / to search" value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
          </div>

          <span className="header-separator" />
          <div className="drawer-button-double">
            <FiPlus size={20} color="inherit" />
            <IoMdArrowDropdown color="inherit" />
          </div>
          <div className="drawer-button">
            <LuCircleDot size={20} color="inherit" />
          </div>
          <div className="drawer-button">
            <IoMdGitPullRequest size={20} color="inherit" />
          </div>
          <div className="drawer-button">
            <SlDrawer size={20} color="inherit" />
          </div>

          <img src={profileData.avatar_url} alt="User Avatar" className="header-profile" />
        </div>
      </header>
      <div className="header-container">
        <div className="wrapper">
          {TabContent.map((item) => (
            <TabItem key={item.label} {...item} />
          ))}
        </div>
      </div>
      <span className="line" />
    </>
  );
};

export default Header;
