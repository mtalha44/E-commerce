import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // External CSS file for styles
import { IoIosArrowDown } from "react-icons/io";

export const NavPages = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropSectionOpen, setDropSectionOpen] = useState(false);

  const [isSticky, setIsSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const stickyElement = document.getElementById("stickyDiv");

      if (stickyElement) {
        const offsetTop = stickyElement.offsetTop;

        // Determine scroll direction
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }

        // Sticky behavior based on direction and position
        if (currentScrollY >= offsetTop && scrollDirection === "up") {
          setIsSticky(true);
        } else if (scrollDirection === "down") {
          setIsSticky(false);
        }

        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

    return (
      <nav id="stickyDiv"
      className={` ${ isSticky ? "sticky" : "nav-container" }`}

      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          Home
        </NavLink>

        <div className="dropdown">
          <button className="dropdown-button flex-row" onClick={() => setDropdownOpen(!dropdownOpen)}>
            Product Category
            <IoIosArrowDown/>
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <NavLink to="/popular_items" className="dropdown-item">
                Popular Items
              </NavLink>
              <NavLink to="/perfumes" className="dropdown-item">
                Perfumes
              </NavLink>
              <NavLink to="/shorts" className="dropdown-item">
                Shorts
              </NavLink>
              <NavLink to="/mixed" className="dropdown-item">
                Mixed
              </NavLink>
              <NavLink to="/watches" className="dropdown-item">
                Watches
              </NavLink>
              <NavLink to="/furniture" className="dropdown-item">
                Furniture
              </NavLink>
              <NavLink to="/sports" className="dropdown-item">
                Sports
              </NavLink>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button className="dropdown-button flex-row" onClick={() => setDropSectionOpen(!dropSectionOpen)}>
            Sections
            <IoIosArrowDown/>
          </button>
          {dropSectionOpen && (
            // <div className="dropdown-menu">
            <div className={`dropdown-menu ${dropdownOpen ? "visible" : ""}`}>
              <NavLink to="/cart" className="dropdown-item">
                Cart
              </NavLink>
              <NavLink to="/support-section" className="dropdown-item">
                Support Section
              </NavLink>
              <NavLink to="/contact" className="dropdown-item">
                Contact
              </NavLink>
            </div>
          )}
        </div>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          Contact Us
        </NavLink>
      </nav>

  );
};
