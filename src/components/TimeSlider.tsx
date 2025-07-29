import React from 'react';

interface TimeSliderProps {
  currentTime?: number; // 0-24 hours
}

export const TimeSlider: React.FC<TimeSliderProps> = ({ currentTime = 14 }) => {
  // Generate tick marks for the slider
  const generateTicks = () => {
    const ticks = [];
    // Reduce number of ticks for smaller screens
    const tickCount = window.innerWidth < 768 ? 100 : 244;
    for (let i = 0; i < tickCount; i++) {
      const isHighlighted = i >= (tickCount * 0.6) && i <= (tickCount * 0.64); // Around current time
      const isCurrentTime = i === Math.floor(tickCount * 0.6); // Exact current time marker
      
      ticks.push(
        <div
          key={i}
          className={`absolute z-0 flex w-0.5 shrink-0 h-2 sm:h-3 translate-x-[0%] -translate-y-2/4 rounded-md top-2/4 ${
            isCurrentTime 
              ? 'bg-white h-2.5 sm:h-3.5' 
              : isHighlighted 
                ? 'bg-[rgba(195,195,195,1)]' 
                : 'bg-[rgba(179,179,179,1)]'
          }`}
          style={{ left: `${(i / tickCount) * 100}%` }}
        />
      );
    }
    return ticks;
  };

  return (
    <div className="justify-center items-center bg-[color(display-p3_0.0667_0.0667_0.0667_/_0.80)] flex min-h-5 sm:min-h-6 w-full mt-2 sm:mt-3 px-1 sm:px-1.5 py-2 sm:py-2.5 rounded-xl">
      <div className="self-stretch w-full flex-1 shrink basis-[0%] my-auto">
        <div className="relative flex w-full justify-center">
          <div className="self-stretch z-0 flex w-full shrink h-0.5 sm:h-1 flex-1 basis-[0%] my-auto rounded-full" />
          {generateTicks()}
        </div>
      </div>
    </div>
  );
};
