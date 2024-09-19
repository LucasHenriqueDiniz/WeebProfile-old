import React from "react";
import randomString from "../../../../utils/randomString";
import Img64 from "../../../base/ImageComponent";
import { GridItemProps } from "../types";

function GridItem({ image, title, value, subtitle, index }: GridItemProps & { index: number }): JSX.Element {
  return (
    <div className={`relative overflow-hidden radius-8 ${index === 0 ? "default-grid-main" : ""}`}>
      <Img64 url64={image} alt={title} defaultType="lastfm" className="image-center-full" />
      <div className="overlay">
        <div className="flex-d">
          <p className="md-text-bold text-nowrap text-overflow half:sm-text">{title}</p>
          <p className="sm-text text-gray line-100">
            {subtitle && `${subtitle} - `}
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

interface DefaultGridProps {
  data: GridItemProps[];
}

function DefaultGrid({ data }: DefaultGridProps): JSX.Element {
  if (data.length > 5) {
    data = data.slice(0, 5);
  }

  return (
    <div className="default-grid-container">
      {data.map((item, index) => (
        <GridItem key={randomString()} index={index} {...item} />
      ))}
    </div>
  );
}

export default DefaultGrid;
