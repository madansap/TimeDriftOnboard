import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { TimezoneWidget } from '@/components/TimezoneWidget';
import { CalendarWidget } from '@/components/CalendarWidget';
import { TaskWidget } from '@/components/TaskWidget';
import { DriftWidget } from '@/components/DriftWidget';
import { TimelineBar } from '@/components/TimelineBar';
import { StatusIndicators } from '@/components/StatusIndicators';
import { Onboarding } from '@/components/Onboarding';
import { Plus } from '@phosphor-icons/react';

const Index = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(true);
  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);

  // Optional: Auto-trigger Zen Mode after 2 minutes of idle time
  useEffect(() => {
    let idleTimer: NodeJS.Timeout;
    
    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        // Auto-trigger Zen Mode
        console.log('Auto-triggering Zen Mode after 2 minutes of idle time');
        // Add your Zen Mode logic here
      }, 2 * 60 * 1000); // 2 minutes
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, resetIdleTimer, true);
    });

    resetIdleTimer();
    
    return () => {
      clearTimeout(idleTimer);
      events.forEach(event => {
        document.removeEventListener(event, resetIdleTimer, true);
      });
    };
  }, []);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  const handleCalendarToggle = () => {
    // Always open calendar and close other widgets
    setIsCalendarOpen(true);
    setIsTaskOpen(false);
    setIsMusicOpen(false);
    setIsThemeOpen(false);
  };

  const handleTaskToggle = () => {
    // Always open task and close other widgets
    setIsTaskOpen(true);
    setIsCalendarOpen(false);
    setIsMusicOpen(false);
    setIsThemeOpen(false);
  };

  const handleMusicToggle = () => {
    // Always open music and close other widgets
    setIsMusicOpen(true);
    setIsCalendarOpen(false);
    setIsTaskOpen(false);
    setIsThemeOpen(false);
  };

  const handleThemeToggle = () => {
    // Always open theme and close other widgets
    setIsThemeOpen(true);
    setIsCalendarOpen(false);
    setIsTaskOpen(false);
    setIsMusicOpen(false);
  };
  
  return (
    <div className="h-screen w-full flex flex-col overflow-x-hidden overflow-y-hidden">
      {/* Background Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/ce880fcfdb934a18b6d97dead3ad8ee9/7f20138b6d9e5f652437093fd7b8e0f5f87e5158?placeholderIfAbsent=true"
        className={`fixed h-full w-full object-cover inset-0 -z-10 transition-all duration-300 ${showOnboarding ? 'blur-md brightness-25' : ''}`}
        alt="Background"
      />
      
      {/* Full Width Navbar */}
      <div id="header-controls" className={`w-full z-20 relative transition-all duration-300 ${showOnboarding ? 'blur-sm brightness-50' : ''}`}>
        <Header 
          onCalendarToggle={handleCalendarToggle} 
          onTaskToggle={handleTaskToggle}
          onMusicToggle={handleMusicToggle}
          onThemeToggle={handleThemeToggle}
          isCalendarOpen={isCalendarOpen} 
          isTaskOpen={isTaskOpen}
          isMusicOpen={isMusicOpen}
          isThemeOpen={isThemeOpen}
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

        {/* Theme/Drift Widget - Full Screen Overlay */}
        {isThemeOpen && (
          <DriftWidget onClose={() => setIsThemeOpen(false)} />
        )}
      </div>

      {/* Main Content Area */}
      <div id="main-content" className={`flex-1 flex w-full relative z-10 overflow-hidden transition-all duration-300 ${showOnboarding ? 'blur-sm brightness-50' : ''}`}>
        {/* Left Sidebar - Timezone Card */}
        <aside id="timezone-panel" className="w-[19%] max-md:w-full max-md:ml-0 max-lg:w-[25%] max-xl:w-[22%] min-w-0">
          <div className="pt-1 sm:pt-2 px-1 sm:px-2 lg:px-5">
            <section className="justify-center items-stretch shadow-[0_-1px_1px_0_color(display-p3_1_1_1_/_0.10)_inset,0_1px_1px_0_color(display-p3_1_1_1_/_0.25)_inset,0_8px_6px_0_color(display-p3_0_0_0_/_0.05)] backdrop-blur-[10px] bg-[color(display-p3_0.0667_0.0667_0.0667)] flex w-full flex-col p-1.5 sm:p-2 lg:p-3 rounded-2xl">
              <header className="flex w-full items-center justify-between pb-1.5 sm:pb-2 lg:pb-3 gap-1 sm:gap-2">
                <h2 className="text-[11px] sm:text-[13px] lg:text-[15px] text-[#b3b3b3] font-medium truncate">
                  Timezones
                </h2>
                <button className="text-[10px] sm:text-[11px] lg:text-[13px] text-white font-bold flex-shrink-0">
                  <div className="items-center border border-[color(display-p3_0.1255_0.1255_0.1255)] bg-[color(display-p3_0.0941_0.0941_0.0941)] flex min-h-5 sm:min-h-6 lg:min-h-8 gap-1 sm:gap-2 pl-[4px] sm:pl-[6px] lg:pl-[9px] pr-[6px] sm:pr-[8px] lg:pr-[13px] py-0.5 sm:py-1 lg:py-1.5 rounded-xl border-solid hover:bg-[color(display-p3_0.1255_0.1255_0.1255)] transition-colors">
                    <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white" weight="regular" />
                    <span className="hidden sm:inline">Timezone</span>
                  </div>
                </button>
              </header>
              
              <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                <TimezoneWidget 
                  timezone="Katmandu (Local)" 
                  time="08:00" 
                  period="AM"
                  isLocal={true}
                />
                <TimezoneWidget 
                  timezone="Chicago, USA" 
                  time="09:15" 
                  period="PM"
                  gmtOffset="GMT-5:00"
                  timeDiff="10 h 45 m"
                  date="Jul 28"
                />
                <TimezoneWidget 
                  timezone="Sydney, Australia" 
                  time="12:15" 
                  period="PM"
                  gmtOffset="GMT+10:00"
                  timeDiff="4 h 15 m"
                />
              </div>
            </section>
          </div>
        </aside>

        {/* Main Content */}
        <main id="calendar-panel" className="flex-1 ml-2 sm:ml-5 max-md:w-full max-md:ml-0">
          <div className="relative flex w-full flex-col items-stretch max-md:max-w-full">
            <div className="z-10 w-full">
              <div className="gap-2 sm:gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-1/5 max-md:w-full max-md:ml-0">
                  <div className="bg-[rgba(53,249,47,1)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] flex w-[88px] shrink-0 h-8 mt-[768px] mx-auto rounded-full max-md:mt-10" />
                </div>
                
                <div className="w-4/5 ml-2 sm:ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex min-h-[898px] grow flex-col items-stretch justify-center pt-[72px] pb-56 px-2 sm:px-4 max-md:mt-10 max-md:pb-[100px]">
                    {/* Main content area */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Timeline Bar - Moved to bottom */}
      <div id="timeline-panel" className={`relative w-full max-md:max-w-full transition-all duration-300 ${showOnboarding ? 'blur-sm brightness-50' : ''}`}>
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
      
      {/* Onboarding Component */}
      <Onboarding 
        isVisible={showOnboarding} 
        onComplete={handleOnboardingComplete} 
      />
    </div>
  );
};

export default Index;
