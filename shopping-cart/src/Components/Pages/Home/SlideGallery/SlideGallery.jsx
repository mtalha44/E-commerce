import React, { useState, useEffect } from "react";
// import "./Home.css";

const images = [
    "./images/img-slider-1.jpg",
    "./images/img-slider-2.jpg",
    "./images/img-slider-3.jpg",
];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Automatically move to the next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (isAnimating) return; // Prevent overlapping transitions
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    if (isAnimating) return; // Prevent overlapping transitions
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isAnimating ? "transform 0.5s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slider-image"
          />
        ))}
      </div>
      <button className="slider-button left" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="slider-button right" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};
