import React from "react";
import randomString from "../../../../utils/randomString";
import Img64 from "../../../base/ImageComponent";

export interface ImageGridItemProps {
  title: string;
  image: string;
  plays: string;
}

function GridItem({ title, image, plays }: ImageGridItemProps): JSX.Element {
  return (
    <div className="relative overflow-hidden radius-8 min-w-200 min-h-200 half:min-w-100 half:min-h-100">
      <Img64 url64={image} alt={title} defaultType="lastfm" className="image-center-full" />
      <div className="overlay">
        <div className="flex-d">
          <p className="md-text-bold text-nowrap text-overflow half:sm-text">{title}</p>
          <p className="sm-text text-gray line-100 half:xs-text">{plays}</p>
        </div>
      </div>
    </div>
  );
}

interface ImageGridProps {
  data: ImageGridItemProps[];
}

function ImageGrid({ data }: ImageGridProps): JSX.Element {
  if (data.length % 4 !== 0) {
    data = data.slice(0, 4);
  }

  return (
    <div className="image-grid-container">
      {data.map((item) => (
        <GridItem key={randomString()} {...item} />
      ))}
    </div>
  );
}

export default ImageGrid;
