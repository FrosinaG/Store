import {
  SET_PRODUCTS,
  GET_PRODUCTS,
  SEARCH_PRODUCT,
} from "../actions/actionTypes";

const initialState = {
  products: [],
  filteredProducts: []
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
        filteredProducts: action.products,
      }
    case GET_PRODUCTS:
      return state.products;
    case SEARCH_PRODUCT:
      state.filteredProducts = state.products.filter(product =>
        product.name.toLowerCase().includes(action.word)
      );
      return {
        ...state,
        filteredProducts: state.filteredProducts
      };
    default:
      return state;
  }
}

export default productsReducer;
