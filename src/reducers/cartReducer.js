import {
  ADD_TO_CART,
  REMOVE_FROM_CARD,
  EMPTY_CART,
  GET_TOTAL_CART, DECREASE_CART,
} from "../actions/actionTypes";
import { toast } from "react-toastify";

const initialState = {
  carts: localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemIndex = state.carts.findIndex(
          (item) => item.id === action.product.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].cartQuantity += 1;
        toast.info(`${state.carts[itemIndex].name}`, {
          positon: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.product, cartQuantity: 1 };
        state.carts.push(tempProduct);
        toast.success(`${action.product.name} added to cart`, {
          positon: "bottom-left",
        });
      }
      localStorage.setItem("carts", JSON.stringify(state.carts));
      return {
        ...state
      }
    case REMOVE_FROM_CARD:
      const cartsUpdated = state.carts.filter(
          (carts) => carts.id !== action.product.id
      );
      localStorage.setItem("carts", JSON.stringify(cartsUpdated));
      return {
        ...state,
        carts: cartsUpdated
      };
    case DECREASE_CART:
      let updatedCarts = state.carts
      let cartIndex = state.carts.findIndex(
          (cartItems) => cartItems.id === action.product.id
      );
      if (state.carts[cartIndex].cartQuantity > 1) {
        updatedCarts[cartIndex].cartQuantity -= 1;

        toast.info(`Decreased${action.product.name} cart quantity`, {
          positon: "bottom-left",
        });
      } else if (state.carts[cartIndex].cartQuantity === 1) {
        updatedCarts = state.carts.filter(
            (cartItems) => cartItems.id !== action.product.id
        );
        toast.error(`${action.product.title} remove from cart`, {
          positon: "bottom-left",
        });
      }
      localStorage.setItem("carts", JSON.stringify(updatedCarts));
      return {
        ...state,
        carts: updatedCarts
      };
    case EMPTY_CART:
      localStorage.setItem("carts", JSON.stringify([]));
      return {
        ...state,
        carts: []
      };
    case GET_TOTAL_CART:
      let { total, quantity } = state.carts.reduce(
          (cartTotal, cartItem) => {
            const { price, cartQuantity } = cartItem;
            const itemTotal = price * cartQuantity;
            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity;
            return cartTotal;
          },
          {
            total: 0,
            quantity: 0,
          }
      );
      return {
        ...state,
        cartTotalQuantity:quantity,
        cartTotalAmount: total,
      }
    default:
      return state;
  }
}

export default cartReducer;
