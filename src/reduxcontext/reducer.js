import { ADD_TO_CART, CLEAR_CART } from "./constant";

export const cartData = (data = [], action) => {
  if (action.type === ADD_TO_CART) {
    console.log("ADD_TO_CART condition", action);
    return [...data, action.payload];
  }
  if (action.type === CLEAR_CART) {
    console.log("CLEAR_CART condition", action);
    return [];
  }
  return [];
};
