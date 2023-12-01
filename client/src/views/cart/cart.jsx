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

  const calcularTotalCarrito = () => {
    const total = carrito.reduce((total, item) => {
      const formattedPrice = item.price.replace(/\D/g, ''); 
      const itemPrice = parseFloat(formattedPrice);
      return isNaN(itemPrice) ? total : total + itemPrice;
    }, 0);
  
    return total;
  };

  const [extrasTotal, setExtrasTotal] = useState(0);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    mail: "",
    direccion: "",
    ciudad: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (carrito.length === 0) {
      alert("Agrega productos al carrito antes de realizar un pedido");
      return;
    }
  
    const requiredFields = ["nombre", "telefono", "mail", "direccion", "ciudad"];
    const isValid = requiredFields.every((field) => formData[field].trim() !== "");
  
    if (isValid) {
      const productsList = carrito.map((item, index) => {
        return `${index + 1}. ${item.product.nombre} - Precio: ${item.price}`;
      });
  
      const totalPrice = calcularTotalCarrito() + extrasTotal;
  
      let message = `Hola, quiero comprar:\n${productsList.join('\n')}\n\nPrecio final: $${totalPrice}\n`;
      
      if (formData.extras) {
        message += "\nExtras:\n";
        formData.extras.forEach((extra, index) => {
          message += `${index + 1}. ${extra.nombre} - Cantidad: ${extra.cantidad}, Precio: ${extra.precio}\n`;
        });
      }

      message += `\nNombre: ${formData.nombre}\nTeléfono: ${formData.telefono}\nCorreo: ${formData.mail}\nDirección: ${formData.direccion}\nCiudad: ${formData.ciudad}`;
  
      const encodedMessage = encodeURIComponent(message);
  
      const phoneNumber = "+5492966692490";
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    } else {
      alert("Por favor, completa todos los campos requeridos");
    }
  };
  
  

  const handleExtrasTotal = (total) => {
    setExtrasTotal(total);
  };
  

  const prepareWhatsAppMessage = () => {
    const message = `Hola, quiero comprar:\n\nNombre: ${formData.nombre}\nApellido: ${formData.apellido}\nTeléfono: ${formData.telefono}\nCorreo: ${formData.mail}\nDirección: ${formData.direccion}\nCiudad: ${formData.ciudad}`;
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
           <div className={style.total}>
           <p>Subtotal carrito: ${calcularTotalCarrito()}</p>
           <Extras
    onExtrasTotal={handleExtrasTotal}
    calculateTotalCarrito={calcularTotalCarrito}
    extrasTotal={extrasTotal} 
  />
        <p>Total de extras: ${extrasTotal}</p>
        <p>Precio final: ${calcularTotalCarrito() + extrasTotal}</p>
      </div>
          </>
        ) : (
          <p>No hay productos en el carrito</p>
        )}

<form onSubmit={handleSubmit}>
  <div>
    <div>
      <label htmlFor="nombre">Nombre y apellido:</label>
      <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required />
    </div>
    <div>
      <label htmlFor="telefono">Número de teléfono:</label>
      <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} required />
    </div>
    <div>
      <label htmlFor="mail">Correo:</label>
      <input type="text" id="mail" name="mail" value={formData.mail} onChange={handleInputChange} required />
    </div>
    <div>
      <label htmlFor="direccion">Dirección:</label>
      <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleInputChange} required />
    </div>
    <div>
      <label htmlFor="ciudad">Ciudad:</label>
      <input type="text" id="ciudad" name="ciudad" value={formData.ciudad} onChange={handleInputChange} required />
    </div>
  </div>
  <button type="submit" className={style.btn} >
    Hacer el pedido
  </button>
</form>

      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
