import React from "react";
import "./Services.css";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Services = () => {
  return (
    <>
      <div className="services">
        <div className="services1">
          <div className="box1 box">
            <TbTruckDelivery className="S-icon" />
            <h3>Super Fast and Free Delivery</h3>
          </div>
        </div>
        <div className="services2">
          <div className="box2 box">
            <MdSecurity className="S-icon" />
            <h3>Non-contact Shipping</h3>
          </div>
          <div className="box3 box">
            <GiReceiveMoney className="S-icon" />
            <h3>Money-back Guaranteed</h3>
          </div>
        </div>
        <div className="services3">
          <div className="box4 box">
            <RiSecurePaymentLine className="S-icon" />
            <h3>Super Secrure Payment System</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
