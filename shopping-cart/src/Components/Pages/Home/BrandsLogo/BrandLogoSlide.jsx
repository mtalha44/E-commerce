import React, { useState, useEffect } from "react";
import "./BrandLogoSlide.css";

const brandLogos = [
  { src: "/images/brandLogos/client-logos-1.png", alt: "Brand 1" },
  { src: "/images/brandLogos/client-logos-2.png", alt: "Brand 2" },
  { src: "/images/brandLogos/client-logos-3.png", alt: "Brand 3" },
  { src: "/images/brandLogos/client-logos-4.png", alt: "Brand 4" },
  { src: "/images/brandLogos/client-logos-5.png", alt: "Brand 5" },
  { src: "/images/brandLogos/client-logos-6.png", alt: "Brand 6" },
  { src: "/images/brandLogos/client-logos-7.png", alt: "Brand 7" },
  { src: "/images/brandLogos/client-logos-8.png", alt: "Brand 8" },
  { src: "/images/brandLogos/site-logo-1.png", alt: "Brand 9" },
];

export const BrandLogoSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const logosPerSlide = 5; // Number of logos to show per slide

  // Slide to the next set of logos
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % brandLogos.length);
  };

  // Slide to the previous set of logos
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + brandLogos.length) % brandLogos.length
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Determine the visible logos for the current slide
  const visibleLogos = [];
  for (let i = 0; i < logosPerSlide; i++) {
    visibleLogos.push(brandLogos[(currentIndex + i) % brandLogos.length]);
  }

  return (
    <div className="brand-logo-slide">
      <button className="nav-button left" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="logo-container">
        {visibleLogos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
      <button className="nav-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};
