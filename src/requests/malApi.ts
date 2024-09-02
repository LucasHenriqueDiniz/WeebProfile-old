import axios from "axios";

async function myAnimeListRequest(username: string, content: string) {
  //content = favorites, reviews, statistics
  // favorites -> /favorites
  // last_updated -> /userupdates
  // statistics -> /statistics
  // profile -> /full

  var contentUrl = "";
  switch (content) {
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
      throw new Error("Invalid content type");
  }

  const response = await axios.get(`https://api.jikan.moe/v4/users/${username}/${contentUrl}`);

  if (!response || response.status !== 200) {
    throw new Error("Failed to fetch data from MyAnimeList");
  }

  if (content === "profile") {
    return response.data;
  } else {
    return response.data.data;
  }
}

export default myAnimeListRequest;
