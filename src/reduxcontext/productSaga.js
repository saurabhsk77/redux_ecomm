import { takeEvery, put } from "redux-saga/effects";
import { SET_PRODUCT_LIST, PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/products");
  data = yield data.json();
  console.warn("get product api called", data);
  yield put({ type: SET_PRODUCT_LIST, payload: data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
