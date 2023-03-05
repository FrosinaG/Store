import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { PRODUCT, SET_SINGLE_PRODUCT } from "../actions/actionTypes";

function productFetch(id) {
  return axios
    .get(`http://localhost:5000/products/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return error;
    });
}

export function* getProduct(payload) {
  const product = yield call(productFetch, payload.id);
  yield put({ type: SET_SINGLE_PRODUCT, product });
}

function* productSaga() {
  yield takeEvery(PRODUCT, getProduct);
}

export default productSaga;
