import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { GoChevronDown, GoChevronLeft, GoChevronRight, GoDotFill } from "react-icons/go";
import { LiaWindowCloseSolid, LiaWindowMaximizeSolid, LiaWindowMinimize } from "react-icons/lia";
import { TbTemplate } from "react-icons/tb";

const LeftSection = () => {
  return (
    <div className="left-section">
      <div className="flex items-center">
        <GoDotFill color="red" />
        <GoDotFill color="yellow" />
        <GoDotFill color="green" />
      </div>
      <div className="flex items-center half:hidden">
        <TbTemplate />
        <GoChevronDown size={10} />
      </div>
      <GoChevronLeft className="half:hidden" />
      <GoChevronRight color="grey" className="half:hidden" />
    </div>
  );
};

const UrlSection = () => {
  return (
    <div className="flex items-center justify-center w100">
      <FaShieldAlt className="half:hidden" />
      <span className="text-overflow text-center sm-text text-muted">
        <span className="text-bold text-sucess">root</span>@<span className="text-bold text-sucess">weeb-profile</span>: ~
      </span>
    </div>
  );
};

const RightSection = () => {
  return (
    <div className="right-section">
      <LiaWindowMinimize className="half:hidden" />
      <LiaWindowMaximizeSolid className="half:hidden" />
      <LiaWindowCloseSolid />
    </div>
  );
};

function TerminalHeader(): JSX.Element {
  return (
    <div className="terminal-navbar">
      <LeftSection />
      <UrlSection />
      <RightSection />
    </div>
  );
}

export default TerminalHeader;
