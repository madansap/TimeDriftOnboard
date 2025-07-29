import React from 'react';
import { X, CirclesFour, Flower, CheckCircle, User } from '@phosphor-icons/react';

// Localhost assets from Figma MCP
const imgProperty1Default = "http://localhost:3845/assets/f9b270eec889de8765065243772fb169313a7782.png";
const imgThemesCard = "http://localhost:3845/assets/aab6d09285b3cf90a03a9ba93e6d1e669a21c44d.png";
const imgThemesCard1 = "http://localhost:3845/assets/4bd12bfa673403dbbd76a136f16d1a108cd9b649.png";
const imgThemesCard2 = "http://localhost:3845/assets/78439b1fe2b32f324619ef59dc61de7d4abc7868.png";

interface ThemesCardProps {
  property1?: "Selected" | "Default" | "Plain" | "PlainSelected" | "Hover" | "Plain Hover";
  backgroundImage?: string;
  title: string;
  isSelected?: boolean;
}

function ThemesCard({ property1 = "Default", backgroundImage, title, isSelected = false }: ThemesCardProps) {
  return (
    <div
      className="relative w-full h-[85px] rounded-lg overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className={`absolute inset-0 border rounded-lg ${isSelected ? 'border-white/40' : 'border-white/10'}`} />
      <div className="relative h-full p-3 flex items-start justify-between">
        <div className="text-white text-sm font-semibold">
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end">
      <div className="bg-[#111111] border-l border-[#202020] shadow-2xl w-full max-w-sm h-full overflow-y-auto animate-slide-in-right">
        <div className="p-4 flex flex-col gap-6 h-full">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className="text-white text-lg font-semibold">
                Choose Your Drift
              </h2>
              <button onClick={handleClose} className="text-white hover:text-gray-300 transition-colors">
                <X className="w-6 h-6" weight="regular" />
              </button>
            </div>
            <p className="text-[#b3b3b3] text-sm">
              Select a mood or craft your own.
            </p>
          </div>

          {/* Layouts Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-base font-medium">Layouts</h3>
              <span className="text-[#747474] text-xs">Press space to toggle</span>
            </div>
            
            {/* Layout Toggle */}
            <div className="bg-[#181818] rounded-lg p-1 flex">
              <div className="flex-1 bg-[#111111] border border-[#202020] rounded-md p-3 flex items-center justify-center gap-2">
                <CirclesFour className="w-4 h-4 text-[#e5aa4f]" weight="regular" />
                <span className="text-[#e5aa4f] text-sm font-semibold">Standard</span>
              </div>
              <div className="flex-1 p-3 flex items-center justify-center gap-2">
                <Flower className="w-4 h-4 text-[#b3b3b3]" weight="regular" />
                <span className="text-[#b3b3b3] text-sm font-semibold">Zen Mode</span>
              </div>
            </div>
          </div>

          {/* Drift Seasons Section */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-base font-medium">Drift Seasons</h3>
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
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-base font-medium">Personal Drifts</h3>
              <span className="text-[#747474] text-xs">For logged in users only</span>
            </div>
            
            {/* Timedrift Card */}
            <div className="relative bg-gradient-to-b from-[#4a3c0e] to-[#1a1a1a] rounded-xl h-24 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/20 to-transparent" />
              <div className="relative h-full flex flex-col items-center justify-center gap-2 p-4">
                <p className="text-white text-sm text-center">
                  Sign in to unlock your personal drifts
                </p>
                <button
                  onClick={handleSignIn}
                  className="bg-black/40 backdrop-blur border border-yellow-600/30 rounded-full px-4 py-1.5 flex items-center gap-2 hover:bg-black/60 transition-colors">
                  <User className="w-4 h-4 text-white" weight="regular" />
                  <span className="text-white text-sm font-medium">Signin</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};