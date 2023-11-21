import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import style from "./tienda.module.css";
import foto from "../../img/cardej.jpg";
import { Link } from "react-router-dom";
import productosData from "../../utils/patas.json";

function Tienda() {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <div className={style.titulo}>
          <h1>NUESTROS PRODUCTOS</h1>
        </div>
        <div className={style.cards}>
          {productosData.map((producto) => (
            <div className={style.card} key={producto.id}>
              <div>
                <img className={style.img} src={foto} alt="" />
              </div>
              <div className={style.nombre}>
                <h2>{producto.nombre}</h2>
              </div>
              
              <Link to={`/detalle/${producto.nombre.toLowerCase().replace(/\s/g, "-")}`} className={style.boton}>
  <button className={style.btn}>Ver más</button>
</Link>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tienda;
