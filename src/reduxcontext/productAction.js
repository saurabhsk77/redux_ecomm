import { PRODUCT_LIST } from "./constant";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

// export const setProductList = (data) => {
//   console.warn("Set action");
//   return {
//     type: "SET_PRODUCT_LIST",
//     payload: data,
//   };
// };
