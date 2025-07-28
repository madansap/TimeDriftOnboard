import React from 'react';
import { TimeSlider } from './TimeSlider';

interface TimezoneWidgetProps {
  timezone: string;
  time: string;
  period: string;
}

export const TimezoneWidget: React.FC<TimezoneWidgetProps> = ({ 
  timezone = "UTC (Local)", 
  time = "02:00", 
  period = "PM" 
}) => {
  return (
    <div className="border border-[color(display-p3_0.1255_0.1255_0.1255)] backdrop-blur-[2px] bg-[color(display-p3_0.0941_0.0941_0.0941)] min-h-[120px] w-full overflow-hidden mt-2 p-px rounded-xl border-solid">
      <header className="w-full text-[13px] text-white font-bold leading-loose pt-3 pb-[13px] px-4">
        <div className="w-full overflow-hidden">
          <h3>{timezone}</h3>
        </div>
      </header>
      <div className="min-w-[274px] w-full p-2">
        <div className="flex w-full items-center font-bold whitespace-nowrap flex-1 h-full">
          <div className="self-stretch flex gap-1.5 my-auto">
            <time className="text-[17px] text-white leading-loose">
              {time}
            </time>
            <span className="text-xs text-[rgba(179,179,179,1)] leading-none pb-0.5">
              {period}
            </span>
          </div>
        </div>
        <TimeSlider />
      </div>
    </div>
  );
};
