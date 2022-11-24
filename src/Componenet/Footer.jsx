import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="started">
          <div>
            <p>Ready to get started</p>
            <p>Talk to us today</p>
          </div>
          <button className="f-btn">GET STARTED</button>
        </div>
        <div className="footer-content">
          <div className="footer1">
            <h4>Lahore Store</h4>
            <p>
              Lorem, ipsum dolor sit amet,
              <br /> consectetur adipisicing elit.
            </p>
          </div>
          <div className="footer2">
            <h4>Subscribe to get important update</h4>
            <input type="email" required placeholder="Your E-mail" />
            <button className="f3-btn">SUBSCRIBE</button>
          </div>
          <div className="footer3">
            <h4>Follow us</h4>
            <div className="footer4-icon">
              <BsFacebook className="f-icon" />
              <AiFillInstagram className="f-icon" />
              <AiFillYoutube className="f-icon" />
            </div>
          </div>
          <div className="footer4">
            <h4> Call us </h4>
            <p>Lahore, pakistan streetNO:10</p>
            <p>+92345678901 </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
