import { FaHeart } from "react-icons/fa";
import DefaultTitle from "../../!templates/Default/Default_Title";
import RenderBasedOnStyle from "../../!templates/RenderBasedOnStyle";
import TerminalCommand from "../../!templates/Terminal/Terminal_Command";
import TerminalLineBreak from "../../!templates/Terminal/Terminal_LineBreak";
import getEnvVariables from "../../../../utils/getEnvVariables";
import getPseudoCommands from "../../../../utils/getPseudoCommands";
import treatJaponeseName from "../../../../utils/treatJaponeseName";
import Img64 from "../../../base/ImageComponent";
import { PeopleFavorites } from "../types/malFavoritesResponse";

function DefaultPeopleFavorite({ person, index }: { person: PeopleFavorites; index: number }): JSX.Element {
  const imgSrc = person.images.jpg?.base64;
  const name = treatJaponeseName(person.name);

  return (
    <div className="h-50 flex radius-16 overflow-hidden border-primary-50">
      <div className="favorite-index">{index + 1}</div>
      <div className="fav-character-title">{name}</div>
      <div className="character-favorite-image-container">
        <Img64 url64={imgSrc} alt={name} className="image-center" />
      </div>
    </div>
  );
}

function TerminalPeopleFavorite({ person, index }: { person: PeopleFavorites; index: number }): JSX.Element {
  const name = treatJaponeseName(person.name);
  const url = person.url;

  return (
    <div className="flex align-center sm-text gap-4">
      <span className="text-raw">[{index + 1}]</span>
      <a href={url ?? "#"} target="_blank" rel="noreferrer" className="text-warning md-2-text text-bold">
        - {name}
      </a>
    </div>
  );
}

function MainPeopleFavorites({ favoritesData }: { favoritesData: PeopleFavorites[] }): JSX.Element {
  const { pluginMal } = getEnvVariables();
  if (!pluginMal) throw new Error("MAL plugin not found in DefaultPeopleFavorites component");

  const hideTitle = pluginMal.people_favorites_hide_title;
  const maxFavorites = pluginMal.people_favorites_max;
  const title = pluginMal.people_favorites_title;

  return (
    <section id="mal" className="people-favorites">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            {!hideTitle && <DefaultTitle title={title} icon={<FaHeart />} />}
            <div className="flex-d gap-4">
              {favoritesData.map((data, index) => (
                <DefaultPeopleFavorite person={data} index={index} key={data.mal_id} />
              ))}
            </div>
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "mal", section: "people_favorites", username: pluginMal.username, limit: maxFavorites })} />
            <div className="flex-d gap-4">
              {favoritesData.map((data, index) => (
                <TerminalPeopleFavorite person={data} index={index} key={data.mal_id} />
              ))}
            </div>
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}

export default MainPeopleFavorites;
