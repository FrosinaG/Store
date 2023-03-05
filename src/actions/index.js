import {
  SET_LOGOUT,
  LOGIN,
  GET_PRODUCTS,
  SEARCH_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CARD,
  EMPTY_CART,
  DECREASE_CART,
  INCREASE_CARD,
  PRODUCTS,
  SET_TOTAL_CART,
  SET_SINGLE_PRODUCT,
} from "./actionTypes";

export const login = (username, password) => ({
  type: LOGIN,
  paylod: { username, password },
});

export const logout = () => ({
  type: SET_LOGOUT,
});
export const products = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const productsFetch = () => {
  return {
    type: PRODUCTS,
  };
};

export const searchProduct = (product) => ({
  type: SEARCH_PRODUCT,
});

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};
export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CARD,
    product,
  };
};
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
export const increseCart = (product) => {
  return {
    type: INCREASE_CARD,
    product,
  };
};
export const decreaseCart = (product) => {
  return {
    type: DECREASE_CART,
    product,
  };
};
export const singleProduct = () => {
  return {
    type: SET_SINGLE_PRODUCT,
  };
};
export const setTotal = () => {
  return {
    type: SET_TOTAL_CART,
  };
};
