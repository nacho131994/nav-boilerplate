import React from "react";
import { Outlet, NavLink } from "react-router-dom";
//STYLES
import "../styles/RootLayout.css";
const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav className="navbar">
          <div className="nav-items">
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item">
              About
            </NavLink>
            <NavLink to="/help" className="nav-item">
              Help
            </NavLink>
            <NavLink to="/careers" className="nav-item">
              Careers
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
