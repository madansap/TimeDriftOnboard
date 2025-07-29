import React from 'react';
import { X, CirclesFour, Flower, CheckCircle, User } from '@phosphor-icons/react';

// Localhost assets from Figma MCP
const imgProperty1Default = "http://localhost:3845/assets/f9b270eec889de8765065243772fb169313a7782.png";
const imgThemesCard = "http://localhost:3845/assets/aab6d09285b3cf90a03a9ba93e6d1e669a21c44d.png";
const imgThemesCard1 = "http://localhost:3845/assets/4bd12bfa673403dbbd76a136f16d1a108cd9b649.png";
const imgThemesCard2 = "http://localhost:3845/assets/78439b1fe2b32f324619ef59dc61de7d4abc7868.png";
const imgNoise = "http://localhost:3845/assets/375dddfa59b6cc3a7f36b4deee9305cf2204d21b.png";
const imgNoise2 = "http://localhost:3845/assets/a89371bdbeeddef0de62a70d831753618f1a37be.png";
const imgCheckCircle = "http://localhost:3845/assets/bbbbb81ef64f93b64c39206bdb796d98342fe6a3.svg";
const imgX = "http://localhost:3845/assets/8a8d51c74d671d37d598ac5ae987066598109e5f.svg";
const imgCirclesFour = "http://localhost:3845/assets/a9da12dd791efb21875718f0c1ee6d0d27ebbe9e.svg";
const imgFlower = "http://localhost:3845/assets/6ac28c307a913dba0586787e74bcbb661293ad1c.svg";
const img = "http://localhost:3845/assets/38114cbe2f6809e6cd53a6ca53576cd2dc233581.svg";
const imgTimedrift = "http://localhost:3845/assets/a0759ea0117dfb671093a2a629f798fb6b81ec31.svg";
const imgNoise1 = "http://localhost:3845/assets/9e0dac5fa07936fa14fddbc2a8d1c25e5121792d.svg";
const imgEllipse21493 = "http://localhost:3845/assets/f57d8489bbcfdda75f379e7caab8168386273f82.svg";
const imgEllipse21494 = "http://localhost:3845/assets/c3a0c8b6d72ae98aa2ff5d5d3c048c9cda0f9e80.svg";
const imgEllipse21495 = "http://localhost:3845/assets/47895319448d997a99b5db900a513a8caec94f83.svg";
const imgLine1 = "http://localhost:3845/assets/3e3b7a440a2aab3e0e8414cf44b2b1e0a0670ac1.svg";
const imgLine2 = "http://localhost:3845/assets/43dbba9f6cda73482eae468daf2ca9714e8589b8.svg";
const imgLine3 = "http://localhost:3845/assets/d6f952e10d7016daacba51b3c74b9d793e03669c.svg";
const img2 = "http://localhost:3845/assets/fa12eb7b89dda3c4f5fdd0d8a4a213793bec20a1.svg";
const img1 = "http://localhost:3845/assets/11351e54e73dc2ce2fc383387034072351550dea.svg";
const img3 = "http://localhost:3845/assets/c26550a38f91bb9849ae06fcf37451e2a9a0492d.svg";
const img4 = "http://localhost:3845/assets/ac19bac6c9c96b0dadee8567e551859102aee8a4.svg";
const img5 = "http://localhost:3845/assets/971cb19df29c57bcba947934b081a288bab8ac9a.svg";
const img6 = "http://localhost:3845/assets/971cb19df29c57bcba947934b081a288bab8ac9a.svg";
const imgShine = "http://localhost:3845/assets/47e66713bef30df2596e1f876578961ff6968079.svg";
const imgPlanets = "http://localhost:3845/assets/f1b41ceefc936c5c0fb7b15401f56063316db2a2.svg";
const imgUser = "http://localhost:3845/assets/67ccdc025467aa357ee0cd9d858bd412ec8d24b6.svg";

interface ThemesCardProps {
  property1?: "Selected" | "Default" | "Plain" | "PlainSelected" | "Hover" | "Plain Hover";
  backgroundImage?: string;
  title: string;
  isSelected?: boolean;
}

function ThemesCard({ property1 = "Default", backgroundImage, title, isSelected = false }: ThemesCardProps) {
  return (
    <div
      className="[background-size:auto,_cover] bg-[position:0%_0%,_50%_50%] box-border content-stretch flex flex-row gap-2.5 items-center justify-end p-[8px] relative rounded-[10px] size-full"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className={`absolute border ${isSelected ? 'border-[#4d4d4d]' : 'border-[#202020]'} border-solid inset-[-0.5px] pointer-events-none rounded-[10.5px]`} />
      <div className="basis-0 box-border content-stretch flex flex-row grow h-full items-start justify-between min-h-px min-w-px p-0 relative shrink-0">
        <div className="font-['SF_Pro_Display:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">{title}</p>
        </div>
        <div className={`box-border content-stretch flex flex-col gap-2.5 items-end justify-start p-0 relative shrink-0 ${isSelected ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative shrink-0 size-4">
            <CheckCircle className="w-4 h-4 text-white" weight="regular" />
          </div>
        </div>
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
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[12px] relative size-full">
      <div className="bg-[#111111] box-border content-stretch flex flex-col gap-9 h-full items-start justify-center p-[16px] relative rounded-2xl shrink-0">
        <div className="absolute border border-[#202020] border-solid inset-0 pointer-events-none rounded-2xl shadow-[-64px_0px_148px_0px_#000000]" />
        
        {/* Header */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
            <div className="font-['SF_Pro_Display:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap tracking-[0.36px]">
              <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                Choose Your Drift
              </p>
            </div>
            <button onClick={handleClose} className="relative shrink-0 size-6">
              <X className="w-6 h-6 text-white" weight="regular" />
            </button>
          </div>
          <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#b3b3b3] text-[13px] text-left tracking-[-0.13px] w-full">
            <p className="block leading-[normal]">
              Select a mood or craft your own.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="basis-0 box-border content-stretch flex flex-col gap-9 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
          
          {/* Layouts Section */}
          <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-row items-start justify-between leading-[0] not-italic pl-0 pr-1 py-0 relative shrink-0 text-left text-nowrap w-full">
                <div className="font-['SF_Pro_Display:Medium',_sans-serif] relative shrink-0 text-[#ffffff] text-[16px]">
                  <p className="block leading-[normal] text-nowrap whitespace-pre">
                    Layouts
                  </p>
                </div>
                <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[#747474] text-[12px] tracking-[-0.24px]">
                  <p className="adjustLetterSpacing block leading-[18px] text-nowrap whitespace-pre">
                    Press space to toggle
                  </p>
                </div>
              </div>
              
              {/* Layout Toggle */}
              <div className="bg-[#181818] box-border content-stretch flex flex-row h-12 items-start justify-start p-[4px] relative rounded-lg shrink-0 w-full">
                <div className="basis-0 bg-[rgba(17,17,17,0.8)] box-border content-stretch flex flex-row gap-2 grow h-full items-center justify-center min-h-px min-w-px px-4 py-2 relative rounded-md shrink-0">
                  <div className="absolute border border-[#202020] border-solid inset-0 pointer-events-none rounded-md" />
                  <div className="relative shrink-0 size-4">
                    <CirclesFour className="w-4 h-4 text-[#e5aa4f]" weight="regular" />
                  </div>
                  <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0">
                    <div className="font-['SF_Pro_Display:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#e5aa4f] text-[13px] text-left text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">
                        Standard
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-full items-center justify-center min-h-px min-w-px px-4 py-2 relative rounded-[10px] shrink-0">
                  <div className="relative shrink-0 size-4">
                    <Flower className="w-4 h-4 text-[#b3b3b3]" weight="regular" />
                  </div>
                  <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0">
                    <div className="font-['SF_Pro_Display:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#b3b3b3] text-[13px] text-left text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">
                        Zen Mode
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Drift Seasons Section */}
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
              <p className="block leading-[normal] whitespace-pre">
                Drift Seasons
              </p>
            </div>
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
                <div className="basis-0 grow h-[85px]">
                  <ThemesCard 
                    property1="Default" 
                    backgroundImage={imgProperty1Default}
                    title="Zenith"
                    isSelected={false}
                  />
                </div>
                <div className="basis-0 grow h-[85px]">
                  <ThemesCard 
                    property1="Default" 
                    backgroundImage={imgThemesCard}
                    title="Aqua"
                    isSelected={false}
                  />
                </div>
              </div>
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
                <div className="basis-0 grow h-[85px]">
                  <ThemesCard 
                    property1="Default" 
                    backgroundImage={imgThemesCard1}
                    title="Dune"
                    isSelected={false}
                  />
                </div>
                <button className="basis-0 grow h-[85px]">
                  <ThemesCard 
                    property1="Selected" 
                    backgroundImage={imgThemesCard2}
                    title="Dark"
                    isSelected={true}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Personal Drifts Section */}
          <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pl-0 pr-1 py-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-row h-3 items-center justify-between leading-[0] not-italic p-0 relative shrink-0 text-left w-full">
                <div className="basis-0 font-['SF_Pro_Display:Medium',_sans-serif] grow min-h-px min-w-px relative shrink-0 text-[#ffffff] text-[16px]">
                  <p className="block leading-[normal]">Personal Drifts</p>
                </div>
                <div className="font-['SF_Pro_Display:Regular',_sans-serif] relative shrink-0 text-[#747474] text-[12px] text-nowrap tracking-[-0.24px]">
                  <p className="adjustLetterSpacing block leading-[18px] whitespace-pre">
                    For logged in users only
                  </p>
                </div>
              </div>
            </div>
            
            {/* Timedrift Card */}
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="[grid-area:1_/_1] bg-gradient-to-b from-[#002773] h-[97.342px] ml-0 mt-0 rounded-xl to-[#000000] w-[355px]" />
              <div
                className="[grid-area:1_/_1] bg-clip-text font-['SF_Pro_Display:Semibold',_sans-serif] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-30.446px_-41.718px] mask-size-[355px_97.342px] ml-[30.446px] mt-[41.718px] not-italic opacity-[0.08] relative text-[73.463px] text-left text-nowrap tracking-[-0.7346px]"
                style={{
                  WebkitTextFillColor: "transparent",
                  maskImage: `url('${imgTimedrift}')`,
                }}
              >
                <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                  Timedrift
                </p>
              </div>
              
              {/* Complex layered elements would go here - simplified for now */}
              <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-3 items-center justify-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-54px_-25px] mask-size-[355px_97.342px] ml-[54px] mt-[25px] p-0 relative"
                style={{ maskImage: `url('${imgTimedrift}')` }}>
                <div className="bg-clip-text font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap"
                  style={{ WebkitTextFillColor: "transparent" }}>
                  <p className="block leading-[normal] whitespace-pre">
                    Sign in to unlock your personal drifts
                  </p>
                </div>
                <button
                  onClick={handleSignIn}
                  className="backdrop-blur-[4.6px] backdrop-filter bg-[rgba(17,17,17,0.6)] box-border content-stretch flex flex-row gap-3 items-center justify-center px-6 py-2 relative rounded-[499px] shrink-0">
                  <div className="absolute border-[0.5px] border-[rgba(222,216,185,0.7)] border-solid inset-0 pointer-events-none rounded-[499px]" />
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
                    <div className="relative shrink-0 size-4">
                      <User className="w-4 h-4 text-white" weight="regular" />
                    </div>
                    <div className="bg-clip-text font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-left text-nowrap tracking-[-0.13px]"
                      style={{ WebkitTextFillColor: "transparent" }}>
                      <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                        Signin
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 