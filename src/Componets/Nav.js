import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { SET_LOGOUT } from "../actions/actionTypes";

const Nav = () => {
  const loggedIn = useSelector((state) => state.loginReducer.loggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: SET_LOGOUT });
  };

  const { cartTotalQuantity } = useSelector((state) => state.cartReducer.carts);
  
  return (
    <div className="navCont nav-mob">
      <ul className="nav justify-content-center mob-ul">
        <Link to="/">
          <img src={logo} alt="logo" className="logo " />
        </Link>
        <li className="nav-item liMob ">
          <Link to="/" className="nav-link linkNav" aria-current="page">
            <HomeIcon area-label="home" size="small" color="whitе" />
            Home
          </Link>
        </li>
        <li className="nav-item liMob ">
          <Link to="shop" className="nav-link linkNav">
            Shop
          </Link>
        </li>
        <li className="nav-item liMob ">
          <Link to="contact" className="nav-link linkNav">
            Contact
          </Link>
        </li>
        <li className="nav-item liMob ">
          {!loggedIn ? (
            <Link to="login" className="nav-link linkNav">
              Login <VpnKeyIcon area-label="home" size="small" color="whitе" />
            </Link>
          ) : (
            <Link
              to="login"
              className="nav-link linkNav"
              onClick={(e) => handleLogout()}
            >
              Logout
              <VpnKeyIcon area-label="home" size="small" color="whitе" />
            </Link>
          )}
        </li>
        <li className="nav-item liMob1 ">
          <Link to="cart" className="cartlink nav-link linkNav">
            <ShoppingCartIcon color="whitе" size="small" />

            <span className="bag-qoantity">
              <span>{cartTotalQuantity}</span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
