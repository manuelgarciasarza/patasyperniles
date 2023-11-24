import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import style from "../detail.module.css";
import productosData from "../../../utils/patas.json";
import fileteadasData from "../../../utils/fileteadas.json";
import imagenPernil from "../../../img/banner11.jpg";
import tacosData from "../../../utils/tacos.json";
import familiaresData from "../../../utils/familiares.json";
import picadasData from "../../../utils/picadas.json";

function Detail() {
  const { productName } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [isFromProductos, setIsFromProductos] = useState(false);

  useEffect(() => {
    const foundProductInProductos = productosData.find(
      (producto) =>
        producto.nombre.toLowerCase().replace(/\s/g, "-") === productName
    );

    const foundProductInFileteadas = fileteadasData.find(
      (fileteada) =>
        fileteada.nombre.toLowerCase().replace(/\s/g, "-") === productName
    );

    const foundProductInTacos = tacosData.find(
      (tacos) => tacos.nombre.toLowerCase().replace(/\s/g, "-") === productName
    );

    const foundProductInFamiliares = familiaresData.find(
      (familiares) =>
        familiares.nombre.toLowerCase().replace(/\s/g, "-") === productName
    );

    const foundProductInPicadas = picadasData.find(
      (picadas) =>
        picadas.nombre.toLowerCase().replace(/\s/g, "-") === productName
    );

    if (foundProductInProductos) {
      setProductInfo(foundProductInProductos);
      setIsFromProductos(true);
    } else if (foundProductInFileteadas) {
      setProductInfo(foundProductInFileteadas);
      setIsFromProductos(false);
    } else if (foundProductInTacos) {
      setProductInfo(foundProductInTacos);
      setIsFromProductos(false);
    } else if (foundProductInFamiliares) {
      setProductInfo(foundProductInFamiliares);
      setIsFromProductos(false);
    } else if (foundProductInPicadas) {
      setProductInfo(foundProductInPicadas);
      setIsFromProductos(false);
    }
  }, [productName]);

  const [selectedOption, setSelectedOption] = useState("10");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;

    if (productInfo && productInfo.porciones) {
      const prices = productInfo.porciones.reduce((acc, porcion) => {
        acc[porcion.cantidad.toString()] = `$${porcion.precio}`;
        return acc;
      }, {});

      setSelectedOption(selectedValue);
      setSelectedPrice(prices[selectedValue] || "");
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
            <h1 className={style.title}>{productInfo.nombre}</h1>
          </div>
          <div className={style.content}>
            <div className={style.imgCont}>
              <img className={style.img} src={imagenPernil} alt="" />
            </div>{" "}
            <div className={style.info}>
              <div className={style.descripcion}>
                <p>{productInfo.descripcion}</p>
              </div>
              <div>
                <div className={style.cantidad}>
                  <p>Cantidad de comensales:</p>
                  <select
                    name=""
                    id=""
                    value={selectedOption}
                    onChange={handleOptionChange}
                  >
                    <option value="">Seleccione una cantidad</option>
                    {productInfo.porciones.map((porcion) => (
                      <option key={porcion.cantidad} value={porcion.cantidad}>
                        {porcion.cantidad}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={style.precio}>
                  <p>Precio:</p>
                  <p>{selectedPrice}</p>
                </div>
                <div>
                  <button className={style.btn} onClick={setCarrito}>
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={style.extraInfo}>
            {productInfo.preparacion !== null && (
              <>
                <hr className={style.hr} />
                <h2 className={style.h2}>Realización</h2>
                <p>{productInfo.preparacion}</p>
              </>
            )}
          </div>

          <div className={style.extraInfo}>
            {productInfo.presentacion !== null && (
              <>
                <hr className={style.hr} />
                <h2 className={style.h2}>Presentación</h2>
                <p>{productInfo.presentacion}</p>
              </>
            )}
          </div>

          <div className={style.extraInfo}>
            {productInfo.fileteador !== null && (
              <>
                <hr className={style.hr} />
                <h2 className={style.h2}>Fileteador Contratado</h2>
                <p>{productInfo.fileteador}</p>
              </>
            )}
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
