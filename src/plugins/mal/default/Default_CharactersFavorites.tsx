import React from "react";
import { FaHeart } from "react-icons/fa";
import { CharacterFavorites } from "../../../../types/malFavoritesResponse";
import Img64 from "../../../base/ImageComponent";
import DefaultTitle from "./Title";

interface Props {
  favoritesData: CharacterFavorites[];
}

function CharacterFavorite({ character, index }: { character: CharacterFavorites; index: number }): JSX.Element {
  const imgSrc = character.images.jpg?.base64;
  let name;
  if (character.name.split(",").length !== 2) {
    name = character.name;
  } else {
    name = character.name.split(",")[0] + " " + character.name.split(",")[1];
  }

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

function RenderCharacter({ charData }: { charData: CharacterFavorites[] }): JSX.Element {
  return (
    <div className="flex-d gap-4">
      {charData.map((data, index) => (
        <CharacterFavorite character={data} index={index} key={data.mal_id} />
      ))}
    </div>
  );
}

function DefaultCharactersFavorites({ favoritesData }: Props): JSX.Element {
  if (!favoritesData) {
    throw new Error(`No favorites data found  ${favoritesData}`);
  }

  return (
    <section className="default-favorites">
      <DefaultTitle icon={<FaHeart />} title="Favorite Characters" />
      <RenderCharacter charData={favoritesData} />
    </section>
  );
}

export default DefaultCharactersFavorites;
