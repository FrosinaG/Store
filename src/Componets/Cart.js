import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link, useNavigate } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  removeFromCart,
  getTotals,
} from "../Redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const HandleRemoveFromCart = (cartItems) => {
    dispatch(removeFromCart(cartItems));
  };
  const handleDecreaseCart = (cartItems) => {
    dispatch(decreaseCart(cartItems));
  };
  const handleIncreaseCart = (cartItems) => {
    dispatch(addToCart(cartItems));
  };
  const handleClearCart = (cartItems) => {
    dispatch(clearCart());
  };
  return (
    <div className="cartContainer">
      <Typography variant="h3">Shopping Cart</Typography>
      {cart.cartItems.length === 0 ? (
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
              {cart.cartItems?.map((cartItems) => (
                <div className="allOfCart" key={cartItems.id}>
                  <div className="cart-item">
                    <div className="cart-product">
                      <div className="cart-thumbnail part1">
                        <img
                          src={cartItems.images}
                          alt={cartItems.name}
                          className="img-thum"
                        />
                      </div>
                      <div className=" part1">
                        <h3 className="h-cart">Product</h3>
                        <h2>{cartItems.name}</h2>
                        <p className="card-text">
                          <b>Description :</b> {cartItems.description}
                        </p>
                        <p>
                          <StarRateIcon />
                          <StarRateIcon />
                          <StarRateIcon />
                          <StarRateIcon />
                          <StarRateIcon />
                          {cartItems.rating}
                        </p>
                      </div>
                      <div className=" part1">
                        <h3 className="h-cart">Price</h3>
                        <div className="product-price ">
                          <p className="price1 price ">${cartItems.price}</p>
                        </div>
                      </div>
                      <div className="part1">
                        <h3 className="h-cart">Quantity</h3>
                        <div className="buttonQ">
                          <span
                            onClick={() => handleDecreaseCart(cartItems)}
                            className="btn btn-outline-secondary"
                          >
                            -
                          </span>
                          <div className="cart-qua">
                            {cartItems.cartQuantity}
                          </div>
                          <span
                            onClick={() => handleIncreaseCart(cartItems)}
                            className="btn btn-outline-secondary"
                          >
                            +
                          </span>
                        </div>
                      </div>
                      <div className="cart-total-price part1">
                        <h3 className="h-cart">Total</h3>
                        <p className="totalPrice price ">
                          ${cartItems.price * cartItems.cartQuantity}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="remove-btn">
                    <Button onClick={() => HandleRemoveFromCart(cartItems)}>
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
                <span> Total ${cart.cartTotalAmount}</span>
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
