import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import loginSaga, { getProducts, login } from "../src/sagas/index";
import { productsSaga } from "./sagas/productsSaga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ loginSaga });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(loginSaga);
sagaMiddleware.run(productsSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
