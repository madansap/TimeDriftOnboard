import React from 'react';

export const Header: React.FC = () => {
  const handleSignIn = () => {
    console.log('Sign in clicked');
  };

  return (
    <header className="w-full pt-2 pb-8 px-2.5 max-md:max-w-full">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/e0221e1603509b040868fca620ea824dddcf09c8?placeholderIfAbsent=true"
          className="aspect-[3.82] object-contain w-[145px] self-stretch shrink-0 my-auto"
          alt="Application logo"
        />
        
        <nav className="self-stretch flex min-w-60 items-center gap-4 my-auto">
          <div className="self-stretch flex items-center gap-2 my-auto">
            <button className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto">
              <img
                src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/49585cb90d4bb27d90cb35fb01f30ba042f73657?placeholderIfAbsent=true"
                className="w-full h-full"
                alt="Navigation button"
              />
            </button>
            <button className="self-stretch flex flex-col items-stretch justify-center w-10 my-auto">
              <img
                src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/663e9ce3f182b6cd56604d89750a01a237597948?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-10"
                alt="Settings"
              />
            </button>
            <button className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto">
              <img
                src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/acd048122c36fe52a47c9f7d134825a960e279c4?placeholderIfAbsent=true"
                className="w-full h-full"
                alt="Menu"
              />
            </button>
          </div>
          
          <div className="self-stretch flex items-center gap-2 my-auto pl-4">
            <button className="justify-center items-center bg-[color(display-p3_0.0941_0.0941_0.0941)] self-stretch flex min-h-10 flex-col w-10 h-10 my-auto rounded-full hover:bg-[color(display-p3_0.1255_0.1255_0.1255)] transition-colors">
              <img
                src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/aa76d8babd9991607aa941529cc076839b0a6034?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 fill-[color(display-p3_0.4549_0.4549_0.4549)]"
                alt="User menu"
              />
            </button>
            
            <button
              onClick={handleSignIn}
              className="justify-center items-stretch border border-[color(display-p3_0.0941_0.0941_0.0941)] backdrop-blur-[2px] bg-[color(display-p3_0.1255_0.1255_0.1255)] self-stretch flex gap-[9px] text-[13px] text-white font-medium text-center leading-loose w-[101px] my-auto px-[17px] py-2.5 rounded-full border-solid hover:bg-[color(display-p3_0.1569_0.1569_0.1569)] transition-colors"
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/dfda09c097a50a19b7a901550cd1187a11f36706?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[18px] shrink-0"
                alt="Sign in icon"
              />
              <span>Sign In</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
