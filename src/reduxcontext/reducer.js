export const cartData = (data = [], action) => {
  if (action.type === "ADD_TO_CART") {
    console.log("ADD_TO_CART condition", action);
    return [...data, action.payload];
  }
  return [];
};
