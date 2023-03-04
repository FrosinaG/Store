import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap";
import "./App.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Componets/Nav";
import Home from "./Componets/Home";
import Login from "./Componets/Login";
import { Contact } from "./Componets/Contact";
import Footer from "./Componets/Footer";
import NotFound from "./Componets/NotFound";
import Shop from "./Componets/Shop";
import Cart from "./Componets/Cart";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="cart" element={<Cart />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
