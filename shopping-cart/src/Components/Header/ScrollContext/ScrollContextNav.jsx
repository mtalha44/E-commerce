import { createContext, useEffect, useState } from "react";

export const ScrollContext = createContext();

export const ScrollContextProvider = ({ children }) => {
    const [hidescroll, setHidescroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // const homeDiv1 = document.getElementById("home-div1");
            const homeDiv1 = document.getElementById("deals-container");
            if (!homeDiv1) return;

            const rect = homeDiv1.getBoundingClientRect();
            const isTopAtViewport = rect.top <= 0;// Top of home-div1 is at or above the viewport's top
            const isInOriginalPosition = rect.top > 0; // Top of home-div1 is below the viewport's top

            // Check screen width and adjust hidescroll state
            const isSmallScreen = window.matchMedia("(max-width: 1045px)").matches;

            if (isSmallScreen) {
                setHidescroll(false);
            }
            else if (isTopAtViewport) {
                setHidescroll(true); // Set to true when the top of home-div1 reaches the top
            } else if (isInOriginalPosition) {
                setHidescroll(false); // Set to false when home-div1 returns to its original position
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ScrollContext.Provider value={hidescroll}>
            {children}
        </ScrollContext.Provider>
    );
};
