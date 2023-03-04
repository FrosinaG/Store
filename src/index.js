import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { combineReducers, createStore, applyMiddleware } from "redux";
import loginSaga from "./sagas/loginSaga";
import productsSaga from "./sagas/productsSaga";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";
import loginReducer from "./reducers/loginReducer";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ cartReducer, productsReducer, loginReducer });
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
