async function filterFavoritesGist(data: any[], count: number, type: string) {
  const favorites = data.slice(0, count);

  const favoriteTitles = favorites.map((favorite: { title: any; name: any }) => {
    switch (type) {
      case "anime":
        return favorite.title;
      case "manga":
        return favorite.title;
      case "people":
        return favorite.name;
      case "characters":
        return favorite.name;
    }
  });

  return favoriteTitles;
}

export default filterFavoritesGist;
