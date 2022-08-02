import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import cart from "../images/cart.jpeg";
import { productSearch } from "../reduxcontext/productAction";

export const Header = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.cartData);
  console.warn("result", result);

  const handleSearch = (e) => {
    dispatch(productSearch(e.target.value));
  };

  return (
    <div className="cart_header">
      <Link to="/">
        <h2 className="logo">IConnect</h2>
      </Link>

      <input
        type="text"
        placeholder="search here"
        className="searchbox"
        onChange={handleSearch}
      />

      <Link to="/cart">
        <div>
          <img
            src={cart}
            alt=""
            onClick={() => {
              console.log("clicked");
            }}
          />
          <span>{result.length}</span>
        </div>
      </Link>
    </div>
  );
};
