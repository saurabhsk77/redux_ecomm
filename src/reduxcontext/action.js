import { CLEAR_CART, ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
  console.warn("action is called", data);
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const clearCart = () => {
  console.warn("clearCart action is called");
  return {
    type: CLEAR_CART,
  };
};
