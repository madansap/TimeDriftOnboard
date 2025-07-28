import React from 'react';

interface TimeSliderProps {
  currentTime?: number; // 0-24 hours
}

export const TimeSlider: React.FC<TimeSliderProps> = ({ currentTime = 14 }) => {
  // Generate tick marks for the slider
  const generateTicks = () => {
    const ticks = [];
    for (let i = 0; i < 244; i++) {
      const isHighlighted = i >= 143 && i <= 155; // Around current time
      const isCurrentTime = i === 143; // Exact current time marker
      
      ticks.push(
        <div
          key={i}
          className={`absolute z-0 flex w-0.5 shrink-0 h-3 translate-x-[0%] -translate-y-2/4 rounded-md top-2/4 ${
            isCurrentTime 
              ? 'bg-white h-3.5' 
              : isHighlighted 
                ? 'bg-[rgba(195,195,195,1)]' 
                : 'bg-[rgba(179,179,179,1)]'
          }`}
          style={{ left: `${i}px` }}
        />
      );
    }
    return ticks;
  };

  return (
    <div className="justify-center items-center bg-[color(display-p3_0.0667_0.0667_0.0667_/_0.80)] flex min-h-6 w-full mt-3 px-1.5 py-2.5 rounded-xl">
      <div className="self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto">
        <div className="relative flex w-full justify-center">
          <div className="self-stretch z-0 flex min-w-60 shrink h-1 flex-1 basis-[0%] my-auto rounded-full" />
          {generateTicks()}
        </div>
      </div>
    </div>
  );
};
