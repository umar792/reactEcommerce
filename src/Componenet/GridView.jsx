import React from "react";
import "./FeatureProduct.css";
import Products from "./Products";
import "./Product.css";
import Loading from "../Loading/Loading";
import { UseFiltercontext } from "../Context/FilterContext";

const GridView = ({ productdata }) => {
  const { isFilterLoading } = UseFiltercontext();
  if (isFilterLoading) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }

  return (
    <div className="feature">
      <div className="feature-content">
        <div className=" feature-products">
          {productdata.map((curElem, index) => {
            return <Products key={index} {...curElem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default GridView;
