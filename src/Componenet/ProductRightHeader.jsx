import React from "react";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { UseFiltercontext } from "../Context/FilterContext";

const ProductRightHeader = () => {
  const {
    FilterProduct,
    sorting,
    SerachData,
    search: { text },
  } = UseFiltercontext();
  const [toggle, setToggle] = useState(true);
  const toggleData = () => {
    setToggle(!toggle);
  };
  return (
    <div className="ProductRightHeader">
      <div>
        {toggle ? (
          <BiMenuAltLeft onClick={toggleData} className="toggle-left-side" />
        ) : (
          <BsArrowLeft onClick={toggleData} className="toggle-left-side" />
        )}

        <div className={toggle ? "leff" : "leff toggleleft"}>
          <div className="seacr-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Serach"
                value={text}
                name="text"
                onChange={SerachData}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="lenght">
        <p>{`${FilterProduct.length} Products`}</p>
      </div>
      <div className="serach">
        <div className="slect-option">
          <select id="sort" onClick={sorting}>
            <option value="z-a">Price(z-a)</option>
            <option value="lowest">Price(Lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Price(a-z)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductRightHeader;
