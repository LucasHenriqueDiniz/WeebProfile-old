import React from "react";

interface DefaultTitleProps {
  icon?: JSX.Element;
  title: string;
}

export default function DefaultTitle({ icon, title }: DefaultTitleProps): JSX.Element {
  return (
    <div className="default-title">
      {icon && icon}
      <h2 className="lg-text-bold text-shadow">{title}</h2>
    </div>
  );
}
