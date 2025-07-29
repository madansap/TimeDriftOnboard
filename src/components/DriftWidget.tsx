import React from 'react';
import { X, CirclesFour, Flower, CheckCircle, User } from '@phosphor-icons/react';

// Localhost assets from Figma MCP
const imgProperty1Default = "http://localhost:3845/assets/f9b270eec889de8765065243772fb169313a7782.png";
const imgThemesCard = "http://localhost:3845/assets/aab6d09285b3cf90a03a9ba93e6d1e669a21c44d.png";
const imgThemesCard1 = "http://localhost:3845/assets/4bd12bfa673403dbbd76a136f16d1a108cd9b649.png";
const imgThemesCard2 = "http://localhost:3845/assets/78439b1fe2b32f324619ef59dc61de7d4abc7868.png";

interface ThemesCardProps {
  backgroundImage?: string;
  title: string;
  isSelected?: boolean;
}

function ThemesCard({ backgroundImage, title, isSelected = false }: ThemesCardProps) {
  return (
    <div
      className="relative w-full h-[85px] rounded-[10px] overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className={`absolute inset-0 border-2 ${isSelected ? 'border-[#4d4d4d]' : 'border-[#202020]'} rounded-[10px] pointer-events-none`} />
      <div className="absolute inset-0 flex items-start justify-between p-2">
        <div className="text-white text-[13px] font-semibold">
          {title}
        </div>
        {isSelected && (
          <div className="text-white">
            <CheckCircle className="w-4 h-4" weight="regular" />
          </div>
        )}
      </div>
    </div>
  );
}

export const DriftWidget: React.FC = () => {
  const handleClose = () => {
    console.log('Close drift widget');
  };

  const handleSignIn = () => {
    console.log('Sign in clicked');
  };

  return (
    <div className="flex items-center justify-center p-3 w-full h-full">
      <div className="bg-[#111111] flex flex-col gap-9 h-full w-full max-w-md p-4 rounded-2xl relative">
        <div className="absolute inset-0 border border-[#202020] rounded-2xl shadow-[-64px_0px_148px_0px_#000000]" />
        
        {/* Header */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-white text-[18px] font-semibold tracking-[0.36px]">
              Choose Your Drift
            </h2>
            <button onClick={handleClose} className="text-white hover:text-gray-300">
              <X className="w-6 h-6" weight="regular" />
            </button>
          </div>
          <p className="text-[#b3b3b3] text-[13px] font-medium tracking-[-0.13px]">
            Select a mood or craft your own.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-9 flex-1">
          
          {/* Layouts Section */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-white text-[16px] font-medium">
                Layouts
              </h3>
              <span className="text-[#747474] text-[12px] font-normal tracking-[-0.24px]">
                Press space to toggle
              </span>
            </div>
            
            {/* Layout Toggle */}
            <div className="bg-[#181818] flex h-12 p-1 rounded-lg w-full">
              <div className="bg-[rgba(17,17,17,0.8)] flex items-center justify-center gap-2 flex-1 px-4 py-2 rounded-md relative">
                <div className="absolute inset-0 border border-[#202020] rounded-md pointer-events-none" />
                <CirclesFour className="w-4 h-4 text-[#e5aa4f]" weight="regular" />
                <span className="text-[#e5aa4f] text-[13px] font-semibold">
                  Standard
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 flex-1 px-4 py-2 rounded-[10px]">
                <Flower className="w-4 h-4 text-[#b3b3b3]" weight="regular" />
                <span className="text-[#b3b3b3] text-[13px] font-semibold">
                  Zen Mode
                </span>
              </div>
            </div>
          </div>

          {/* Drift Seasons Section */}
          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-white text-[16px] font-medium">
              Drift Seasons
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <ThemesCard 
                backgroundImage={imgProperty1Default}
                title="Zenith"
                isSelected={false}
              />
              <ThemesCard 
                backgroundImage={imgThemesCard}
                title="Aqua"
                isSelected={false}
              />
              <ThemesCard 
                backgroundImage={imgThemesCard1}
                title="Dune"
                isSelected={false}
              />
              <ThemesCard 
                backgroundImage={imgThemesCard2}
                title="Dark"
                isSelected={true}
              />
            </div>
          </div>

          {/* Personal Drifts Section */}
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-white text-[16px] font-medium">
                Personal Drifts
              </h3>
              <span className="text-[#747474] text-[12px] font-normal tracking-[-0.24px]">
                For logged in users only
              </span>
            </div>
            
            {/* Sign In Card */}
            <div className="relative h-[97px] w-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#002773] to-[#000000]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                <p className="text-white text-[16px] font-medium text-center">
                  Sign in to unlock your personal drifts
                </p>
                <button
                  onClick={handleSignIn}
                  className="flex items-center gap-2 px-6 py-2 rounded-[499px] bg-[rgba(17,17,17,0.6)] backdrop-blur-[4.6px] border border-[rgba(222,216,185,0.7)]"
                >
                  <User className="w-4 h-4 text-white" weight="regular" />
                  <span className="text-white text-[13px] font-medium tracking-[-0.13px]">
                    Signin
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 