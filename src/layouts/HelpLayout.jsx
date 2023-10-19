import React from "react";
import { Outlet, NavLink } from "react-router-dom";
//STYLES
import "../styles/Help.css";

const HelpLayout = () => {
  return (
    <div className="main-section help-layout">
      <h1>This is the HELP page</h1>
      <div className="help-nav-wrapper">
        <button className="help-button">
          <NavLink to="faq">Go to FAQ</NavLink>
        </button>
        <button className="help-button">
          <NavLink to="contact">Go to CONTACT</NavLink>
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default HelpLayout;
