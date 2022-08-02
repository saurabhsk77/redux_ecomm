import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART condition", action);
      return [...data, action.payload];

    case CLEAR_CART:
      console.log("CLEAR_CART condition", action);
      return [];
    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART condition", action);
      const items = data.filter((item) => {
        return item.id !== action.payload;
      });
      return items;
    default:
      return data;
  }
};
