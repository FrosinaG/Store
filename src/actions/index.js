import {
  SET_LOGOUT,
  LOGIN,
  GET_PRODUCTS,
  SEARCH_PRODUCT,
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

// export const productsSuccess = (products) => ({
//   type: GET_PRODUCTS_SUCCESS,
//   paylod: products,
// });

// export const searchProduct = (query) => ({
//   type: GET_PRODUCTS,
//   paylod: query,
// });
// export const addToCart = (product) => {
//   return {
//     type: ADD_TO_CART,
//   };
// };
// export const removeFromCart = () => {
//   return {
//     type: REMOVE_FROM_CARD,
//   };
// };
// export const emptyCart = () => {
//   return {
//     type: EMPTY_CART,
//   };
// };
