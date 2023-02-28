import { ADD_TO_CART, REMOVE_FROM_CARD } from "../actions/actionTypes";

const initialState = {
  name: "cart",
  initialState,
};
export const reducerCart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.products, ...state];
  }
};
