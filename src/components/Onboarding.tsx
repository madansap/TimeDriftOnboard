import React, { useEffect, useState, useRef } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

interface OnboardingProps {
  isVisible: boolean;
  onComplete: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ isVisible, onComplete }) => {
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [isFinalStepVisible, setIsFinalStepVisible] = useState(false);
  const driverRef = useRef<any>(null);

  useEffect(() => {
    if (isVisible) {
      setIsIntroVisible(true);
    }
  }, [isVisible]);

  const handleGetStarted = () => {
    setIsIntroVisible(false);
    
    // Wait for intro fade out, then start step 2
    setTimeout(() => {
      try {
        // Remove blur effects from main content container (parent of timezone and calendar panels)
        const mainContent = document.querySelector('#main-content');
        if (mainContent) {
          mainContent.classList.remove('blur-sm', 'brightness-50');
          console.log('Removed blur from main content');
        } else {
          console.warn('Main content not found');
        }

        // Remove blur effects from timeline panel
        const timelinePanel = document.querySelector('#timeline-panel');
        if (timelinePanel) {
          timelinePanel.classList.remove('blur-sm', 'brightness-50');
          console.log('Removed blur from timeline panel');
        } else {
          console.warn('Timeline panel not found');
        }

        // Initialize Driver.js for step 2
        driverRef.current = driver({
          showProgress: false,
          allowClose: false,
          nextBtnText: 'Next →',
          prevBtnText: '← Previous',
          doneBtnText: 'Done',
          stagePadding: 10,
          popoverClass: 'driverjs-theme',
          onDestroyStarted: () => {
            console.log('Step 2 completed');
            // Show final step after driver completes
            setTimeout(() => {
              setIsFinalStepVisible(true);
            }, 300);
          },
          onHighlightStarted: (element) => {
            console.log('Highlight started', element);
            if (element) {
              element.classList.add('tour-highlighted');
              // Force the element to be above the overlay and remove all blur effects
              const htmlElement = element as HTMLElement;
              htmlElement.style.zIndex = '10001';
              htmlElement.style.position = 'relative';
              htmlElement.style.filter = 'none';
              htmlElement.style.backdropFilter = 'none';
              
              // Also remove blur from all child elements
              const childElements = htmlElement.querySelectorAll('*');
              childElements.forEach((child) => {
                const childElement = child as HTMLElement;
                childElement.style.filter = 'none';
                childElement.style.backdropFilter = 'none';
              });

              // Ensure parent containers don't have blur applied
              const mainContent = document.querySelector('#main-content');
              if (mainContent) {
                mainContent.classList.remove('blur-sm', 'brightness-50');
                (mainContent as HTMLElement).style.filter = 'none';
                (mainContent as HTMLElement).style.backdropFilter = 'none';
              }

              const timelinePanel = document.querySelector('#timeline-panel');
              if (timelinePanel) {
                timelinePanel.classList.remove('blur-sm', 'brightness-50');
                (timelinePanel as HTMLElement).style.filter = 'none';
                (timelinePanel as HTMLElement).style.backdropFilter = 'none';
              }
            }
          },
          onHighlighted: (element) => {
            if (element) {
              element.classList.remove('tour-highlighted');
              // Clear inline styles
              const htmlElement = element as HTMLElement;
              htmlElement.style.filter = '';
              htmlElement.style.backdropFilter = '';
              
              // Clear inline styles from all child elements
              const childElements = htmlElement.querySelectorAll('*');
              childElements.forEach((child) => {
                const childElement = child as HTMLElement;
                childElement.style.filter = '';
                childElement.style.backdropFilter = '';
              });

              // Ensure parent containers remain unblurred during tour
              const mainContent = document.querySelector('#main-content');
              if (mainContent) {
                mainContent.classList.remove('blur-sm', 'brightness-50');
                (mainContent as HTMLElement).style.filter = 'none';
                (mainContent as HTMLElement).style.backdropFilter = 'none';
              }

              const timelinePanel = document.querySelector('#timeline-panel');
              if (timelinePanel) {
                timelinePanel.classList.remove('blur-sm', 'brightness-50');
                (timelinePanel as HTMLElement).style.filter = 'none';
                (timelinePanel as HTMLElement).style.backdropFilter = 'none';
              }
            }
          }
        });

        // Step 2: Highlight Left Panel (Timezones)
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
              title: 'Your Timeline',
              description: 'Visualize your day. Drag events to reschedule, see your rhythm.',
              side: 'right',
              align: 'start'
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
          }
        ];

        console.log('Starting step 2: Timezone panel highlight');
        driverRef.current.setSteps(steps);
        driverRef.current.drive();
        
      } catch (error) {
        console.error('Error starting step 2:', error);
      }
    }, 500); // Wait 500ms for intro fade out
  };

  const handleFinalStepComplete = () => {
    setIsFinalStepVisible(false);
    onComplete();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Step 1: Welcome Modal */}
      {isIntroVisible && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center animate-fade-in">
          <div className="p-12 max-w-xl mx-4 text-center animate-slide-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to Timedrift
            </h2>
            <p className="text-white text-lg leading-relaxed mb-10">
              Your calm daily dashboard to feel time differently.
            </p>
            <button
              onClick={handleGetStarted}
              className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-medium transition-all hover:bg-white hover:text-black"
            >
              Show me around →
            </button>
          </div>
        </div>
      )}

      {/* Step 6: Final Completion Modal */}
      {isFinalStepVisible && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center animate-fade-in">
          <div className="p-12 max-w-xl mx-4 text-center animate-slide-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enjoy your day with Timedrift
            </h2>
            <p className="text-white text-lg leading-relaxed mb-10">
              Everything you need is already here.
            </p>
            <button
              onClick={handleFinalStepComplete}
              className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-medium transition-all hover:bg-white hover:text-black"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}; 