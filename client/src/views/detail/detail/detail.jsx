import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import style from "../detail.module.css";
import productosData from "../../../utils/patas.json";
import imagenPernil from "../../../img/banner11.jpg"; 

function Detail() {
  const { productName } = useParams();
  const [productInfo, setProductInfo] = useState(null); 

  useEffect(() => {
    const foundProduct = productosData.find(
      (producto) =>
        producto.nombre.toLowerCase().replace(/\s/g, "-") === productName
    );    
  
    if (foundProduct) {
      setProductInfo(foundProduct);
    }
  }, [productName]);
  

  const [selectedOption, setSelectedOption] = useState("10");
  const [selectedPrice, setSelectedPrice] = useState("$28.300");

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;

    if (productInfo && productInfo.porciones) {
      const prices = productInfo.porciones.reduce((acc, porcion) => {
        acc[porcion.cantidad.toString()] = `$${porcion.precio}`;
        return acc;
      }, {});

      setSelectedOption(selectedValue);
      setSelectedPrice(prices[selectedValue]);
    }
  };

  const setCarrito = () => {
    try {
      const newProduct = {
        name: productInfo ? productInfo.nombre : "",
        amount: selectedOption,
        price: selectedPrice,
      };
      localStorage.setItem("productInCart", JSON.stringify(newProduct));
    } catch (error) {
      console.log(error);
    }
    console.log(JSON.parse(localStorage.getItem("productInCart")));
  };

  return (
    <div>
      <Header />
      {productInfo ? (
        <div className={style.container}>
          <div>
            <div>{productInfo.nombre}</div>
            <div>
              <img src={imagenPernil} alt="" /> 
            </div>
          </div>
          <div>
            <div>
              <p>{productInfo.descripcion}</p>
            </div>
            <div>
              <div>
                <select
                  name=""
                  id=""
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  {productInfo.porciones.map((porcion) => (
                    <option key={porcion.cantidad} value={porcion.cantidad}>
                      {porcion.cantidad}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p>{selectedPrice}</p>
                <button onClick={setCarrito}>Agregar al Carrito</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
      <Footer />
    </div>
  );
  
}

export default Detail;
