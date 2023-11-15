import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ShoppingCart from "../cart/cart"; // Ajusta la ruta según tu estructura de archivos
import pernil from "../../img/banners.jpg";
import style from "./detail.module.css";

function Detail() {
  const [selectedOption, setSelectedOption] = useState("10");
  const [selectedPrice, setSelectedPrice] = useState("$28.300");
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;

    const prices = {
      10: "$28.300",
      15: "$32.500",
      20: "$41.000",
      30: "$53.100",
      40: "$65.200",
      50: "$95.100",
      60: "$102.900",
      70: "$119.500",
      80: "$155.400",
      100: "$172.100",
      150: "$259.000",
    };

    setSelectedOption(selectedValue);
    setSelectedPrice(prices[selectedValue]);
  };

  const addToCart = () => {
    const product = {
      name: `Producto ${selectedOption}`, // Puedes ajustar esto según la lógica de tu aplicación
      price: selectedPrice,
      quantity: selectedOption,
    };

    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <Header />
      <div>
        <div>
          <div>
            <img src={pernil} alt="" />
          </div>
        </div>
        <div>
          <div>
            <p>discrisp</p>
          </div>
          <div>
            <div>
              <select
                name=""
                id=""
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="100">100</option>
                <option value="150">150</option>
              </select>
            </div>
            <div>
              <p>{selectedPrice}</p>
              <button onClick={addToCart}>Agregar al Carrito</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* Pasar el carrito como prop al componente ShoppingCart */}
      <ShoppingCart
        cart={cart}
        name={name}
        setName={setName}
        lastName={lastName}
        setLastName={setLastName}
      />
    </div>
  );
}

export default Detail;
