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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 w-full">
      {/* Header with timezone name and copy icon */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white text-sm font-medium">{timezone}</h3>
        {!isLocal && (
          <button className="text-[#666] hover:text-white transition-colors">
            <Copy className="w-4 h-4" weight="regular" />
          </button>
        )}
      </div>

      {/* GMT Offset for non-local timezones */}
      {gmtOffset && (
        <div className="text-xs text-[#666] mb-2">{gmtOffset}</div>
      )}

      {/* Time display */}
      <div className="flex items-baseline justify-between mb-3">
        <div className="flex items-baseline gap-2">
          <time className="text-2xl font-bold text-white">
            {time}
          </time>
          <span className="text-sm text-[#666] font-medium">
            {period}
          </span>
          {timeDiff && (
            <span className="text-xs text-red-500 font-medium ml-2">
              {timeDiff}
            </span>
          )}
        </div>
        {date && (
          <span className="text-xs text-[#666]">{date}</span>
        )}
      </div>

      {/* Time slider */}
      <TimeSlider />
    </div>
  );
};
