import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { SET_LOGIN, LOGIN } from "../actions/actionTypes";
import { useNavigate } from "react-router-dom";

function userLogin(username, password) {
  return axios
    .post("http://localhost:5000/users/login", null, {
      params: {
        username,
        password,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}

function* login(payload) {
  const username = payload.username || "";
  const password = payload.password || "";
  const navigate = payload.navigate || null;
  const response = yield call(userLogin, username, password);
  if (response.status === 200) {
    yield put({ type: SET_LOGIN, response });
    navigate("/cart");
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN, login);
}

export default loginSaga;