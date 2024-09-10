import React from "react";
import { FaCalendar, FaHashtag, FaHeart, FaStar, FaVideo } from "react-icons/fa";
import { FullMalAnimeResponse } from "../../../../types/malFavoritesResponse";
import Img64 from "../../../base/ImageComponent";
import DefaultTitle from "./Title";
import { LuDot } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import Tag from "./Default_Tags";

interface Props {
  favoritesData: FullMalAnimeResponse[] | null;
}

function FavoriteImage({ favorite }: { favorite: FullMalAnimeResponse }): JSX.Element {
  const imageUrl = favorite.images.jpg?.base64;
  const title = favorite.title;
  const mean_score = favorite.score;
  const release_year = favorite.year || favorite.aired.prop.from.year;
  const synopsis = favorite.synopsis;
  const num_episodes = favorite.episodes;
  const genres = favorite.genres.map((genre) => genre.name);
  const status = favorite.status;
  const popularity = favorite.popularity;

  return (
    <div className="flex h-120 overflow-hidden gap-8">
      <div className="full-favorite-image-container">
        <Img64 url64={imageUrl} alt={title} className="fav-image" />
      </div>
      <div className="w100 flex-d justify-between">
        <span className="favorite-title">{title}</span>
        <div className="flex gap-8 items-center">
          {mean_score && (
            <span className="color-primary md-text-bold flex items-center gap-2">
              <FaStar className="color-primary" size={14} /> {mean_score}
            </span>
          )}
          {popularity && (
            <span className="md-text-bold flex items-center gap-2">
              <FaHashtag size={14} color="inherit" />
              {popularity}
            </span>
          )}
          {num_episodes && (
            <span className="md-text-bold flex items-center gap-2">
              <FaVideo size={14} />
              {num_episodes}
            </span>
          )}
          {release_year && (
            <span className="md-text-bold flex items-center gap-2">
              <FaCalendar size={14} />
              {release_year}
            </span>
          )}
          {status && (
            <span className={`default-${status.toLowerCase().split(" ").join("-")} md-text-bold flex items-center gap-2 half:hidden`}>
              <GoDotFill size={14} color="inherit" />
              {status}
            </span>
          )}
        </div>
        <div className="flex mt4 gap-4">
          {genres.map((genre) => (
            <Tag key={genre} text={genre} />
          ))}
        </div>
        <div className="w100 overflow-hidden mt4">
          <span className="synopsis line-clamp-2">{synopsis}</span>
        </div>
      </div>
    </div>
  );
}

function RenderFavorites({ favoritesData }: { favoritesData: FullMalAnimeResponse[] }): JSX.Element {
  return (
    <div className="flex-d gap-4">
      {favoritesData.map((data) => (
        <FavoriteImage favorite={data} key={data.mal_id} />
      ))}
    </div>
  );
}

function DefaultAnimeFavorites({ favoritesData }: Props): JSX.Element {
  if (!favoritesData) {
    throw new Error(`No favorites data found  ${favoritesData}`);
  }

  return (
    <section className="default-favorites">
      <DefaultTitle icon={<FaHeart />} title="Anime Favorites" />
      <RenderFavorites favoritesData={favoritesData} />
    </section>
  );
}

export default DefaultAnimeFavorites;
