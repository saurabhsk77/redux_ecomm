import { takeEvery, put } from "redux-saga/effects";
import { SET_PRODUCT_LIST, PRODUCT_LIST, PRODUCT_SEARCH } from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/products");
  data = yield data.json();
  console.warn("get product api called", data);
  yield put({ type: SET_PRODUCT_LIST, payload: data });
}

function* searchProduct(data) {
  let result = yield fetch(`http://localhost:3500/products?q=${data.payload}`);
  result = yield result.json();
  yield put({ type: SET_PRODUCT_LIST, payload: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(PRODUCT_SEARCH, searchProduct);
}

export default productSaga;
