import React from "react";
import { UseFiltercontext } from "../Context/FilterContext";
import GridView from "./GridView";
import "./Product.css";

const ProductRightBody = () => {
  const { FilterProduct } = UseFiltercontext();

  return (
    <>
      <GridView productdata={FilterProduct} />
    </>
  );
};

export default ProductRightBody;
