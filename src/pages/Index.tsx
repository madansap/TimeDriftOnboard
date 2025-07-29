import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { TimezoneWidget } from '@/components/TimezoneWidget';
import { CalendarWidget } from '@/components/CalendarWidget';
import { TaskWidget } from '@/components/TaskWidget';
import { DriftWidget } from '@/components/DriftWidget';
import { TimelineBar } from '@/components/TimelineBar';
import { StatusIndicators } from '@/components/StatusIndicators';
import { Plus } from '@phosphor-icons/react';

const Index = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);

  const handleCalendarToggle = () => {
    if (isCalendarOpen) {
      // If calendar is currently open, just close it
      setIsCalendarOpen(false);
    } else {
      // If calendar is closed, open it and close task
      setIsCalendarOpen(true);
      setIsTaskOpen(false);
    }
  };

  const handleTaskToggle = () => {
    if (isTaskOpen) {
      // If task is currently open, just close it
      setIsTaskOpen(false);
    } else {
      // If task is closed, open it and close calendar and music
      setIsTaskOpen(true);
      setIsCalendarOpen(false);
      setIsMusicOpen(false);
    }
  };

  const handleMusicToggle = () => {
    if (isMusicOpen) {
      // If music is currently open, just close it
      setIsMusicOpen(false);
    } else {
      // If music is closed, open it and close calendar and task
      setIsMusicOpen(true);
      setIsCalendarOpen(false);
      setIsTaskOpen(false);
    }
  };
  
  return (
    <div className="h-screen w-full flex flex-col overflow-x-hidden overflow-y-hidden">
      {/* Background Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/7f20138b6d9e5f652437093fd7b8e0f5f87e5158?placeholderIfAbsent=true"
        className="fixed h-full w-full object-cover inset-0 -z-10"
        alt="Background"
      />
      
      {/* Full Width Navbar */}
      <div className="w-full z-20 relative">
        <Header 
          onCalendarToggle={handleCalendarToggle} 
          onTaskToggle={handleTaskToggle}
          onMusicToggle={handleMusicToggle}
          isCalendarOpen={isCalendarOpen} 
          isTaskOpen={isTaskOpen}
          isMusicOpen={isMusicOpen}
        />
        
        {/* Calendar Dropdown - Positioned just below navbar on the right */}
        {isCalendarOpen && (
          <div className="absolute top-full right-0 z-15">
            <div className="px-3 py-2">
              <CalendarWidget />
            </div>
          </div>
        )}

        {/* Task Dropdown - Positioned just below navbar on the right */}
        {isTaskOpen && (
          <div className="absolute top-full right-0 z-15">
            <div className="px-3 py-2">
              <TaskWidget />
            </div>
          </div>
        )}

        {/* Music/Drift Dropdown - Positioned just below navbar on the right */}
        {isMusicOpen && (
          <div className="absolute top-full right-0 z-15">
            <div className="px-3 py-2">
              <DriftWidget />
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex w-full relative z-10 overflow-hidden">
        {/* Left Sidebar - Timezone Card */}
        <aside className="w-[19%] max-md:w-full max-md:ml-0">
          <div className="pt-2 px-5">
            <section className="justify-center items-stretch shadow-[0_-1px_1px_0_color(display-p3_1_1_1_/_0.10)_inset,0_1px_1px_0_color(display-p3_1_1_1_/_0.25)_inset,0_8px_6px_0_color(display-p3_0_0_0_/_0.05)] backdrop-blur-[10px] bg-[color(display-p3_0.0667_0.0667_0.0667)] flex w-full flex-col p-3 rounded-2xl">
              <header className="flex w-full items-center gap-[40px_84px] whitespace-nowrap justify-between pb-1">
                <h2 className="self-stretch text-[15px] text-[#b3b3b3] font-medium leading-loose my-auto">
                  Timezones
                </h2>
                <button className="self-stretch text-[13px] text-white font-bold text-center leading-loose my-auto">
                  <div className="items-center border border-[color(display-p3_0.1255_0.1255_0.1255)] bg-[color(display-p3_0.0941_0.0941_0.0941)] flex min-h-8 gap-2 pl-[9px] pr-[13px] py-1.5 rounded-xl border-solid hover:bg-[color(display-p3_0.1255_0.1255_0.1255)] transition-colors">
                    <Plus className="w-5 h-5 text-white" weight="regular" />
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
        <main className="flex-1 ml-5 max-md:w-full max-md:ml-0">
          <div className="relative flex w-full flex-col items-stretch max-md:max-w-full">
            <div className="z-10 w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-1/5 max-md:w-full max-md:ml-0">
                  <div className="bg-[rgba(53,249,47,1)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] flex w-[88px] shrink-0 h-8 mt-[768px] mx-auto rounded-full max-md:mt-10" />
                </div>
                
                <div className="w-4/5 ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex min-h-[898px] grow flex-col items-stretch justify-center pt-[72px] pb-56 px-4 max-md:mt-10 max-md:pb-[100px]">
                    {/* Main content area */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Timeline Bar - Moved to bottom */}
      <div className="relative w-full max-md:max-w-full">
        <TimelineBar />
        
        <div className="flex w-full items-center gap-4 justify-between flex-wrap px-5 max-md:max-w-full">
          <div className="self-stretch flex min-h-10 items-center gap-4 text-[11px] text-[rgba(179,179,179,1)] font-medium uppercase tracking-[0.6px] leading-none my-auto">
            <time className="self-stretch w-[137px] my-auto">
              Sunday, July 27, 2025
            </time>
            <div className="self-stretch my-auto">
              Day 208 • Week 31
            </div>
          </div>
          
          <StatusIndicators />
        </div>
      </div>
    </div>
  );
};

export default Index;
