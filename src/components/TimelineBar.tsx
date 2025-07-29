import React from 'react';
import { Clock } from '@phosphor-icons/react';

export const TimelineBar: React.FC = () => {
  const timeMarkers = [
    { time: '00', position: 0, isHighlighted: true },
    { time: '02', position: 8, isHighlighted: false },
    { time: '04', position: 16, isHighlighted: false },
    { time: '06', position: 24, isHighlighted: true },
    { time: '08', position: 32, isHighlighted: false },
    { time: '10', position: 40, isHighlighted: false },
    { time: '12', position: 48, isHighlighted: true },
    { time: '14', position: 56, isHighlighted: false },
    { time: '16', position: 64, isHighlighted: false },
    { time: '18', position: 72, isHighlighted: true },
    { time: '20', position: 80, isHighlighted: false },
    { time: '22', position: 88, isHighlighted: false },
    { time: '24', position: 96, isHighlighted: true },
  ];

  return (
    <div className="bg-[rgba(255,255,255,0.002)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full overflow-hidden pb-px px-6 rounded-[16px_16px_0px_0px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <div className="self-center relative flex w-[7px] flex-col pr-0.5">
          <div className="bg-[rgba(53,249,47,1)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] z-0 flex min-h-[5px] w-full h-[5px] rounded-full border-[rgba(53,249,47,1)] border-solid border-2" />
          <div className="absolute z-0 flex min-h-14 w-0.5 bottom-[-57px] h-14 rounded-full left-0.5" />
        </div>
        
        <div className="flex gap-[11px] mt-[47px] max-md:max-w-full max-md:-mr-0.5 max-md:mt-10">
          {timeMarkers.map((marker, index) => (
            <div key={marker.time} className="flex flex-col flex-1 mt-1 pr-px relative">
              <div className={`${
                marker.isHighlighted 
                  ? 'bg-[rgba(179,179,179,1)] flex min-h-3 w-0.5 rounded-full' 
                  : 'bg-[rgba(179,179,179,1)] flex min-h-2 w-0.5 rounded-full'
              }`} />
              {marker.time && (
                <time className={`absolute z-0 -top-4 ${
                  marker.isHighlighted 
                    ? 'text-xs text-white font-bold leading-none left-[-7px] w-4' 
                    : 'text-[11px] text-[rgba(179,179,179,1)] font-medium leading-none left-[-6px] w-3.5'
                }`}>
                  {marker.time}
                </time>
              )}
              {marker.time === '12' && (
                <div className="absolute z-0 w-3 left-[-5px] py-px -top-4">
                  <Clock className="w-3 h-3 text-white" weight="regular" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
