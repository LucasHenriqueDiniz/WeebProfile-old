import React from "react";

export interface StatProps {
  title: string;
  value: string;
  strong?: boolean;
  icon?: JSX.Element;
  className?: string;
  smallInHalf?: boolean;
}

export function Stat({ icon, title, value, strong, className, smallInHalf }: StatProps): JSX.Element {
  return (
    <li className={`default-stat ${strong ? "md-text" : "sm-text"} ${smallInHalf ? "half:md-2-text" : ""} ${className ? className : ""}`}>
      {icon && icon}
      <span>{value}</span>
      <span>{title}</span>
    </li>
  );
}
