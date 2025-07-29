import React from 'react';
import { Calendar, List, MusicNote, ChatCircle, SignIn } from '@phosphor-icons/react';

interface HeaderProps {
  onCalendarToggle: () => void;
  onTaskToggle: () => void;
  onMusicToggle: () => void;
  isCalendarOpen?: boolean;
  isTaskOpen?: boolean;
  isMusicOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  onCalendarToggle, 
  onTaskToggle, 
  onMusicToggle,
  isCalendarOpen = false, 
  isTaskOpen = false,
  isMusicOpen = false
}) => {
  const handleSignIn = () => {
    console.log('Sign in clicked');
  };

  return (
    <header className="w-full">
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start pb-6 pt-2 px-3 relative w-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
          {/* Logo */}
          <div className="h-[38.06px] overflow-clip relative shrink-0 w-[145px]">
            <div className="absolute h-[38.06px] left-0 overflow-clip top-0 w-[145px]">
              <div className="absolute h-[38.072px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[145px]">
                <div className="text-white text-xl font-bold">Time Drift</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
            {/* Left Button Group */}
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
              {/* First Button - Calendar */}
              <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-center p-0 relative shrink-0 w-10">
                <button 
                  onClick={onCalendarToggle}
                  className={`relative rounded-[9999px] shrink-0 size-10 transition-colors ${
                    isCalendarOpen 
                      ? 'bg-[#202020] hover:bg-[#252525]' 
                      : 'bg-[#181818] hover:bg-[#202020]'
                  }`}
                >
                  <div className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <Calendar className="w-5 h-5 text-white" weight="regular" />
                  </div>
                </button>
                {/* Green dot indicator - show when calendar is selected */}
                {isCalendarOpen && (
                  <div className="absolute bg-green-500 left-1/2 transform -translate-x-1/2 rounded-[9999px] size-1.5 top-[46px]" />
                )}
              </div>

              {/* Second Button - Task */}
              <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-center p-0 relative shrink-0 w-10">
                <button 
                  onClick={onTaskToggle}
                  className={`h-10 relative rounded-[9999px] shrink-0 w-full transition-colors ${
                    isTaskOpen 
                      ? 'bg-[#202020] hover:bg-[#252525]' 
                      : 'bg-[#181818] hover:bg-[#202020]'
                  }`}
                >
                  <div className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <List className="w-5 h-5 text-white" weight="regular" />
                  </div>
                </button>
                {/* Green dot indicator - show when task is selected */}
                {isTaskOpen && (
                  <div className="absolute bg-green-500 left-1/2 transform -translate-x-1/2 rounded-[9999px] size-1.5 top-[46px]" />
                )}
              </div>

              {/* Third Button - Music */}
              <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-center p-0 relative shrink-0 w-10">
                <button 
                  onClick={onMusicToggle}
                  className={`relative rounded-[9999px] shrink-0 size-10 transition-colors ${
                    isMusicOpen 
                      ? 'bg-[#202020] hover:bg-[#252525]' 
                      : 'bg-[#181818] hover:bg-[#202020]'
                  }`}
                >
                  <div className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <MusicNote className="w-5 h-5 text-white" weight="regular" />
                  </div>
                </button>
                {/* Green dot indicator - show when music is selected */}
                {isMusicOpen && (
                  <div className="absolute bg-green-500 left-1/2 transform -translate-x-1/2 rounded-[9999px] size-1.5 top-[46px]" />
                )}
              </div>
            </div>

            {/* Vertical Border Separator */}
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-4 pr-0 py-0 relative shrink-0">
              <div className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
              
              {/* Dialog Button */}
              <button className="relative shrink-0 size-10 hover:bg-[#202020] rounded-full transition-colors">
                <ChatCircle className="w-5 h-5 text-white" weight="regular" />
              </button>

              {/* Sign In Button */}
              <button
                onClick={handleSignIn}
                className="backdrop-blur-[2px] backdrop-filter bg-[#202020] h-[38px] relative rounded-[9999px] shrink-0 w-[101.23px] hover:bg-[#252525] transition-colors"
              >
                <div className="absolute border border-[#181818] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <div className="absolute left-[17px] size-[18px] top-1/2 translate-y-[-50%]">
                  <SignIn className="w-4 h-4 text-white" weight="regular" />
                </div>
                <div
                  className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-5 justify-center leading-[0] not-italic text-[#ffffff] text-[12.688px] text-center top-[19px] translate-x-[-50%] translate-y-[-50%] w-[41.43px]"
                  style={{ left: "calc(50% + 13.1px)" }}
                >
                  <p className="block leading-[20px]">Sign In</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
