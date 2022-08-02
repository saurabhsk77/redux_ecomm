import { PRODUCT_LIST, PRODUCT_SEARCH } from "./constant";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

export const productSearch = (searchKey) => {
  return {
    type: PRODUCT_SEARCH,
    payload: searchKey,
  };
};

// export const setProductList = (data) => {
//   console.warn("Set action");
//   return {
//     type: "SET_PRODUCT_LIST",
//     payload: data,
//   };
// };
