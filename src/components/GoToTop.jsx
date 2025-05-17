import React, { useState, useEffect } from "react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Enhanced smooth scroll to top function with custom easing
  const scrollToTop = () => {
    const duration = 1000; // ms - shorter for quicker return to top
    const start = window.pageYOffset;
    let startTime = null;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutCubic(progress);
      
      window.scrollTo(0, start * (1 - ease));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary flex-center cursor-pointer hover:opacity-90 transition-all duration-300 z-[100] shadow-lg animate-bounce"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-black" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default GoToTop; 