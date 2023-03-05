import {
  SET_LOGOUT,
  LOGIN,
  GET_PRODUCTS,
  SEARCH_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CARD,
  EMPTY_CART,
} from "./actionTypes";

export const login = (username, password) => ({
  type: LOGIN,
  paylod: { username, password },
});

export const logout = () => ({
  type: SET_LOGOUT,
});

export const products = (products) => ({
  type: GET_PRODUCTS,
  paylod: products,
});

export const searchProduct = (product) => ({
  type: SEARCH_PRODUCT,
});

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
  };
};
export const removeFromCart = () => {
  return {
    type: REMOVE_FROM_CARD,
  };
};
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
