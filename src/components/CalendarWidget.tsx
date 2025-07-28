import React from 'react';

export const CalendarWidget: React.FC = () => {
  const handleConnectCalendar = () => {
    // Handle calendar connection logic
    console.log('Connecting to Google Calendar...');
  };

  return (
    <div className="justify-center items-stretch shadow-[0_-1px_1px_0_color(display-p3_1_1_1_/_0.10)_inset,0_1px_1px_0_color(display-p3_1_1_1_/_0.25)_inset,0_8px_6px_0_color(display-p3_0_0_0_/_0.05)] backdrop-blur-[10px] bg-[color(display-p3_0.0667_0.0667_0.0667)] flex max-w-full w-80 flex-col flex-1 p-3 rounded-2xl">
      <div className="w-full flex-1">
        <header className="w-full text-base text-white font-medium whitespace-nowrap pb-6">
          <div className="flex w-full items-center gap-2">
            <img
              src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/fbda976862459b931d95d5d0eab34e90289c86b5?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              alt="Calendar icon"
            />
            <h2>Calendar</h2>
          </div>
        </header>
        
        <main className="flex w-full flex-col items-center py-12">
          <div className="self-stretch flex min-h-20 w-full flex-col items-center pb-4 px-[116px] max-md:px-5">
            <div className="justify-center items-center bg-[color(display-p3_0.0941_0.0941_0.0941)] flex min-h-16 w-16 h-16 rounded-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/6c43296bae4df7d0e4287ba2b6e4e496c6191623?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-8 self-stretch my-auto"
                alt="Calendar connection icon"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center font-medium text-center">
            <h3 className="text-[15px] text-white leading-loose pb-2">
              No Calendar Connected
            </h3>
            <p className="text-[11px] text-[#b3b3b3] leading-[19px] mt-2 pb-px px-2">
              Connect your Google Calendar to see upcoming events
              <br />
              and never miss important meetings.
            </p>
          </div>
          
          <div className="text-[13px] text-white font-medium text-center leading-loose pt-4">
            <button
              onClick={handleConnectCalendar}
              className="justify-center items-center border border-[color(display-p3_0.1255_0.1255_0.1255)] bg-[color(display-p3_0.0941_0.0941_0.0941)] flex px-[17px] py-[11px] rounded-lg border-solid hover:bg-[color(display-p3_0.1255_0.1255_0.1255)] transition-colors"
            >
              <div className="self-stretch flex items-center gap-2 my-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/f7c014a860a8bd970c89476b88611a3fc3a90b74?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  alt="Google Calendar icon"
                />
                <span>Connect Google Calendar</span>
              </div>
            </button>
          </div>
          
          <div className="text-xs text-[#b3b3b3] font-medium text-center leading-loose pt-2">
            <ul className="space-y-2">
              <li>See upcoming meetings</li>
              <li>Time until events</li>
              <li>Read-only access</li>
            </ul>
            <p className="leading-5 pt-2">
              We only read your calendar events. Your data stays
              <br />
              private.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};
