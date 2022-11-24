import React from "react";
import ProductRightBody from "./ProductRightBody";
import ProductRightHeader from "./ProductRightHeader";
import "./Product.css";

const Product = () => {
  return (
    <>
      <div className="product-parent">
        <div className="product-right-side">
          <div className="product-right-header">
            <ProductRightHeader />
          </div>
          <div className="product-right-body">
            <ProductRightBody />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
