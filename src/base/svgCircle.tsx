import React from "react";

const SvgCircle = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="12" />
  </svg>
);

export default SvgCircle;
