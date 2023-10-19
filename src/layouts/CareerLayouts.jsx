import React from "react";
import { Outlet } from "react-router-dom";
//STYLES
import "../styles/Careers.css";

const CareerLayouts = () => {
  return (
    <>
      <div className="main-section">
        <h1>This is the CAREERS page</h1>
      </div>
      <Outlet />
    </>
  );
};

export default CareerLayouts;
