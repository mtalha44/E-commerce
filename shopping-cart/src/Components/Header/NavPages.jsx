import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // External CSS file for styles
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import {  LuMenu } from "react-icons/lu";

export const NavPages = ({hidescroll}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropSectionOpen, setDropSectionOpen] = useState(false);
  const [hideNav, setHideNav] = useState(() => {
    return window.matchMedia("(max-width: 765px)").matches;
});

useEffect(() => {
    const handlehidenav = () => {
        const isSmallScreen = window.matchMedia("(max-width: 765px)").matches;
        setHideNav(isSmallScreen);
    };

    window.addEventListener("resize", handlehidenav);

    return () => {
        window.removeEventListener("resize", handlehidenav);
    };
}, []);

  return (
    <>
    <div className=" navbar-handler" style={ hideNav ? { borderBottom : "1px solid #3333"} : {}}>

      <span onClick={() => setHideNav(!hideNav)} className={ hideNav ? "gayab" : ""} >

      <IoMdClose/>
      </span>
      <span onClick={() => setHideNav(!hideNav)} className={ hideNav ? "" : "gayab"}>

      <LuMenu/>
      </span> 
    </div>
    <nav
      id="navbar"
      className={`${hideNav ?  "gayab" : "nav-container"  } ${hidescroll ? "toggle-nav-container" : ""}`}
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
        <button
          className="dropdown-button flex-row"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          onMouseEnter={() => setDropdownOpen(true)}
          
        >
          Product Category
          <IoIosArrowDown />
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu" onMouseLeave={() => setDropdownOpen(false)}>
            <NavLink to="/popular_items" className="dropdown-item">
              Popular Items
            </NavLink>
            <NavLink to="/perfumes" className="dropdown-item">
              Perfumes
            </NavLink>
            <NavLink to="/makeup" className="dropdown-item">
              Makeup
            </NavLink>
            <NavLink to="/mixed" className="dropdown-item">
              Mixed
            </NavLink>
            <NavLink to="/electronics" className="dropdown-item">
              Electronics
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
        <button
          className="dropdown-button flex-row"
          onClick={() => setDropSectionOpen(!dropSectionOpen)}
          onMouseEnter={() => setDropSectionOpen(true)}
          
  
        >
          Sections
          <IoIosArrowDown />
        </button>
        {dropSectionOpen && (
          <div className="dropdown-menu" onMouseLeave={() => setDropSectionOpen(false)}>
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
          </>
  );
};
