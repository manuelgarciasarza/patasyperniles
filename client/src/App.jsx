import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

// components
import Home from "./views/home/home.jsx";
import Tienda from "./views/tienda/tienda.jsx";
import Detail from "./views/detail/detail/detail.jsx";
import Cart from "./views/cart/cart";
import Contact from "./views/contact/contact.jsx";


function MainApp() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/detalle/:productName" element={<Detail />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainApp;
