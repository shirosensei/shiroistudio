import React, { useState, useEffect } from "react";
import { FaArrowUp } from 'react-icons/fa';
import '../assets/scrollButton.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Todo Scroll the page to the top
  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [ ]);

  return (
    <div
      className="scroll-to-top">
        {isVisible && (
          <button onClick={scrollToTop}
          aria-label="Scroll to top"
          className="scroll-button">
            <FaArrowUp className="scroll-icon" />
          </button>
        )}      
    </div>
  );
};

export default ScrollToTop;
