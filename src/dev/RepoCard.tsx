import React from "react";
import { RiBookmarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";

interface Props {
  reponame: string;
  username: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  languageClass: string;
}

const RepoCard: React.FC<Props> = ({ reponame, username, description, language, stars, forks, languageClass }) => {
  return (
    <div className="repo-card">
      <div className="repo-card-topside">
        <header>
          <RiBookmarkLine className="repo-card-icon" />
        </header>
        <p>{description}</p>
      </div>

      <div className="repo-card-botside">
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <RiStarLine className="repo-card-icon" />
            <span>{stars}</span>
          </li>
          <li>
            <AiOutlineFork className="repo-card-icon" />
            <span>{forks}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RepoCard;
