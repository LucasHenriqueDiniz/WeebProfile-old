import React from "react";
import randomString from "../../../../utils/randomString";
import Img64 from "../../../base/ImageComponent";

export interface ListItemProps {
  title: string;
  subtitle?: string;
  image: string;
  plays: string;
}

function ListItem({ title, subtitle, image, plays }: ListItemProps): JSX.Element {
  return (
    <div className="flex gap-8 items-center h-40">
      <div className="music-image-container">
        <Img64 url64={image} alt={title} defaultType="lastfm" className="music-image" />
      </div>
      <div className="flex-d w100 h100 justify-evenly overflow-hidden">
        <p className="md-text-bold text-ellipsis text-nowrap">{title}</p>
        <div className="flex justify-between items-baseline">
          {subtitle && <p className="md-2-text text-gray line-100 text-nowrap text-overflow">{subtitle}</p>}
          <p className="sm-text text-gray line-100 text-nowrap w-fit">{plays}</p>
        </div>
      </div>
    </div>
  );
}

function List({ data }: { data: ListItemProps[] }): JSX.Element {
  return (
    <div className="flex-d gap-4">
      {data.map((item) => (
        <ListItem key={randomString()} {...item} />
      ))}
    </div>
  );
}

export default List;