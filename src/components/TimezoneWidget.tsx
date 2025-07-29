import React from 'react';
import { TimeSlider } from './TimeSlider';
import { Copy } from '@phosphor-icons/react';

interface TimezoneWidgetProps {
  timezone: string;
  time: string;
  period: string;
  isLocal?: boolean;
  gmtOffset?: string;
  timeDiff?: string;
  date?: string;
}

export const TimezoneWidget: React.FC<TimezoneWidgetProps> = ({ 
  timezone = "UTC (Local)", 
  time = "02:00", 
  period = "PM",
  isLocal = false,
  gmtOffset,
  timeDiff,
  date
}) => {
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-2 sm:p-3 lg:p-4 w-full min-w-0">
      {/* Header with timezone name and copy icon */}
      <div className="flex items-center justify-between mb-1.5 sm:mb-2 lg:mb-3">
        <h3 className="text-white text-xs sm:text-sm lg:text-base font-medium truncate pr-1 sm:pr-2">
          {timezone}
        </h3>
        {!isLocal && (
          <button className="text-[#666] hover:text-white transition-colors flex-shrink-0">
            <Copy className="w-3 h-3 sm:w-4 sm:h-4" weight="regular" />
          </button>
        )}
      </div>

      {/* GMT Offset for non-local timezones */}
      {gmtOffset && (
        <div className="text-xs text-[#666] mb-1 sm:mb-2">{gmtOffset}</div>
      )}

      {/* Time display */}
      <div className="flex items-baseline justify-between mb-1.5 sm:mb-2 lg:mb-3 gap-1 sm:gap-2">
        <div className="flex items-baseline gap-1 sm:gap-2 min-w-0 flex-1">
          <time className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white truncate">
            {time}
          </time>
          <span className="text-xs sm:text-sm text-[#666] font-medium flex-shrink-0">
            {period}
          </span>
          {timeDiff && (
            <span className="text-xs text-red-500 font-medium ml-1 sm:ml-2 flex-shrink-0">
              {timeDiff}
            </span>
          )}
        </div>
        {date && (
          <span className="text-xs text-[#666] flex-shrink-0">{date}</span>
        )}
      </div>

      {/* Time slider */}
      <div className="w-full">
        <TimeSlider />
      </div>
    </div>
  );
};
