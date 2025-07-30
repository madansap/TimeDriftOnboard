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

  // Cleanup function to remove any remaining tour elements
  const cleanupTour = () => {
    if (driverRef.current) {
      driverRef.current.destroy();
    }
    // Remove any remaining tour overlays
    const tourOverlays = document.querySelectorAll('.driverjs-theme, .driver-overlay');
    tourOverlays.forEach((overlay) => {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    });
    // Clear any highlighting
    const highlightedElements = document.querySelectorAll('.tour-highlighted');
    highlightedElements.forEach((element) => {
      element.classList.remove('tour-highlighted');
    });
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupTour();
    };
  }, []);

  const handleGetStarted = () => {
    setIsIntroVisible(false);
    
    // Start step 2 immediately
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

      // Remove all backdrop-blur classes from all elements
      const allElements = document.querySelectorAll('*');
      allElements.forEach((element) => {
        const classList = element.classList;
        if (classList.contains('backdrop-blur-[10px]') || 
            classList.contains('backdrop-blur-sm') || 
            classList.contains('backdrop-blur-md') || 
            classList.contains('backdrop-blur-lg') ||
            classList.contains('blur-sm') ||
            classList.contains('brightness-50')) {
          classList.remove('backdrop-blur-[10px]', 'backdrop-blur-sm', 'backdrop-blur-md', 'backdrop-blur-lg', 'blur-sm', 'brightness-50');
        }
      });
      console.log('Removed all backdrop-blur and blur classes');

      // Clear any existing highlighting before starting the tour
      const highlightedElements = document.querySelectorAll('*');
      highlightedElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        if (htmlElement.classList.contains('tour-highlighted')) {
          htmlElement.classList.remove('tour-highlighted');
          htmlElement.style.filter = '';
          htmlElement.style.backdropFilter = '';
          htmlElement.style.transform = '';
          htmlElement.style.zIndex = '';
          htmlElement.style.position = '';
        }
      });

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
          // Force destroy the driver instance
          if (driverRef.current) {
            driverRef.current.destroy();
          }
          // Clear any remaining tour overlays
          const tourOverlays = document.querySelectorAll('.driverjs-theme, .driver-overlay');
          tourOverlays.forEach((overlay) => {
            if (overlay.parentNode) {
              overlay.parentNode.removeChild(overlay);
            }
          });
          // Show final step immediately
          setIsFinalStepVisible(true);
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
            htmlElement.style.transform = 'none';
            
            // Also remove blur from all child elements
            const childElements = htmlElement.querySelectorAll('*');
            childElements.forEach((child) => {
              const childElement = child as HTMLElement;
              childElement.style.filter = 'none';
              childElement.style.backdropFilter = 'none';
              childElement.style.transform = 'none';
              
              // Also remove any backdrop-blur classes
              const classList = childElement.classList;
              if (classList.contains('backdrop-blur-[10px]') || 
                  classList.contains('backdrop-blur-sm') || 
                  classList.contains('backdrop-blur-md') || 
                  classList.contains('backdrop-blur-lg') ||
                  classList.contains('blur-sm') ||
                  classList.contains('brightness-50')) {
                classList.remove('backdrop-blur-[10px]', 'backdrop-blur-sm', 'backdrop-blur-md', 'backdrop-blur-lg', 'blur-sm', 'brightness-50');
              }
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

            // Ensure header controls are properly positioned during tour
            const headerControls = document.querySelector('#header-controls');
            if (headerControls) {
              headerControls.classList.remove('blur-sm', 'brightness-50');
              (headerControls as HTMLElement).style.filter = 'none';
              (headerControls as HTMLElement).style.backdropFilter = 'none';
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
            htmlElement.style.transform = '';
            htmlElement.style.zIndex = '';
            htmlElement.style.position = '';
            
            // Clear inline styles from all child elements
            const childElements = htmlElement.querySelectorAll('*');
            childElements.forEach((child) => {
              const childElement = child as HTMLElement;
              childElement.style.filter = '';
              childElement.style.backdropFilter = '';
              childElement.style.transform = '';
              childElement.style.zIndex = '';
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

            // Ensure header controls remain properly positioned during tour
            const headerControls = document.querySelector('#header-controls');
            if (headerControls) {
              headerControls.classList.remove('blur-sm', 'brightness-50');
              (headerControls as HTMLElement).style.filter = 'none';
              (headerControls as HTMLElement).style.backdropFilter = 'none';
            }
          }
        },
        onDeselected: (element) => {
          // Additional cleanup when element is deselected
          if (element) {
            element.classList.remove('tour-highlighted');
            const htmlElement = element as HTMLElement;
            htmlElement.style.filter = '';
            htmlElement.style.backdropFilter = '';
            htmlElement.style.transform = '';
            htmlElement.style.zIndex = '';
            htmlElement.style.position = '';
            
            // Clear all child elements
            const childElements = htmlElement.querySelectorAll('*');
            childElements.forEach((child) => {
              const childElement = child as HTMLElement;
              childElement.style.filter = '';
              childElement.style.backdropFilter = '';
              childElement.style.transform = '';
              childElement.style.zIndex = '';
            });
          }
        }
      });

      // Step 2: Highlight Left Panel (Timezones)
      const steps = [
        {
          element: '#timezone-panel',
          popover: {
            title: 'Your Timezones',
            description: 'See local & global time instantly\nRename them for people you care about',
            side: 'right',
            align: 'start'
          }
        },
        {
          element: '#calendar-card',
          popover: {
            title: 'Your Calendar, Synced',
            description: 'Today\'s events, no clicks\nGoogle Calendar sync, live updates.',
            side: 'left',
            align: 'start'
          }
        },
        {
          element: '#timeline-panel',
          popover: {
            title: 'Your Timeline',
            description: 'Visualize your day\nDrag events to reschedule, see your rhythm.',
            side: 'top',
            align: 'center'
          }
        },
        {
          element: '#header-controls',
          popover: {
            title: 'Make it Yours',
            description: 'Switch Zen Mode for a calmer vibe\nOr build your own theme.',
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
  };

  const handleFinalStepComplete = () => {
    setIsFinalStepVisible(false);
    // Ensure tour is completely cleaned up
    cleanupTour();
    onComplete();
  };

  // Auto-dismiss final step after 1.5 seconds
  useEffect(() => {
    if (isFinalStepVisible) {
      const timer = setTimeout(() => {
        handleFinalStepComplete();
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isFinalStepVisible]);

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
            <p className="text-white text-lg leading-relaxed">
              Everything you need is already here.
            </p>
          </div>
        </div>
      )}
    </>
  );
}; 