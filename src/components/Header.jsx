import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.warn(result);
  return (
    <div>
      cart items <span>{result.length}</span>
    </div>
  );
};
