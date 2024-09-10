import React from "react";
import { AnyMalFavorite, AnyMalFavoriteUnique } from "../../../../types/malFavoritesResponse";
import Img64 from "../../../base/ImageComponent";
import DefaultTitle from "./Title";
import { FaHeart } from "react-icons/fa";

interface DefaultSimpleFavoritesProps {
  favoritesData: AnyMalFavorite;
  title: string;
}

function FavoriteImage({ favorite }: { favorite: AnyMalFavoriteUnique }): JSX.Element {
  const imageUrl = favorite.images.jpg?.base64;
  const title = "name" in favorite ? favorite.name : favorite.title;

  return (
    <div className="default-favorite-box">
      <Img64 url64={imageUrl} alt={title} className="fav-image" />
      <div className="fav-overlay">
        <span className="fav-title">{title}</span>
      </div>
    </div>
  );
}

function RenderFavorites({ favoritesData }: { favoritesData: AnyMalFavorite }) {
  return (
    <div className="default-favorites-container">
      {favoritesData.map((data) => (
        <FavoriteImage favorite={data} key={data.mal_id} />
      ))}
    </div>
  );
}

function DefaultSimpleFavorites({ favoritesData, title }: DefaultSimpleFavoritesProps): JSX.Element {
  if (!favoritesData) {
    throw new Error(`No favorites data found  ${favoritesData}`);
  }

  return (
    <section>
      <DefaultTitle title={title} icon={<FaHeart />} />
      <RenderFavorites favoritesData={favoritesData} />
    </section>
  );
}

export default DefaultSimpleFavorites;
