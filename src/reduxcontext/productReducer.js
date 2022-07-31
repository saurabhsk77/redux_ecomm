import { SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    // case "PRODUCT_LIST": {
    //   console.warn("product reducer is called", action);
    //   return [action.payload];
    // }
    case SET_PRODUCT_LIST: {
      console.warn("SET product reducer is called", action.payload);
      return [...action.payload];
    }
    default:
      return data;
  }
};
