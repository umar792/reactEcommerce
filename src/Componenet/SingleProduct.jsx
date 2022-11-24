import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/Productcontext";
import Loading from "../Loading/Loading";
import SingleProductImge from "./SingleProductImge";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "./SingleProduct.css";
import AddToCard from "./AddToCard";

const API = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const { isSingleLoading, singleProduct, getSingleProduct } =
    useProductContext();

  const { id } = useParams();

  const { name, company, price, description, stock, reviews, stars, image } =
    singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  if (isSingleLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="singleProduct">
        <div className="s-img">
          <SingleProductImge imgs={image} />
        </div>
        <div className="s-deatiles">
          <h3 className="p-name">{name}</h3>
          <p className="rating">Ratting {stars}</p>
          <p className="review">Reviews {reviews}</p>
          <h4 className="s-price">Deal os the Day: pkr{price}</h4>
          <p className="discription">{description}</p>
          <div className="s-icons">
            <div className="s-icon1">
              <TbTruckDelivery className="s-ico" />
              <p>Free Delivery</p>
            </div>
            <div className="s-icon1">
              <MdSecurity className="s-ico" />
              <p>Days Replacement</p>
            </div>
            <div className="s-icon1">
              <GiReceiveMoney className="s-ico" />
              <p>safe hand</p>
            </div>
            <div className="s-icon1">
              <RiSecurePaymentLine className="s-ico" />
              <p>Warranty</p>
            </div>
          </div>
          <hr />
          <p className="stock">
            Available: {stock > 0 ? "in Stock" : "Not in Stock"}
          </p>
          <p className="brand">Brand : {company}</p>
          <hr className="line" />
          {stock > 0 && <AddToCard product={singleProduct} />}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
