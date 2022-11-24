import React from "react";
import { NavLink } from "react-router-dom";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <>
      <div className="error">
        <h2>404</h2>
        <h2>UH OH! You're lost</h2>
        <p>
          The page are looking for does not exist. How you got here is a
          mystery. But you can click bellow to go back to the homepage.
        </p>
        <NavLink to="/">
          <button className="e-btn">Go to Home </button>
        </NavLink>
      </div>
    </>
  );
};

export default ErrorPage;
