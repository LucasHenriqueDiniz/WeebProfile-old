import { FaHeart } from "react-icons/fa";
import DefaultTitle from "../../!templates/Default/Default_Title";
import RenderBasedOnStyle from "../../!templates/RenderBasedOnStyle";
import TerminalCommand from "../../!templates/Terminal/Terminal_Command";
import TerminalLineBreak from "../../!templates/Terminal/Terminal_LineBreak";
import getEnvVariables from "../../../../utils/getEnvVariables";
import getPseudoCommands from "../../../../utils/getPseudoCommands";
import treatJanponeseName from "../../../../utils/treatJaponeseName";
import Img64 from "../../../base/ImageComponent";
import { AnyMalFavorite, AnyMalFavoriteUnique } from "../types/malFavoritesResponse";

interface DefaultSimpleFavoritesProps {
  favoritesData: AnyMalFavorite;
  type: string;
}

function FavoriteImage({ favorite, hideOverlay }: { favorite: AnyMalFavoriteUnique; hideOverlay: boolean }): JSX.Element {
  const imageUrl = favorite.images.jpg?.base64;
  const title = "name" in favorite ? treatJanponeseName(favorite.name) : favorite.title;

  return (
    <div className="full-favorite-image-container">
      <Img64 url64={imageUrl} alt={title} className="fav-image" />
      {!hideOverlay && <div className="fav-overlay">{title}</div>}
    </div>
  );
}

function RenderFavorites({ favoritesData, hideOverlay }: { favoritesData: AnyMalFavorite; hideOverlay: boolean }): JSX.Element {
  return (
    <div className="gap-4 grid-col-10 half:grid-col-5 half:gap-2 half:min-w-full half:min-h-full">
      {favoritesData.map((data) => (
        <FavoriteImage favorite={data} key={data.mal_id} hideOverlay={hideOverlay} />
      ))}
    </div>
  );
}

function SimpleFavorites({ favoritesData, type }: DefaultSimpleFavoritesProps): JSX.Element {
  const { pluginMal } = getEnvVariables();
  if (!pluginMal) throw new Error("MAL plugin not found in DefaultSimpleFavorites component");

  let maxItems: number;
  let hideTitle: boolean;
  let title: string;
  const hideOverlay = pluginMal.favorites_hide_overlay;

  switch (type) {
    case "anime":
      maxItems = pluginMal.anime_favorites_max;
      hideTitle = pluginMal.anime_favorites_hide_title;
      title = pluginMal.anime_favorites_title;
      break;
    case "manga":
      maxItems = pluginMal.manga_favorites_max;
      hideTitle = pluginMal.manga_favorites_hide_title;
      title = pluginMal.manga_favorites_title;
      break;
    case "people":
      maxItems = pluginMal.people_favorites_max;
      hideTitle = pluginMal.people_favorites_hide_title;
      title = pluginMal.people_favorites_title;
      break;
    default:
      maxItems = pluginMal.character_favorites_max;
      hideTitle = pluginMal.character_favorites_hide_title;
      title = pluginMal.character_favorites_title;
  }

  return (
    <section id="mal" className="simple-favorites">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            {!hideTitle && <DefaultTitle title={title} icon={<FaHeart />} />}
            <RenderFavorites favoritesData={favoritesData} hideOverlay={hideOverlay} />
          </>
        }
        terminalComponent={
          <>
            {!hideTitle && <TerminalCommand command={getPseudoCommands({ plugin: "mal", section: "favorites", username: "username", type, limit: maxItems })} />}
            {favoritesData.map((data) => (
              <div className="terminal-grid-2 mb-4" key={data.mal_id}>
                <p className="sm-text text-overflow text-nowrap text-warning">* {"name" in data ? treatJanponeseName(data.name) : data.title}</p>
                <p className="sm-text text-overflow text-muted">{"type" in data && "start_year" in data && `(${data.type}, ${data.start_year})`}</p>
              </div>
            ))}
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}

export default SimpleFavorites;
