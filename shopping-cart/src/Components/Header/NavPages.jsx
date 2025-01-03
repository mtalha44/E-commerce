import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // External CSS file for styles
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import {  LuMenu } from "react-icons/lu";

export const NavPages = ({hidescroll}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropSectionOpen, setDropSectionOpen] = useState(false);
  const [hideNav , setHideNav ] = useState(false);

  return (
    <>
    <div className="flex-row">

      <span onClick={() => setHideNav(!hideNav)} className={ hideNav ? "" : "gayab"} style={{margin:"auto"}}>

      <IoMdClose/>
      </span>
      <span onClick={() => setHideNav(!hideNav)} className={ hideNav ? "gayab" : ""}>

      <LuMenu/>
      </span>
    </div>
    <nav
      id="navbar"
      className={`${hideNav ? "nav-container" : "gayab"} ${hidescroll ? "toggle-nav-container" : ""}`}
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
        >
          Product Category
          <IoIosArrowDown />
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
        <button
          className="dropdown-button flex-row"
          onClick={() => setDropSectionOpen(!dropSectionOpen)}
        >
          Sections
          <IoIosArrowDown />
        </button>
        {dropSectionOpen && (
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
          </>
  );
};
