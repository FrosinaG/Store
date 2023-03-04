import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
    PRODUCTS,
    SET_PRODUCTS,
} from "../actions/actionTypes";

function productsFetch() {
  return axios
      .get("http://localhost:5000/products")
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        return error
      })
}

export function* getProducts() {
    const products = yield call(productsFetch);
    yield put({ type: SET_PRODUCTS, products })
}

function* productsSaga() {
    yield takeEvery(PRODUCTS, getProducts);
}

export default productsSaga;
