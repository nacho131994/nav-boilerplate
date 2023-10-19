import React from "react";
import { Link } from "react-router-dom";
//STYLES
import "../../styles/Error.css";

const Error = () => {
  return (
    <div className="main-section">
      <h1>ERROR 404 - Page NOT found</h1>
      <p>
        Go to{" "}
        <button>
          <Link to="/">HOME</Link>
        </button>{" "}
        page
      </p>
    </div>
  );
};

export default Error;
