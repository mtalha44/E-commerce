import React, { useState, useEffect } from 'react';
import './ScrollButtons.css';

const ScrollButtons = () => {
  const [showButtons, setShowButtons] = useState(false);

  // Listen for scroll events and display buttons after a threshold
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowButtons(true);
    } else {
      setShowButtons(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scrolling functions
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="scroll-buttons-ud-container">
      {showButtons && (
        <>
          <button onClick={scrollToTop} className="scroll-button-ud up" aria-label="Scroll to Top">
            ↑
          </button>
          <button onClick={scrollToBottom} className="scroll-button-ud down" aria-label="Scroll to Bottom">
            ↓
          </button>
        </>
      )}
    </div>
  );
};

export default ScrollButtons;
