import { CLEAR_CART, ADD_TO_CART } from "./constant";

export const addToCart = (data) => {
  console.warn("action is called", data);
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const clearCart = () => {
  console.warn("clearCart action is called");
  return {
    type: CLEAR_CART,
  };
};
