import React from "react";
import { FaHeart } from "react-icons/fa";
import { CharacterFavorites } from "../../../types/malFavoritesResponse";
import getEnvVariables from "../../../utils/getEnvVariables";
import getPseudoCommands from "../../../utils/getPseudoCommands";
import treatJanponeseName from "../../../utils/treatJanponeseName";
import Img64 from "../../base/ImageComponent";
import DefaultTitle from "../_components/Default/Default_Title";
import RenderBasedOnStyle from "../_components/RenderBasedOnStyle";
import TerminalCommand from "../_components/Terminal/Terminal_Command";
import TerminalLineBreak from "../_components/Terminal/Terminal_LineBreak";

function DefaultCharacterFavorite({ character, index }: { character: CharacterFavorites; index: number }): JSX.Element {
  const imgSrc = character.images.jpg?.base64;
  const name = treatJanponeseName(character.name);

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

function TerminalCharacterFavorite({ character, index }: { character: CharacterFavorites; index: number }): JSX.Element {
  const name = treatJanponeseName(character.name);
  const url = character.url;

  return (
    <div className="flex align-center sm-text">
      <span className="text-raw">{index + 1}</span>
      <a href={url ?? "#"} target="_blank" rel="noreferrer" className="text-warning md-2-text text-bold">
        {name}
      </a>
    </div>
  );
}

function DefaultCharactersFavorites({ favoritesData }: { favoritesData: CharacterFavorites[] }): JSX.Element {
  const { pluginMal } = getEnvVariables();
  if (!pluginMal) throw new Error("MAL plugin not found in DefaultCharactersFavorites component");

  const hideTitle = pluginMal.characters_favorites_hide_title;
  const maxFavorites = pluginMal.characters_favorites_max;
  const title = pluginMal.character_favorites_title;

  return (
    <section id="mal" className="characters-favorites">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            {!hideTitle && <DefaultTitle title={title} icon={<FaHeart />} />}
            <div className="flex-d gap-4">
              {favoritesData.map((data, index) => (
                <DefaultCharacterFavorite character={data} index={index} key={data.mal_id} />
              ))}
            </div>
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "mal", section: "characters_favorites", username: pluginMal.username, limit: maxFavorites })} />
            <div className="flex-d gap-4">
              {favoritesData.map((data, index) => (
                <TerminalCharacterFavorite character={data} index={index} key={data.mal_id} />
              ))}
            </div>
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}

export default DefaultCharactersFavorites;