import React from "react";
import { useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AddToCard = ({ product }) => {
  const [stockNumber, setstockNumber] = useState(1);
  const { id, colors, stock } = product;
  const [color, setColor] = useState();

  const Deacrease = () => {
    stockNumber > 1 ? setstockNumber(stockNumber - 1) : setstockNumber(1);
  };
  const Increase = () => {
    stockNumber < stock
      ? setstockNumber(stockNumber + 1)
      : setstockNumber(stock);
  };

  console.log(colors);
  return (
    <>
      <div className="colors">
        <p>
          Colors :
          {colors.map((curElem, index) => {
            return (
              <button
                className={
                  color === curElem ? "color-btn color-active" : "color-btn "
                }
                key={index}
                style={{ backgroundColor: curElem }}
                onClick={() => setColor(curElem)}
              >
                {color === curElem ? (
                  <FaCheck style={{ color: "white" }} />
                ) : null}
              </button>
            );
          })}
        </p>
      </div>
      <div className="stock-numbers">
        <div className="stock-btn">
          <button onClick={Deacrease} className="stock-btn">
            <FaMinus />
          </button>
          <p>{stockNumber}</p>
          <button onClick={Increase} className="stock-btn">
            <FaPlus />
          </button>
        </div>
        <NavLink to="/card">
          <button className="addtocard-btn">Add To Card</button>
        </NavLink>
      </div>
    </>
  );
};

export default AddToCard;
