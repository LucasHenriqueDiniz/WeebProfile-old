import { FaGithub } from "react-icons/fa";
import { Header } from "../!templates/Default/Default_Header";
import ErrorMessage from "../!templates/Error_Style";
import RenderBasedOnStyle from "../!templates/RenderBasedOnStyle";
import TerminalBody from "../!templates/Terminal/Terminal_Body";
import FavoriteLanguages from "./components/FavoriteLanguagues";
import FavoriteLiscense from "./components/FavoriteLiscenses";
import GithubProfile from "./components/Profile";
import GithubRepositories from "./components/Repositories";
import { githubResponse } from "./types";
import githubPlugin from "./types/envGithub";

interface Props {
  githubPlugin: githubPlugin;
  githubData: githubResponse;
}

export default function RenderGithub({ githubPlugin, githubData }: Props): JSX.Element {
  const sections = githubPlugin.sections;

  interface SectionRenderers {
    [key: string]: (githubData: githubResponse) => JSX.Element;
  }

  const sectionRenderers: SectionRenderers = {
    profile: (githubData) => {
      return <GithubProfile userData={githubData.userData} />;
    },
    repositories: (githubData) => {
      return <GithubRepositories repositoriesData={githubData.repositoriesData} />;
    },
    favorite_languages: (githubData) => {
      return <FavoriteLanguages repositoriesData={githubData.repositoriesData} />;
    },
    favorite_liscenses: (githubData) => {
      return <FavoriteLiscense repositoriesData={githubData.repositoriesData} />;
    },
  };

  const renderSection = (section: string): JSX.Element => {
    if (sectionRenderers[section]) {
      return sectionRenderers[section](githubData);
    }
    return <ErrorMessage message={`Section ${section} not found`} />;
  };

  const hideHeader = githubPlugin.hide_header;

  return (
    <>
      <RenderBasedOnStyle
        terminalComponent={
          <TerminalBody>
            {sections.map((section) => (
              <div key={section}>{renderSection(section)}</div>
            ))}
          </TerminalBody>
        }
        defaultComponent={
          <>
            {!hideHeader && <Header title={"GitHub"} icon={<FaGithub />} />}
            {sections.map((section) => (
              <div key={section}>{renderSection(section)}</div>
            ))}
          </>
        }
      />
    </>
  );
}
