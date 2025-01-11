import React, { useRef } from "react";
import "./Practice.css";

const CardSlider = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector(".card").offsetWidth + 20; // Card width + gap
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const cards = [
    { id: 1, title: "GeeksforGeeks", subtitle: "Coding Platform", img: "/path/to/image1.jpg" },
    { id: 2, title: "GeeksforGeeks", subtitle: "Coding Platform", img: "/path/to/image2.jpg" },
    { id: 3, title: "GeeksforGeeks", subtitle: "Coding Platform", img: "/path/to/image3.jpg" },
    { id: 4, title: "GeeksforGeeks", subtitle: "Coding Platform", img: "/path/to/image4.jpg" },
    { id: 5, title: "GeeksforGeeks", subtitle: "Coding Platform", img: "/path/to/image5.jpg" },
  ];

  return (
    <div className="card-slider-container">
      {/* Scroll Buttons */}
      <button className="scroll-button left" onClick={() => scroll("left")}>
        &lt;
      </button>
      <button className="scroll-button right" onClick={() => scroll("right")}>
        &gt;
      </button>

      {/* Scrollable Cards */}
      <div className="card-slider" ref={scrollContainerRef}>
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
