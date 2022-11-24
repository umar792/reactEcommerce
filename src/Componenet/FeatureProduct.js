import React from "react";
import { useProductContext } from "../Context/Productcontext";
import Products from "./Products";
import "./FeatureProduct.css";
import Loading from "../Loading/Loading";

const FeatureProduct = () => {
  const { isLoading, featureproducts } = useProductContext();
  if (isLoading) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="feature">
        <div className="feature-content">
          <p>Check Now!</p>
          <h1>Our Features Services</h1>
          <div className="feature-products">
            {featureproducts.map((curElem) => {
              return <Products key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
