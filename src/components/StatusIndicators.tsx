import React from 'react';
import { CheckCircle, Monitor, Clock, Calendar, Info } from '@phosphor-icons/react';

export const StatusIndicators: React.FC = () => {
  return (
    <div className="self-stretch flex min-w-60 items-stretch gap-2 text-[rgba(116,116,116,1)] flex-wrap my-auto max-md:max-w-full">
      <div className="flex items-stretch gap-1.5 text-[10px] font-bold grow shrink basis-auto">
        <div className="flex min-h-7 items-center text-green-400 uppercase leading-loose justify-center rounded-lg">
          <div className="self-stretch flex items-center gap-1 my-auto px-1">
              <CheckCircle className="w-3 h-3 text-green-400" weight="regular" />
            <span>Normal Mode</span>
          </div>
        </div>
        
        <div className="text-base font-medium whitespace-nowrap my-auto">•</div>
        
        <div className="flex min-h-7 items-center text-white leading-loose justify-center rounded-lg">
          <div className="self-stretch flex items-center gap-1 my-auto px-1">
              <Monitor className="w-3 h-3 text-white" weight="regular" />
            <span>30 FPS</span>
          </div>
        </div>
        
        <div className="text-base font-medium whitespace-nowrap my-auto">•</div>
        
        <button className="border flex min-h-7 items-center text-white text-center uppercase leading-loose justify-center px-[9px] py-[7px] rounded-lg border-[rgba(51,51,51,1)] border-solid hover:bg-[rgba(51,51,51,0.2)] transition-colors">
          <div className="self-stretch flex items-center gap-1 my-auto px-1">
            <Clock className="w-3 h-3 text-white" weight="regular" />
            <span>12 Hour</span>
          </div>
        </button>
      </div>
      
      <div className="flex items-stretch gap-1 text-base font-medium">
        <div className="whitespace-nowrap my-auto">•</div>
        
        <button className="border flex min-h-7 items-center text-[10px] text-white font-bold text-center uppercase leading-loose justify-center px-[9px] py-[7px] rounded-lg border-[rgba(51,51,51,1)] border-solid hover:bg-[rgba(51,51,51,0.2)] transition-colors">
          <div className="self-stretch flex items-center gap-1 my-auto">
            <Calendar className="w-3 h-3 text-white" weight="regular" />
            <span>Full Day</span>
          </div>
        </button>
        
        <div className="whitespace-nowrap my-auto">•</div>
        
        <button className="flex min-h-7 items-center text-[10px] text-white font-bold whitespace-nowrap uppercase leading-loose justify-center px-2 py-[7px] rounded-lg hover:bg-[rgba(51,51,51,0.2)] transition-colors">
          <div className="self-stretch flex items-center gap-1 my-auto px-1">
            <Info className="w-3 h-3 text-white" weight="regular" />
            <span>About</span>
          </div>
        </button>
      </div>
    </div>
  );
};
