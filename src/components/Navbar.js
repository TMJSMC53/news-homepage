import PropTypes from "prop-types";
import React, { useState } from "react";

import { ReactComponent as Logo } from "../images/logo.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="navBar">
      <Logo className="logo" />
      <span className="hamburger" onClick={handleToggle}>
        {navbarOpen ? (
          <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg">
            <g fill="#00001A" fill-rule="evenodd">
              <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
              <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
            </g>
          </svg>
        ) : (
          <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
            <g fill="#00001A" fill-rule="evenodd">
              <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
              <path d="M0 0h40v3H0z" />
            </g>
          </svg>
        )}
      </span>
      <div className={`menuBackground ${navbarOpen ? "open" : ""}`}>
        <div className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
          <ul className="menuContent">
            <li className="nav-link">
              <a href="/home" onClick={() => closeMenu()}>
                Home
              </a>
            </li>
            <li className="nav-link">
              <a href="/new">New</a>
            </li>
            <li className="nav-link">
              <a href="/popular">Popular</a>
            </li>
            <li className="nav-link">
              <a href="/trending">Trending</a>
            </li>
            <li className="nav-link">
              <a href="/categories">Categories</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Test",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
