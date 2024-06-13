import React, { useState, useEffect } from "react";
// import { FaArrowUp } from 'react-icons/fa';
import "../assets/scrollButton.css";
import arrowDown from "../assets/arrow-down.png";

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
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="scroll-button"
        >
          {/* <FaArrowUp className="scroll-icon" /> */}
          <img
            src={arrowDown}
            alt="scroll up"
            className="scroll-up scroll-icon"
            width="100%"
            height="100%"
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
