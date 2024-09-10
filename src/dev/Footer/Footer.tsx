import React from "react";
import { FaGithub } from "react-icons/fa";

import "./footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-line" />
      <div className="footer-links">
        <FaGithub className="footer-github-logo" />
        <a href="#">© 2024 GitHub, Inc.</a>
        <a href="#">Footer navigation</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Security</a>
        <a href="#">Status</a>
        <a href="#">Docs</a>
        <a href="#">Contact</a>
        <a href="#">Manage cookies</a>
        <a href="#">Do not share my personal information</a>
      </div>
    </div>
  );
};

export default Footer;
