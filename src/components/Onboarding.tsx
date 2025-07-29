import React, { useEffect, useState, useRef } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

interface OnboardingProps {
  isVisible: boolean;
  onComplete: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ isVisible, onComplete }) => {
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const driverRef = useRef<any>(null);

  useEffect(() => {
    if (isVisible) {
      setIsIntroVisible(true);
    }
  }, [isVisible]);

  const startTour = () => {
    console.log('Starting onboarding tour...');
    setIsIntroVisible(false);
    
    // Wait for intro fade out, then start tour
    setTimeout(() => {
      try {
        // Initialize Driver.js with API configuration
        driverRef.current = driver({
          showProgress: false,
          allowClose: false,
          nextBtnText: 'Next →',
          prevBtnText: '← Previous',
          doneBtnText: 'Done',
          stagePadding: 10,
          popoverClass: 'driverjs-theme',
          onDestroyStarted: () => {
            console.log('Tour completed');
            onComplete();
          },
          onNextClick: (element) => {
            console.log('Next clicked', element);
          },
          onHighlightStarted: (element) => {
            console.log('Highlight started', element);
            element?.classList.add('tour-highlighted');
          },
          onHighlighted: (element) => {
            element?.classList.remove('tour-highlighted');
          }
        });

        // Define steps according to PRD
        const steps = [
          {
            element: '#timezone-panel',
            popover: {
              title: 'Your Timezones',
              description: 'See local & global time instantly. Rename them for people you care about → "Rabin\'s Time."',
              side: 'right',
              align: 'start'
            }
          },
          {
            element: '#calendar-panel',
            popover: {
              title: 'Your Calendar, Synced',
              description: 'Today\'s events, no clicks. Google Calendar sync, live updates.',
              side: 'left',
              align: 'start'
            }
          },
          {
            element: '#timeline-panel',
            popover: {
              title: 'Your Day, Visualized',
              description: 'See your timeline at a glance. Adjust your visible hours for work or personal flow.',
              side: 'top',
              align: 'center'
            }
          },
          {
            element: '#header-controls',
            popover: {
              title: 'Make it Yours',
              description: 'Switch Zen Mode for a calmer vibe, or build your own theme.',
              side: 'bottom',
              align: 'center'
            }
          },
          {
            element: '#main-content',
            popover: {
              title: 'Enjoy your day with Timedrift',
              description: 'Everything you need is already here.',
              side: 'center',
              align: 'center'
            }
          }
        ];

        console.log('Setting tour steps:', steps);
        driverRef.current.setSteps(steps);
        driverRef.current.drive();
        
      } catch (error) {
        console.error('Error starting tour:', error);
      }
    }, 500); // Wait 500ms for intro fade out
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Step 1: Soft Overlay Intro */}
      {isIntroVisible && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center animate-fade-in">
          <div className="p-12 max-w-xl mx-4 text-center animate-slide-up relative overflow-hidden">
            {/* Circular Time Graphic */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-20 circular-graphic">
              <div className="relative w-full h-full">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-gray-600"></div>
                {/* Middle Ring */}
                <div className="absolute inset-4 rounded-full border border-dashed border-gray-700"></div>
                {/* Inner Ring */}
                <div className="absolute inset-8 rounded-full border border-dashed border-gray-800"></div>
                
                {/* Time Markers */}
                <div className="absolute inset-0">
                  {/* Right side markers */}
                  <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 text-xs text-gray-500">01</div>
                  <div className="absolute top-1/3 right-2 transform translate-x-1 -translate-y-1/2 text-xs text-gray-500">02</div>
                  <div className="absolute top-1/4 right-4 transform translate-x-1 -translate-y-1/2 text-xs text-gray-500">03</div>
                  
                  {/* Left side markers */}
                  <div className="absolute top-1/2 left-0 transform -translate-x-1 -translate-y-1/2 text-xs text-gray-500">20</div>
                  <div className="absolute top-1/3 left-2 transform -translate-x-1 -translate-y-1/2 text-xs text-gray-500">21</div>
                  <div className="absolute top-1/4 left-4 transform -translate-x-1 -translate-y-1/2 text-xs text-gray-500">22</div>
                  
                  {/* Bottom markers */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 text-xs text-gray-500">12</div>
                  <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1 text-xs text-gray-500">13</div>
                  <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1 text-xs text-gray-500">14</div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 pt-20">
              <h2 className="text-4xl font-bold text-white mb-4">
                Welcome to Timedrift
              </h2>
              <p className="text-white text-lg leading-relaxed mb-10">
                Your calm daily dashboard to feel time differently.
              </p>
              <button
                onClick={startTour}
                className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-medium transition-all hover:bg-white hover:text-black"
              >
                Show me around →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}; 