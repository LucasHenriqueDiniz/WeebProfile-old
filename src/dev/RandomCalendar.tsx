import React from "react";
import { subYears, isBefore, isSameDay, addDays } from "date-fns";

type HeatmapValue = { date: Date; count: number };

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  return (
    <div>
      {[...Array(52)].map((_, index) => {
        const weekStartDate = addDays(startDate, index * 7);
        return (
          <div key={index}>
            {[...Array(7)].map((_, index) => {
              const currentDate = addDays(weekStartDate, index);
              const shouldHaveData = isBefore(currentDate, endDate);
              const value = Math.random() * 4;
              return <rect key={index} width={16} height={16} x={index * 18} y={index * 18} fill={shouldHaveData ? "#ebedf0" : "#fff"} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RandomCalendar;
