import {
  GET_PRODUCTS,
  SEARCH_PRODUCT,
  GET_PRODUCTS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  products: [],
  filteredProducts: [],
};

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
      };
    case GET_PRODUCTS:
      return state.products;

    case SEARCH_PRODUCT:
      state.filteredProducts = state.products.filter((product) =>
        product.name.toLowerCase().includes(action.payload)
      );
      return {
        ...state,
        filteredProducts: state.filteredProducts,
      };
    default:
      return state;
  }
};

export default productsReducer;
