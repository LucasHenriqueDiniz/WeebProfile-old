import React from "react";

export interface StatProps {
  title: string;
  value: string;
  strong?: boolean;
  icon?: JSX.Element;
  className?: string;
}

export function Stat({ icon, title, value, strong, className }: StatProps): JSX.Element {
  return (
    <li className={`default-stat ${strong ? "md-text" : "sm-text"} ${className ? className : ""}`}>
      {icon && icon}
      <span>{value}</span>
      <span>{title}</span>
    </li>
  );
}
