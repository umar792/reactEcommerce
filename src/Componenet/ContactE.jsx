import React from "react";
import "./ContactE.css";
const ContactE = () => {
  return (
    <>
      <h2>Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.6884230225073!2d74.33820331463046!3d31.505247055042073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904448caf68ed%3A0x72b6e03164e7be67!2sFirdous%20Mkt%20Rd%2C%20Block%20G%20Gulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1667480522703!5m2!1sen!2s"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <form
        className="my-form"
        action="https://formspree.io/f/xdojpjnz"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
          autoComplete="off"
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          required
          autoComplete="off"
          placeholder="Enterv Your Message"
        />
        <input className="sub-btn" type="submit" value="Send" />
      </form>
    </>
  );
};

export default ContactE;
