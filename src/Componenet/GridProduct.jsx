import React from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";
const GridProduct = ({ curElem }) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="product-data">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="product-card">
          <h3>{name}</h3>
          <p>{`pkr${price}`}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default GridProduct;
