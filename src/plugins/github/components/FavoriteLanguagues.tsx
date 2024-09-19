import { FaCode } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import DefaultTitle from "../../!templates/Default/Default_Title";
import PorcentageBar from "../../!templates/Default/PorcentagemBarMultiple";
import RenderBasedOnStyle from "../../!templates/RenderBasedOnStyle";
import TerminalCommand from "../../!templates/Terminal/Terminal_Command";
import TerminalGrid from "../../!templates/Terminal/Terminal_Grid";
import TerminalLineBreak from "../../!templates/Terminal/Terminal_LineBreak";
import abbreviateNumber from "../../../../utils/abbreviateNumber";
import getEnvVariables from "../../../../utils/getEnvVariables";
import getPseudoCommands from "../../../../utils/getPseudoCommands";
import { RepositoriesData } from "../types";

const DefaultFavoriteLanguages = ({ repositoriesData, maxLanguagues }: { repositoriesData: RepositoriesData; maxLanguagues: number }) => {
  const { totalLanguages } = repositoriesData;

  const totalSize = totalLanguages.reduce((sum, lang) => sum + lang.size, 0);
  const topLanguages = totalLanguages.sort((a, b) => b.size - a.size).slice(0, maxLanguagues);

  return (
    <div className="flex-d gap-4">
      <PorcentageBar values={topLanguages} />

      {topLanguages.map((lang) => (
        <div key={lang.name} className="grid-col-3">
          <span className="md-text flex items-center">
            <GoDotFill color={lang.color} className="mr-2" />
            {lang.name}
          </span>
          <span className="md-text flex-center">{((lang.size / totalSize) * 100).toFixed(2)}%</span>
          <span className="md-text flex-end">{abbreviateNumber(lang.size)} lines</span>
        </div>
      ))}
    </div>
  );
};

const TerminalFavoriteLanguages = ({ repositoriesData, maxLanguagues }: { repositoriesData: RepositoriesData; maxLanguagues: number }) => {
  const { totalLanguages } = repositoriesData;

  // Sort languages by size in descending order and take top 4
  const topLanguages = totalLanguages.sort((a, b) => b.size - a.size).slice(0, maxLanguagues);

  const gridData = topLanguages.map((lang) => ({
    title: lang.name,
    value: `${abbreviateNumber(lang.size)} lines`,
  }));

  return <TerminalGrid data={gridData} rightText="Language" leftText="Lines of Code" />;
};

const FavoriteLanguages = ({ repositoriesData }: { repositoriesData: RepositoriesData }) => {
  const { pluginGithub } = getEnvVariables();
  if (!pluginGithub) throw new Error("GitHub plugin not found");

  const title = pluginGithub.favorite_languages_title.replace("<qnt>", repositoriesData.totalLanguages.length.toString());
  const hideTitle = pluginGithub.favorite_languages_hide_title;
  const maxLanguagues = 4; // pluginGithub.favorite_languages_max_languages

  return (
    <section id="github" className="favorite-languages">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            {!hideTitle && <DefaultTitle title={title} icon={<FaCode />} />}
            <DefaultFavoriteLanguages repositoriesData={repositoriesData} maxLanguagues={maxLanguagues} />
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "github", section: "favorite-languages", username: pluginGithub.username })} />
            <TerminalFavoriteLanguages repositoriesData={repositoriesData} maxLanguagues={maxLanguagues} />
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
};

export default FavoriteLanguages;
