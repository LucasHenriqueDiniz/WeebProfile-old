import React from "react";
import LastFmPlugin from "../../../../types/env/LastFmPluginType";
import { LastFmFeaturedTrack, LastFmResponse } from "../../../../types/plugins/lastFmTypes";
import Img64 from "../../../base/ImageComponent";
import DefaultTitle from "./_Title";
import { IoStatsChartOutline } from "react-icons/io5";

function FeaturedTrack({ track }: { track: LastFmFeaturedTrack }): JSX.Element {
  return (
    <>
      <div className="flex-d align-flexend h100 justify-evenly w100">
        <p className="sm-text-bold">Top Track</p>
        <p className="md-text-bold text-overflow text-nowrap w-fit">{track.track}</p>
        <p className="md-2-text text-gray line-100 text-nowrap text-overflow w-fit">{track.artist}</p>
      </div>
      <div className="featured-image-container">
        <Img64 url64={track.image} alt={track.track} defaultType="lastfm" className="music-image" />
      </div>
    </>
  );
}

function LastFMStatistics({ lastFmPlugin, statsData }: { lastFmPlugin: LastFmPlugin; statsData: LastFmResponse }): JSX.Element {
  const totalScrobbles = statsData.data.totalScrobbles;
  const totalArtists = statsData.data.totalArtists;
  const lovedTracks = statsData.data.lovedTracks;
  const featuredTrack = statsData.data.featuredTrack;
  const hideTitle = lastFmPlugin.statistics_hide_title;

  return (
    <section id="last-fm" className="statistics">
      {!hideTitle && <DefaultTitle title="Statistics" icon={<IoStatsChartOutline />} />}
      <div className=" h-64 max-h-64 featured-grid">
        <div className="flex gap-4">
          {totalScrobbles !== "0" && (
            <div className="text-center px-4 text-nowrap">
              <h3 className="capitalize md-text-bold text-gray line-100">Scrobbles</h3>
              <p className="lg-text-bold">{totalScrobbles}</p>
            </div>
          )}
          {totalArtists !== "0" && (
            <div className="text-center px-4 text-nowrap">
              <h3 className="capitalize md-text-bold text-gray line-100">Artists</h3>
              <p className="lg-text-bold">{totalArtists}</p>
            </div>
          )}
          {/* {lovedTracks !== "0" && (
            <div className="text-center px-4 text-nowrap">
              <h3 className="capitalize md-text-bold text-gray">Loved Tracks</h3>
              <p className="lg-text-bold">{lovedTracks}</p>
            </div>
          )} */}
        </div>
        {featuredTrack && <FeaturedTrack track={featuredTrack} />}
      </div>
    </section>
  );
}

export default LastFMStatistics;
