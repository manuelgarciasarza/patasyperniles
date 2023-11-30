import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import style from "./cart.module.css";
import Extras from "../../components/extras/extras";

const ShoppingCart = () => {
  const carrito = useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const prepareWhatsAppMessage = () => {
    const message = `Hola, quiero comprar:\n\n`;
    return encodeURIComponent(message);
  };

  const openWhatsApp = () => {
    const phoneNumber = "+5492966692490";
    const message = prepareWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div>
      <Header />
      <div className={style.container}>
        <h2>Carrito de Compras</h2>
        <button className={style.btn} onClick={() => navigate("/tienda")}>
          <span>&#8592;</span> Volver
        </button>
        {carrito.length > 0 ? (
          <>
            {carrito.map((item, index) => (
              <div key={item.product.id} className={style.cart}>
                <p>
                  {index + 1}. {item.product.nombre}
                </p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: {item.price}</p>
                <button
                  className={style.btn}
                  onClick={() => dispatch(deleteFromCart(item.product.id))}
                >
                  X
                </button>
              </div>
            ))}
            <div>
              <Extras />
            </div>
          </>
        ) : (
          <p>No hay productos en el carrito</p>
        )}
        <button className={style.btn} onClick={openWhatsApp}>
          Hacer el pedido
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
