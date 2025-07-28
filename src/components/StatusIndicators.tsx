import React from 'react';

export const StatusIndicators: React.FC = () => {
  return (
    <div className="self-stretch flex min-w-60 items-stretch gap-2 text-[rgba(116,116,116,1)] flex-wrap w-[481px] my-auto max-md:max-w-full">
      <div className="flex items-stretch gap-1.5 text-[10px] font-bold grow shrink basis-auto">
        <div className="flex min-h-7 items-center text-green-400 uppercase leading-loose justify-center rounded-lg">
          <div className="self-stretch flex items-center gap-1 my-auto px-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/08c4f53d4ac2dffc045dca880bd0405bb7307f23?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              alt="Normal mode indicator"
            />
            <span>Normal Mode</span>
          </div>
        </div>
        
        <div className="text-base font-medium whitespace-nowrap my-auto">•</div>
        
        <div className="flex min-h-7 items-center text-white leading-loose justify-center rounded-lg">
          <div className="self-stretch flex items-center gap-1 my-auto px-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/8666eec0abd9b274169f56857eff7f1645593a20?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              alt="FPS indicator"
            />
            <span>30 FPS</span>
          </div>
        </div>
        
        <div className="text-base font-medium whitespace-nowrap my-auto">•</div>
        
        <button className="border flex min-h-7 items-center text-white text-center uppercase leading-loose justify-center px-[9px] py-[7px] rounded-lg border-[rgba(51,51,51,1)] border-solid hover:bg-[rgba(51,51,51,0.2)] transition-colors">
          <div className="self-stretch flex items-center gap-1 my-auto px-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/3e7b0c251d4f391e6f87e65aee74ba30344ff304?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              alt="12 hour format"
            />
            <span>12 Hour</span>
          </div>
        </button>
      </div>
      
      <div className="flex items-stretch gap-1 text-base font-medium">
        <div className="whitespace-nowrap my-auto">•</div>
        
        <button className="border flex min-h-7 items-center text-[10px] text-white font-bold text-center uppercase leading-loose justify-center px-[9px] py-[7px] rounded-lg border-[rgba(51,51,51,1)] border-solid hover:bg-[rgba(51,51,51,0.2)] transition-colors">
          <div className="self-stretch flex items-center gap-1 my-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/cffed1f77ff696de29a37635dfc8c87c42048ab3?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              alt="Full day view"
            />
            <span>Full Day</span>
          </div>
        </button>
        
        <div className="whitespace-nowrap my-auto">•</div>
        
        <button className="flex min-h-7 items-center text-[10px] text-white font-bold whitespace-nowrap uppercase leading-loose justify-center px-2 py-[7px] rounded-lg hover:bg-[rgba(51,51,51,0.2)] transition-colors">
          <div className="self-stretch flex items-center gap-1 my-auto px-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/9c5c346051169610ebc35710033cf73208f613e9?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              alt="About"
            />
            <span>About</span>
          </div>
        </button>
      </div>
    </div>
  );
};
