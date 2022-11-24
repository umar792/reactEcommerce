import React from "react";
import { NavLink } from "react-router-dom";
import "./Nave.css";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";
const Nave = () => {
  const [mobilemenu, setMobilemenu] = useState(false);
  const toggleMenu = () => {
    setMobilemenu(!mobilemenu);
  };
  return (
    <>
      <div className="naveber">
        <div className="nave-img">
          <NavLink to="/">
            <h3 className="logo">
              <font>Lahore </font> Store
            </h3>
          </NavLink>
        </div>
        <div>
          <ul
            className={
              mobilemenu ? " navebar-links" : " mobile-menu navebar-links"
            }
          >
            <NavLink to="/" onClick={toggleMenu}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" onClick={toggleMenu}>
              <li>About</li>
            </NavLink>
            <NavLink to="/contact" onClick={toggleMenu}>
              <li>Contact Us</li>
            </NavLink>
            <NavLink to="/product" onClick={toggleMenu}>
              <li>Product</li>
            </NavLink>
            <NavLink to="/card">
              <li>
                <div className="icon" onClick={toggleMenu}>
                  <FiShoppingCart className="navicon" />
                  <span>0</span>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
        {mobilemenu ? (
          <CgClose className="buger " onClick={toggleMenu} />
        ) : (
          <CgMenu className="buger " onClick={toggleMenu} />
        )}
      </div>
    </>
  );
};

export default Nave;
