import React, { useState, useEffect, createContext } from "react";

export const ScrollContext = createContext();

export const ScrollContextProvider = ({ children }) => {
  const [hidescroll, setHidescroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1145) {
        setHidescroll(window.scrollY > 50);
      } else {
        setHidescroll(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 1035) {
        setHidescroll(false);
      } else {
        setHidescroll(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <ScrollContext.Provider value={hidescroll}>{children}</ScrollContext.Provider>;
};
