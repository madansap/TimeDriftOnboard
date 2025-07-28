import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { TimezoneWidget } from '@/components/TimezoneWidget';
import { CalendarWidget } from '@/components/CalendarWidget';
import { TimelineBar } from '@/components/TimelineBar';
import { StatusIndicators } from '@/components/StatusIndicators';

const Index = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleCalendarToggle = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };
  return (
    <div className="justify-center items-stretch flex flex-col overflow-hidden">
      <div className="flex flex-col relative min-h-[900px] w-full overflow-hidden max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/7f20138b6d9e5f652437093fd7b8e0f5f87e5158?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Background"
        />
        
        <div className="relative z-10 w-full max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {/* Left Sidebar */}
            <aside className="w-[19%] max-md:w-full max-md:ml-0">
              <div className="relative min-h-[900px] grow pt-[72px] px-5">
                <section className="min-w-[300px] justify-center items-stretch shadow-[0_-1px_1px_0_color(display-p3_1_1_1_/_0.10)_inset,0_1px_1px_0_color(display-p3_1_1_1_/_0.25)_inset,0_8px_6px_0_color(display-p3_0_0_0_/_0.05)] backdrop-blur-[10px] bg-[color(display-p3_0.0667_0.0667_0.0667)] flex w-full max-w-[300px] flex-col p-3 rounded-2xl">
                  <header className="flex w-full items-center gap-[40px_84px] whitespace-nowrap justify-between pb-1">
                    <h2 className="self-stretch text-[15px] text-[#b3b3b3] font-medium leading-loose my-auto">
                      Timezones
                    </h2>
                    <button className="self-stretch text-[13px] text-white font-bold text-center leading-loose my-auto">
                      <div className="items-center border border-[color(display-p3_0.1255_0.1255_0.1255)] bg-[color(display-p3_0.0941_0.0941_0.0941)] flex min-h-8 gap-2 pl-[9px] pr-[13px] py-1.5 rounded-xl border-solid hover:bg-[color(display-p3_0.1255_0.1255_0.1255)] transition-colors">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/bd958980b34abfca6d0f57105f671de39a253e68?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                          alt="Timezone icon"
                        />
                        <span>Timezone</span>
                      </div>
                    </button>
                  </header>
                  
                  <div className="space-y-2">
                    <TimezoneWidget timezone="UTC (Local)" time="02:00" period="PM" />
                    <TimezoneWidget timezone="UTC (Local)" time="02:00" period="PM" />
                    <TimezoneWidget timezone="UTC (Local)" time="02:00" period="PM" />
                    <TimezoneWidget timezone="UTC (Local)" time="02:00" period="PM" />
                  </div>
                </section>
              </div>
            </aside>

            {/* Main Content */}
            <main className="w-[81%] ml-5 max-md:w-full max-md:ml-0">
              <div className="relative flex w-full flex-col items-stretch max-md:max-w-full">
                <Header onCalendarToggle={handleCalendarToggle} />
                
                {/* Calendar Dropdown */}
                {isCalendarOpen && (
                  <div className="absolute top-16 right-6 z-50">
                    <CalendarWidget />
                  </div>
                )}
                
                <div className="z-10 w-[637px] max-w-full -mt-20">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    <div className="w-1/5 max-md:w-full max-md:ml-0">
                      <div className="bg-[rgba(53,249,47,1)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] flex w-[88px] shrink-0 h-8 mt-[768px] mx-auto rounded-full max-md:mt-10" />
                    </div>
                    
                    <div className="w-4/5 ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex min-h-[898px] grow flex-col items-stretch justify-center pt-[72px] pb-56 px-4 max-md:mt-10 max-md:pb-[100px]">
                        {/* Calendar removed from here since it's now a dropdown */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Timeline Bar */}
        <footer className="relative w-full max-md:max-w-full">
          <TimelineBar />
          
          <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap px-5 max-md:max-w-full">
            <div className="self-stretch flex min-w-60 min-h-10 items-center gap-4 text-[11px] text-[rgba(179,179,179,1)] font-medium uppercase tracking-[0.6px] leading-none my-auto">
              <time className="self-stretch w-[137px] my-auto">
                Sunday, July 27, 2025
              </time>
              <div className="self-stretch my-auto">
                Day 208 • Week 31
              </div>
            </div>
            
            <StatusIndicators />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
