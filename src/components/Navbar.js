import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="name-outer-container">
        <div className="name-inner-container">OH SOONG TENG</div>
      </div>
      <ul className="navbar">
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
      {/* <div className="navbar-bottom-underline"></div> */}
    </div>
  );
};

export default Navbar;
