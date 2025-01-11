import { useRef } from "react";

export const useScroll = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.querySelector(".home-card-item").offsetWidth + 30; // Card width + gap
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return { scrollContainerRef, scroll };
};
