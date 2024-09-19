import React from "react";

function PorcentageBar({ current, total, status }: { current: number; total: number; status: string }): JSX.Element {
  let percentage = total > 0 ? (current / total) * 100 : 50;

  if (status === "Completed") percentage = 100;
  if (status === "Plan to Watch" || status === "Plan to Read") percentage = 0;

  return (
    <div className="w100 flex drop-shadow color-bg-primary-15 radius-16">
      <span className="flex-end color-bg-primary align-center pr-8 radius-16 sm-text half:xs-text" style={{ width: `${percentage > 1 ? percentage : 4}%` }}>
        <p>{percentage.toFixed()}%</p>
      </span>
      {percentage < 97 && <p className="flex-end pr-8 sm-text align-center color-white-50 absolute right-0 h100 half:xs-text">{total}</p>}
    </div>
  );
}

export default PorcentageBar;
