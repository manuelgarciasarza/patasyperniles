import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const ShoppingCart = ({
  cart,
  setCart,
  name,
  setName,
  lastName,
  setLastName,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const prepareWhatsAppMessage = () => {
    const message = `Hola, quiero comprar:\n\n${cart
      .map(
        (product) =>
          `${product.name} - ${product.quantity} personas - ${product.price}`
      )
      .join(
        "\n"
      )}\n\nPrecio total: $${totalPrice}\n\nMis datos son:\nNombre: ${name}\nApellido: ${lastName}`;
    return encodeURIComponent(message);
  };

  const openWhatsApp = () => {
    const phoneNumber = "+54 9 2966 69-2490";
    const message = prepareWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  useEffect(() => {
    // Calcular el precio total cada vez que cambia el carrito
    const total = cart.reduce(
      (sum, product) => sum + parseFloat(product.price),
      0
    );
    setTotalPrice(total);
  }, [cart]);

  return (
    <div>
      <Header />
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No tienes productos agregados al carrito.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - {product.quantity} personas - ${product.price}{" "}
              <button onClick={() => removeFromCart(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button onClick={openWhatsApp}>Enviar a WhatsApp</button>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
