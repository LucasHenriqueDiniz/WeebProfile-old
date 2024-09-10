import { format } from "date-fns";
import React from "react";
import { FaList, FaStar } from "react-icons/fa";
import { LastUpdatesAnime, LastUpdatesManga, MalLastUpdatesResponse } from "../../../../types/malLastUpdatesResponse";
import Img64 from "../../../base/ImageComponent";
import DefaultTitle from "./Title";

function Bar({ current, total }: { current: number; total: number }): JSX.Element {
  const percentage = total > 0 ? (current / total) * 100 : 50;

  return (
    <div className="w100 flex drop-shadow color-bg-primary-15 radius-16">
      <span className="flex-end color-bg-primary align-center pr-8 radius-16 sm-text half:xs-text" style={{ width: `${percentage > 1 ? percentage : 8}%` }}>
        <p>{percentage.toFixed()}%</p>
      </span>
      {percentage < 97 && <p className="flex-end pr-8 sm-text align-center color-white-50 absolute right-0 h100 half:xs-text">{total}</p>}
    </div>
  );
}

function Update({ update }: { update: LastUpdatesAnime | LastUpdatesManga }): JSX.Element {
  const isAnime = "episodes_total" in update;
  const title = update.entry.title;
  const imgSrc = update.entry.images.jpg?.base64;
  const total = isAnime ? update.episodes_total : update.chapters_total || 0;
  const current = isAnime ? update.episodes_seen : update.chapters_read || 0;
  const status = update.status;
  const date = format(new Date(update.date), "MMM d, h:mm a");
  const score = update.score ?? 0;

  return (
    <div className="flex gap-8 items-center h-80">
      <div className="default-update-image drop-shadow">
        <Img64 url64={imgSrc} alt={title} />
      </div>
      <div className="flex-d gap-4 w100">
        <div className="flex justify-between items-center">
          <h3 className="lg-text-bold">{title}</h3>
          <span className="flex items-center justify-center xl-text color-primary gap-2">
            {score === 0 || !score ? "-" : score} <FaStar className="color-primary pb-4" />
          </span>
        </div>

        <Bar current={current} total={total} />

        <div className="flex justify-between">
          <div className="lg-text gap-4 flex items-center half:md-text">
            <span className={`default-${status === "Reading" ? "watching" : status === "Plan to Read" ? "plan-to-watch" : status.toLowerCase().split(" ").join("-")}`}>
              {status}
            </span>
            <span>
              {current === 0 || !current ? "?" : current} / {total === 0 || !total ? "?" : total}
            </span>
          </div>
          <span className="sm-text text-gray flex align-flexend">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default function Default_LastUpdates({ lastUpdatesData, maxItems }: { lastUpdatesData: MalLastUpdatesResponse; maxItems: number }): JSX.Element {
  const allUpdates = [...lastUpdatesData.anime, ...lastUpdatesData.manga].slice(0, maxItems).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  //@TODO maybe remove maxItems from the props because in the data fetching we already limit the data
  return (
    <section className="default-last-updates">
      <DefaultTitle title="Last Updates" icon={<FaList />} />
      <div className="flex-d gap-4">
        {allUpdates.map((update, index) => (
          <Update key={index} update={update} />
        ))}
      </div>
    </section>
  );
}
