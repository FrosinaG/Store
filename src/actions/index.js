import {
    SET_LOGOUT,
    LOGIN,
    GET_PRODUCTS,
    SEARCH_PRODUCT,
    GET_PRODUCTS_SUCCESS

  } from "./actionTypes";
  
  export const login = (username, password) => ({
    type: LOGIN,
    paylod: { username, password },
  });
  
  export const logout = () => ({
    type: SET_LOGOUT,
  });
  
  export const getProducts = (products) => ({
    type: GET_PRODUCTS,
    paylod: products,
  });
  

  export const productSearch = (query) => ({
    type: SEARCH_PRODUCT,
   query
  });
  