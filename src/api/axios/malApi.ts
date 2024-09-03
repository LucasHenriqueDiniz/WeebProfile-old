import axios from "axios";
import { MalFavoritesResponse } from "../../../types/malFavoritesResponse";
import { MalLastUpdatesResponse } from "../../../types/maleLastUpdatesResponse";
import { MalProfileResponse } from "../../../types/malProfileResponse";
import imageToBase64 from "image-to-base64";

async function getImage64(imageUrl: string): Promise<string | null> {
  try {
    const base64 = await imageToBase64(imageUrl);
    return base64;
  } catch (error) {
    console.error("Error fetching or converting image:", error);
    return null; // Or handle the error in a way that suits your application
  }
}

export async function getImageFavorites(data: MalFavoritesResponse): Promise<MalFavoritesResponse> {
  const anime = data.anime;
  const manga = data.manga;
  const characters = data.characters;
  const people = data.people;

  const loopData = [anime, manga, characters, people];

  // Use Promise.all to wait for all image conversions to complete
  const updatedData = await Promise.all(
    loopData.map((data) => {
      if (data) {
        return Promise.all(
          data.map(async (item) => {
            const imageUrl = item.images.jpg?.image_url || item.images.jpg?.small_image_url || item.images.jpg?.large_image_url || "";
            const base64Image = await getImage64(imageUrl);

            // create a new property in the object to store the base64 image
            if (item.images.jpg) {
              item.images.jpg.base64 = base64Image || "";
            }

            return item; // Return the modified item object
          }),
        );
      } else {
        return [];
      }
    }),
  );

  // Reconstruct the MalFavoritesResponse object with the updated data
  return {
    anime: updatedData[0] as MalFavoritesResponse["anime"],
    manga: updatedData[1] as MalFavoritesResponse["manga"],
    characters: updatedData[2] as MalFavoritesResponse["characters"],
    people: updatedData[3] as MalFavoritesResponse["people"],
  };
}

export async function getImageLastUpdates(data: MalLastUpdatesResponse) {
  const anime = data.anime;
  const manga = data.manga;

  const loopData = [anime, manga];

  // Use Promise.all to wait for all image conversions to complete
  const updatedData = await Promise.all(
    loopData.map((data) => {
      if (data) {
        return Promise.all(
          data.map(async (item) => {
            const imageUrl = item.entry.images.jpg?.image_url || item.entry.images.jpg?.small_image_url || item.entry.images.jpg?.large_image_url || "";
            const base64Image = await getImage64(imageUrl);

            // create a new property in the object to store the base64 image
            if (item.entry.images.jpg) {
              item.entry.images.jpg.base64 = base64Image || "";
            }

            return item; // Return the modified item object
          }),
        );
      } else {
        return [];
      }
    }),
  );

  // Reconstruct the MalFavoritesResponse object with the updated data
  return {
    anime: updatedData[0] as MalLastUpdatesResponse["anime"],
    manga: updatedData[1] as MalLastUpdatesResponse["manga"],
  };
}

async function myAnimeListRequest(username: string, section: string) {
  //content = favorites, reviews, statistics
  // favorites -> /favorites
  // last_updated -> /userupdates
  // statistics -> /statistics
  // profile -> /full

  var contentUrl = "";
  switch (section) {
    case "last_updated":
      contentUrl = "userupdates";
      break;
    case "statistics":
      contentUrl = "statistics";
      break;
    case "favorites":
      contentUrl = "favorites";
      break;
    case "profile":
      contentUrl = "full";
      break;
    default:
      throw new Error(`Invalid content type: ${section}`);
  }

  const response = await axios.get(`https://api.jikan.moe/v4/users/${username}/${contentUrl}`);
  let data;
  if (!response || response.status !== 200) {
    throw new Error("Failed to fetch data from MyAnimeList");
  }

  if (section === "favorites") {
    data = response.data.data;
    await getImageFavorites(data);
  } else if (section === "last_updated") {
    data = response.data.data;
    await getImageLastUpdates(data);
  } else if (section === "profile") {
    data = response.data;
  } else {
    data = response.data.data;
  }

  return data;
}

export async function myAnimeListFullRequest(username: string): Promise<MalProfileResponse> {
  const response = await axios.get(`https://api.jikan.moe/v4/users/${username}/full`);
  let data;
  if (!response || response.status !== 200) {
    throw new Error("Failed to fetch data from MyAnimeList");
  }

  data = response.data;

  return data;
}

export default myAnimeListRequest;
