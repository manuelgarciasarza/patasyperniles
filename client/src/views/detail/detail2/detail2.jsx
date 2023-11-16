import React, { useState } from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import pernil from "../../../img/banners.jpg";
import style from "../detail.module.css";

function Detail() {
  const [selectedOption, setSelectedOption] = useState("25");
  const [selectedPrice, setSelectedPrice] = useState("78.800");
  function setCarrito() {
    try {
      const newProduct = {
        name: "Pata de ternera",
        amount: selectedOption,
        price: selectedPrice,
      };
      localStorage.setItem("pataDeTernera", JSON.stringify(newProduct));
    } catch (error) {
      console.log(error);
    }
    console.log(JSON.parse(localStorage.getItem("pataDeTernera")));
  }

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;

    const prices = {
      25: "78.800",
      30: "82.400",
      40: "102.300",
      50: "125.800",
      60: "137.700",
      70: "147.800",
      80: "159.700",
      90: "175.600",
      100: "194.800",
      120: "234.500",
      140: "274.300",
      150: "293.100",
      200: "392.200",
    };

    setSelectedOption(selectedValue);
    setSelectedPrice(prices[selectedValue]);
  };

  return (
    <div>
      <Header />
      <div>
        <div>
          <div>Pata de Ternera</div>
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
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
                <option value="120">120</option>
                <option value="140">140</option>
                <option value="150">150</option>
                <option value="200">200</option>
              </select>
            </div>
            <div>
              <p>{selectedPrice}</p>
              <button onClick={setCarrito}>Agregar al Carrito</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
