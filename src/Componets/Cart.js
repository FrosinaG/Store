import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link, useNavigate } from "react-router-dom";

import {
  decreaseCart,
  emptyCart,
  increseCart,
  removeFromCart,
  setTotal,
} from "../actions";

const Cart = () => {
  const { carts, cartTotalAmount } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    dispatch(setTotal());
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
    dispatch(setTotal());
  };
  const handleIncreaseCart = (product) => {
    dispatch(increseCart(product));
    dispatch(setTotal());
  };
  const handleClearCart = () => {
    dispatch(emptyCart());
  };
  return (
    <div className="cartContainer">
      <Typography variant="h3">Shopping Cart</Typography>
      {carts.length === 0 ? (
        <div className="cartEmpty">
          <Typography variant="body1">Your Cart Is Empty</Typography>
          <div className="start-shopping">
            <Link to="/shop" className="start-shopping">
              <ArrowBackIcon />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="titles">
            <div className="cart-items">
              {carts.map((cart) => (
                <div className="allOfCart" key={cart.id}>
                  <div className="cart-item">
                    <div className="cart-product">
                      <div className="cart-thumbnail part1">
                        <img
                          src={cart.images}
                          alt={cart.name}
                          className="img-thum"
                        />
                      </div>
                      <div className=" part1">
                        <h3 className="h-cart">Product</h3>
                        <h2>{cart.name}</h2>
                        <p className="card-text">
                          <b>Description :</b> {cart.description}
                        </p>
                        <p>
                          <StarRateIcon />
                          <StarRateIcon />
                          <StarRateIcon />
                          <StarRateIcon />
                          <StarRateIcon />
                          {cart.rating}
                        </p>
                      </div>
                      <div className=" part1">
                        <h3 className="h-cart">Price</h3>
                        <div className="product-price ">
                          <p className="price1 price ">${cart.price}</p>
                        </div>
                      </div>
                      <div className="part1">
                        <h3 className="h-cart">Quantity</h3>
                        <div className="buttonQ">
                          <span
                            onClick={() => handleDecreaseCart(cart)}
                            className="btn btn-outline-secondary"
                          >
                            -
                          </span>
                          <div className="cart-qua">{cart.cartQuantity}</div>
                          <span
                            onClick={() => handleIncreaseCart(cart)}
                            className="btn btn-outline-secondary"
                          >
                            +
                          </span>
                        </div>
                      </div>
                      <div className="cart-total-price part1">
                        <h3 className="h-cart">Total</h3>
                        <p className="totalPrice price ">
                          ${cart.price * cart.cartQuantity}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="remove-btn">
                    <Button onClick={() => handleRemoveFromCart(cart)}>
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="end-cart">
              <div className="cart-summary">
                <Button variant="contained" onClick={() => handleClearCart()}>
                  <DeleteForeverIcon />
                  Clear cart
                </Button>
                <Link to="/shop" className="start-shopping">
                  <ArrowBackIcon />
                  <span>Continue Shopping</span>
                </Link>
              </div>
              <div className="totalEnd">
                <span> Total ${cartTotalAmount}</span>
              </div>
            </div>
          </div>
        </>
      )}
      <Button className=" logout-btn" onClick={logout} variant="contained">
        Log out
      </Button>
    </div>
  );
};

export default Cart;
