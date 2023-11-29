import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import style from "./tienda.module.css";
import { Link } from "react-router-dom";
import productosData from "../../utils/patas.json";
import fileteadasData from "../../utils/fileteadas.json";
import tacosData from "../../utils/tacos.json";
import familiaresData from "../../utils/familiares.json";
import picadasData from "../../utils/picadas.json";

function Tienda() {
  const renderProductos = (productos) => {
    return productos.map((producto) => {
      return (
        <div className={style.card} key={producto.id}>
          <div>
            <img className={style.img} src={producto.imagen} alt="" />
          </div>
          <div className={style.nombre}>
            <h3>{producto.nombre}</h3>
          </div>
          <Link
            to={`/detalle/${producto.nombre.toLowerCase().replace(/\s/g, "-")}`}
            className={style.boton}
          >
            <button className={style.btn}>Ver más</button>
          </Link>
        </div>
      );
    });
  };

  return (
    <div>
      <Header />
      <div className={style.container}>
        <div className={style.titulo}>
          <h1>PERNILES Y PATAS</h1>
        </div>
        <div className={style.cards}>{renderProductos(productosData)}</div>
        <br />
        <div className={style.titulo}>
          <h1>FILETEADAS</h1>
        </div>
        <div className={style.cards}>{renderProductos(fileteadasData)}</div>
        <br />
        <div className={style.titulo}>
          <h1>TACOS</h1>
        </div>
        <div className={style.cards}>{renderProductos(tacosData)}</div>
        <br />
        <div className={style.titulo}>
          <h1>OPCIONES FAMILIARES</h1>
        </div>
        <div className={style.cards}>{renderProductos(familiaresData)}</div>
        <br />
        <div className={style.titulo}>
          <h1>PICADAS</h1>
        </div>
        <div className={style.cards}>{renderProductos(picadasData)}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Tienda;
