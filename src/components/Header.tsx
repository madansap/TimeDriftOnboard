import React from 'react';

interface HeaderProps {
  onCalendarToggle: () => void;
  isCalendarOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onCalendarToggle, isCalendarOpen = false }) => {
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
                <img
                  alt="Time Drift Logo"
                  className="block max-w-none size-full"
                  src="http://localhost:3845/assets/5b2d9f7da6ae662686a71e1677e7ba6748924f6a.svg"
                />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
            {/* Left Button Group */}
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
              {/* First Button - Calendar */}
              <button 
                onClick={onCalendarToggle}
                className={`relative rounded-[9999px] shrink-0 size-10 transition-colors ${
                  isCalendarOpen 
                    ? 'bg-[#202020] hover:bg-[#252525]' 
                    : 'bg-[#181818] hover:bg-[#202020]'
                }`}
              >
                <div className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <img alt="Calendar button" className="block max-w-none size-full" src="http://localhost:3845/assets/801c9d48ab54807c2002344b0d8e7f137ca530a6.svg" />
                </div>
              </button>

              {/* Second Button with Notification Indicator */}
              <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-center p-0 relative shrink-0 w-10">
                <button className="bg-[#181818] h-10 relative rounded-[9999px] shrink-0 w-full hover:bg-[#202020] transition-colors">
                  <div className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <img
                      alt="Settings button"
                      className="block max-w-none size-full"
                      src="http://localhost:3845/assets/17403234bc9472500d39bbd60712e383e9852d35.svg"
                    />
                  </div>
                </button>
                {/* Notification Indicator */}
                <div className="absolute bg-green-500 left-[-30.77px] rounded-[9999px] size-1.5 top-[46px]" />
              </div>

              {/* Third Button - Music */}
              <button className="bg-[#181818] relative rounded-[9999px] shrink-0 size-10 hover:bg-[#202020] transition-colors">
                <div className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <img alt="Music button" className="block max-w-none size-full" src="http://localhost:3845/assets/66a1a597d2925649177045d1f238ee4962c8a4c7.svg" />
                </div>
              </button>
            </div>

            {/* Vertical Border Separator */}
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-4 pr-0 py-0 relative shrink-0">
              <div className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
              
              {/* Dialog Button */}
              <button className="relative shrink-0 size-10 hover:bg-[#202020] rounded-full transition-colors">
                <img
                  alt="Dialog button"
                  className="block max-w-none size-full"
                  src="http://localhost:3845/assets/b8397b36113b9c397e75422fa15ea040c64ef2ab.svg"
                />
              </button>

              {/* Sign In Button */}
              <button
                onClick={handleSignIn}
                className="backdrop-blur-[2px] backdrop-filter bg-[#202020] h-[38px] relative rounded-[9999px] shrink-0 w-[101.23px] hover:bg-[#252525] transition-colors"
              >
                <div className="absolute border border-[#181818] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <div className="absolute left-[17px] size-[18px] top-1/2 translate-y-[-50%]">
                  <img alt="Sign in icon" className="block max-w-none size-full" src="http://localhost:3845/assets/fd83e02621c956fa535b000a1dd9598e45fa8369.svg" />
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
