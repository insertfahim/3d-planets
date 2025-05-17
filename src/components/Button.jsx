import React from "react";
import gsap from "gsap";

const Button = ({ text }) => {
  // Custom smooth scroll function
  const smoothScrollTo = (element) => {
    const start = window.pageYOffset;
    const target = element.getBoundingClientRect().top + window.pageYOffset;
    const distance = target - start;
    const duration = 1500; // ms
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, start + distance * ease);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    // Easing function for smooth animation
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    requestAnimationFrame(animation);
  };

  const handleClick = () => {
    if (text === "SCROLL DOWN") {
      // Scroll down by 500px smoothly
      window.scrollBy({
        top: 500,
        behavior: "smooth"
      });
    } else if (text === "READ MORE") {
      // Scroll to the bottom of the page smoothly
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    } else if (text === "LEARN MORE") {
      // Get the detail section
      const detailSection = document.querySelector(".detail");
      if (detailSection) {
        // Use custom smooth scrolling
        smoothScrollTo(detailSection);
      }
    }
  };

  return (
    <div 
      className="w-48 h-14 rounded-full bg-primary flex-center mt-10 cursor-pointer hover:opacity-90 transition-opacity relative z-[100]"
      onClick={handleClick}
    >
      <p className="text-black font-semibold">{text}</p>
    </div>
  );
};

export default Button;
