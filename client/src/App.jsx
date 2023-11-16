import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

// components
import Home from "./views/home/home.jsx";
import Tienda from "./views/tienda/tienda.jsx";
import Detail1 from "./views/detail/detail1/detail1.jsx";
import Detail2 from "./views/detail/detail2/detail2.jsx";
import Detail3 from "./views/detail/detail3/detail3.jsx";
import Cart from "./views/cart/cart";

function MainApp() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/pernil-de-cerdo" element={<Detail1 />} />
          <Route path="/pata-de-ternera" element={<Detail2 />} />
          <Route path="/combinado-cerdo-ternera" element={<Detail3 />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainApp;
