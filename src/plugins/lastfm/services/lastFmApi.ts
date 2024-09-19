import Axios from "axios";
import { CacheOptions, setupCache } from "axios-cache-interceptor";
import Bottleneck from "bottleneck";
import * as cheerio from "cheerio";
import { LastFmAlbum, LastFmArtist, LastFmData, LastFmFeaturedTrack, LastFmResponse, LastFmTrack, TopTrack } from "../types/lastFmTypes";
import LastFmPlugin from "../types/envLastFM";
import isNodeEnvironment from "../../../../utils/isNodeEnv";
import getImage64 from "../../../../utils/imageToBase64";

const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 3000,
  reservoir: 15,
  reservoirRefreshAmount: 15,
  reservoirRefreshInterval: 30 * 1000,
});

const axiosInstance = Axios.create();
const OPTIONS = {
  maxAge: 1 * 60 * 60 * 1000, // 1
  debug(msg) {
    console.log(msg);
  },
  //dont cache != 200 responses
  shouldCacheResponse: (response: { status: number }) => response.status === 200,
  clearOnStale: true,
  cacheTakeover: false,
} as CacheOptions;
const axios = setupCache(axiosInstance, OPTIONS);

// webscrap https://www.last.fm/user/Amayacrab using cheerio
async function LastFmApi(lastFmPlugin: LastFmPlugin): Promise<LastFmResponse> {
  const isNodeEnv = isNodeEnvironment();
  let url = `https://www.last.fm/user/${lastFmPlugin.username}`;
  if (!isNodeEnv) {
    url = `https://cors-anywhere.herokuapp.com/${url}`;
  }

  console.log("Fetching LastFM data");
  const reponse = await limiter.schedule(() => axios.get(url));

  console.log("Data fetched");
  const $ = cheerio.load(reponse.data);
  console.log("Parsing data");

  let recentTracksArray: LastFmTrack[] = [];
  let topArtistsArray: LastFmArtist[] = [];
  let topAlbumsArray: LastFmAlbum[] = [];
  let topTracksArray: TopTrack[] = [];
  let treatedFeaturedTrack: LastFmFeaturedTrack | null = null;

  let topArtistsInterval;
  let topAlbumsInterval;
  let topTracksInterval;

  let totalScrobbles = "0";
  let totalArtists = "0";
  let lovedTracks = "0";

  const sections = lastFmPlugin.sections;
  const recent_tracks_max = lastFmPlugin.recent_tracks_max;
  const top_artists_max = lastFmPlugin.top_artists_max;
  const top_albums_max = lastFmPlugin.top_albums_max;
  const top_tracks_max = lastFmPlugin.top_tracks_max;

  const hasRecentTracks = sections.includes("recent_tracks");
  const hasTopArtists = sections.includes("top_artists_list") || sections.includes("top_artists_grid") || sections.includes("top_artists_default");
  const hasTopAlbums = sections.includes("top_albums_list") || sections.includes("top_albums_grid") || sections.includes("top_albums_default");
  const hasTopTracks = sections.includes("top_tracks_list") || sections.includes("top_tracks_grid") || sections.includes("top_tracks_default");
  const hasStatistics = sections.includes("statistics");

  if (hasRecentTracks) {
    console.log("Parsing recent tracks");
    try {
      const recentTracks = $("#recent-tracks-section .chartlist-row");
      recentTracksArray = recentTracks
        .map((i, el) => {
          if (i >= recent_tracks_max) return;
          const track = $(el).find(".chartlist-name").text().trim();
          const artist = $(el).find(".chartlist-artist").text().trim();
          const date = $(el).find(".chartlist-timestamp").text().trim();
          const image = $(el).find(".chartlist-image img").attr("src");
          return { track, artist, date, image };
        })
        .get();
    } catch (error) {
      console.log("Error parsing recent tracks", error);
    }
    console.log("Recent tracks parsed", recentTracksArray.length);
  }

  if (hasTopArtists) {
    console.log("Parsing top artists");
    try {
      var topArtists = $("#top-artists .chartlist-row");
      topArtistsInterval = $("#top-artists .section-control").text().replace("Sorted by:", "").trim();

      if (topArtists.length === 0) {
        topArtists = $("#top-artists .grid-items-item");
        topArtistsArray = topArtists
          .map((i, el) => {
            if (i >= top_artists_max) return;
            const artist = $(el).find(".grid-items-item-main-text").text().trim();
            const totalPlays = $(el).find(".grid-items-item-aux-text").text().replace("scrobbles", "").trim();
            const image = $(el).find(".grid-items-cover-image-image img").attr("src");
            return { artist, image, totalPlays };
          })
          .get();
      } else {
        topArtistsArray = topArtists
          .map((i, el) => {
            if (i >= top_artists_max) return;
            const artist = $(el).find(".chartlist-name").text().trim();
            const totalPlays = $(el).find(".chartlist-count-bar-value").text().replace("scrobbles", "").trim();
            const image = $(el).find(".chartlist-image img").attr("src");
            return { artist, image, totalPlays };
          })
          .get();
      }
    } catch (error) {
      console.log("Error parsing top artists", error);
    }
    console.log("Top artists parsed", topArtistsArray.length);
  }

  if (hasTopAlbums) {
    console.log("Parsing top albums");
    try {
      var topAlbums = $("#top-albums .chartlist-row");
      topAlbumsInterval = $("#top-albums .section-control").text().replace("Sorted by:", "").trim();

      if (topAlbums.length === 0) {
        topAlbums = $("#top-albums .grid-items-item");
        topAlbumsArray = topAlbums
          .map((i, el) => {
            if (i >= top_albums_max) return;
            const album = $(el).find(".grid-items-item-main-text").text().trim();
            const artist = $(el).find(".grid-items-item-aux-block").text().trim();
            const plays = $(el).find(".grid-items-item-aux-text a").last().text().replace("scrobbles", "").trim();
            const image = $(el).find(".grid-items-cover-image-image img").attr("src");
            return { album, artist, plays, image };
          })
          .get();
      } else {
        topAlbumsArray = topAlbums
          .map((i, el) => {
            if (i >= top_albums_max) return;
            const album = $(el).find(".chartlist-name").text().trim();
            const artist = $(el).find(".chartlist-artist").text().trim();
            const plays = $(el).find(".chartlist-count-bar-value").text().replace("scrobbles", "").trim();
            const image = $(el).find(".chartlist-image img").attr("src");
            return { album, artist, plays, image };
          })
          .get();
      }
    } catch (error) {
      console.log("Error parsing top albums", error);
    }
    console.log("Top albums parsed", topAlbumsArray.length);
  }

  if (hasTopTracks) {
    console.log("Parsing top tracks");
    try {
      var topTracks = $("#top-tracks .chartlist-row");
      topTracksInterval = $("#top-tracks .section-control").text().replace("Sorted by:", "").trim();

      if (topTracks.length === 0) {
        topTracks = $("#top-tracks .grid-items-item");
        topTracksArray = topTracks
          .map((i, el) => {
            if (i >= top_tracks_max) return;
            const track = $(el).find(".grid-items-item-main-text").text().trim();
            const artist = $(el).find(".grid-items-item-aux-block").text().trim();
            const plays = $(el).find(".grid-items-item-aux-text a").last().text().replace("scrobbles", "").trim();
            const image = $(el).find(".grid-items-cover-image-image img").attr("src");
            return { track, artist, plays, image };
          })
          .get();
      } else {
        topTracksArray = topTracks
          .map((i, el) => {
            if (i >= top_tracks_max) return;
            const track = $(el).find(".chartlist-name").text().trim();
            const artist = $(el).find(".chartlist-artist").text().trim();
            const plays = $(el).find(".chartlist-count-bar-value").text().replace("scrobbles", "").trim();
            const image = $(el).find(".chartlist-image img").attr("src");
            return { track, artist, plays, image };
          })
          .get();
      }
    } catch (error) {
      console.log("Error parsing top tracks", error);
    }
    console.log("Top tracks parsed", topTracksArray.length);
  }

  if (hasStatistics) {
    console.log("Parsing metadata");
    try {
      totalScrobbles = $('.header-metadata-item a[href$="/library"]').text().trim();
      totalArtists = $('.header-metadata-item a[href$="/artists"]').text().trim();
      lovedTracks = $('.header-metadata-item a[href$="/loved"]').text().trim();
      console.log("Loved tracks", lovedTracks, "Total scrobbles", totalScrobbles, "Total artists", totalArtists);
    } catch (error) {
      console.log("Error parsing metadata", error);
    }
    try {
      const featuredTrack = $(".header-featured-track");
      treatedFeaturedTrack = {
        track: featuredTrack.find(".header-featured-track .featured-item-name").text().trim(),
        artist: featuredTrack.find(".header-featured-track .featured-item-artist").text().trim(),
        image: featuredTrack.find(".featured-item-art img").attr("src"),
      };
    } catch (error) {
      console.log("Error parsing featured track", error);
    }
    console.log("featured track parsed", treatedFeaturedTrack?.track);
  }

  // get image 64 | TODO: refactor to use Promise.all
  for (const track of recentTracksArray) {
    track.image = (await getImage64(track.image)) || "";
  }
  for (const artist of topArtistsArray) {
    artist.image = (await getImage64(artist.image)) || "";
  }
  for (const album of topAlbumsArray) {
    album.image = (await getImage64(album.image)) || "";
  }
  for (const track of topTracksArray) {
    track.image = (await getImage64(track.image)) || "";
  }
  if (treatedFeaturedTrack) {
    treatedFeaturedTrack.image = (await getImage64(treatedFeaturedTrack.image)) || "";
  }
  console.log("LastFM data parsed");
  const lastFmData: LastFmData = {
    totalScrobbles,
    totalArtists,
    lovedTracks,
    recentTracks: recentTracksArray,
    topArtists: topArtistsArray,
    topAlbums: topAlbumsArray,
    topTracks: topTracksArray,
    featuredTrack: treatedFeaturedTrack,
  };

  return { data: lastFmData, topArtistsInterval, topAlbumsInterval, topTracksInterval } as LastFmResponse;
}

export default LastFmApi;