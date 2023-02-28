import axios from "axios";
import { put, call, takeEvery } from "redux-saga/effects";
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS } from "../actions/actionTypes";

export function* fetchProducts() {
  return fetch("http://localhost:5000/products").then(
    (response) => response.data
  );
}

export function* getAllProducts() {
  const products = yield call(fetchProducts);
  yield put({ type: GET_PRODUCTS_SUCCESS, products });
}

export function* searchProduct(products) {
  return fetch(`http://localhost:5000/products?q=${products.query}`).then(
    (response) => response.data
  );
}
export function* getSearch() {
  const result = yield call(fetchProducts);
  yield put({ type: GET_PRODUCTS_SUCCESS, products: result });
}

export function* productsSaga() {
  yield takeEvery(GET_PRODUCTS, getAllProducts);
  yield takeEvery(GET_PRODUCTS, getSearch);
}
