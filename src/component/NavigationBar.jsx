import React from "react";
import Searchbutton  from "./Searchbutton";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>World</h1>
      </div>
      <ul className="navbar-list">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <Searchbutton  />
      </ul>
    </nav>
  );
}

export default NavigationBar;
