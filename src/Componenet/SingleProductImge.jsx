import React from "react";
import { useState } from "react";
import "./SingleProduct.css";

const SingleProductImge = ({ imgs = [{ url: "" }] }) => {
  const [imageState, setImgeState] = useState(imgs[0]);

  return (
    <>
      <div className="">
        <div className="imges-clickable">
          <div className="imges-clickable-one">
            {imgs.map((curElem, index) => {
              return (
                <figure key={index}>
                  <img
                    src={curElem.url}
                    alt={curElem.filename}
                    key={index}
                    onClick={() => setImgeState(curElem)}
                  />
                </figure>
              );
            })}
          </div>
          <div className="imges-clickable-two">
            <figure>
              <img src={imageState.url} alt={imageState.filename} />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductImge;
