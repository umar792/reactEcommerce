import React from "react";
import { NavLink } from "react-router-dom";
import "./HeroSection.css";
const HeroSection = (props) => {
  return (
    <>
      <div className="hero-section">
        <div className="left-hero">
          <p>Welcome to</p>
          <h1>{props.title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero
            voluptatibus optio assumenda. Ea reiciendis cum non Ea reiciendis
            cum non voluptatibus optio assumenda. Ea reiciendis cum non Ea
            reiciendis cum non
          </p>
          <NavLink to="/product">
            <button className="hero-btn">SHOP NOW</button>
          </NavLink>
        </div>
        {/* ===================== right hero */}
        <div className="right-hero">
          <img src={props.imge} alt="Loading Error" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
