import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import style from "./tienda.module.css";
import foto from "../../img/cardej.jpg";
import { Link } from "react-router-dom";
import productosData from "../../utils/patas.json";
import fileteadasData from "../../utils/fileteadas.json";
import tacosData from "../../utils/tacos.json";
import familiaresData from "../../utils/familiares.json";
import picadasData from "../../utils/picadas.json";

function Tienda() {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <div className={style.titulo}>
          <h1>PERNILES Y PATAS</h1>
        </div>
        <div className={style.cards}>
          {productosData.map((producto) => (
            <div className={style.card} key={producto.id}>
              <div>
                <img className={style.img} src={foto} alt="" />
              </div>
              <div className={style.nombre}>
                <h3>{producto.nombre}</h3>
              </div>
              <Link
                to={`/detalle/${producto.nombre
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
                className={style.boton}
              >
                <button className={style.btn}>Ver más</button>
              </Link>
            </div>
          ))}
        </div>
        <br /> {/* ACÁ HAY UN BR, ESTO ES TAREA DEL GORDO CSS */}
        <div className={style.titulo}>
          <h1>FILETEADAS</h1>
        </div>
        <div className={style.cards}>
          {fileteadasData.map((fileteada) => (
            <div className={style.card} key={fileteada.id}>
              <div>
                <img className={style.img} src={foto} alt="" />
              </div>
              <div className={style.nombre}>
                <h3>{fileteada.nombre}</h3>
              </div>
              <Link
                to={`/detalle/${fileteada.nombre
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
                className={style.boton}
              >
                <button className={style.btn}>Ver más</button>
              </Link>
            </div>
          ))}
        </div>
        <br /> {/* siguen los br */}
        <div className={style.titulo}>
          <h1>TACOS</h1>
        </div>
        <div className={style.cards}>
          {tacosData.map((taco) => (
            <div className={style.card} key={taco.id}>
              <div>
                <img className={style.img} src={foto} alt="" />
              </div>
              <div className={style.nombre}>
                <h3>{taco.nombre}</h3>
              </div>
              <Link
                to={`/detalle/${
                  taco.nombre
                    ? taco.nombre.toLowerCase().replace(/\s/g, "-")
                    : ""
                }`}
                className={style.boton}
              >
                <button className={style.btn}>Ver más</button>
              </Link>
            </div>
          ))}
        </div>
        <br /> {/* otro más */}
        <div className={style.titulo}>
          <h1>OPCIONES FAMILIARES</h1>
        </div>
        <div className={style.cards}>
          {familiaresData.map((familiares) => (
            <div className={style.card} key={familiares.id}>
              <div>
                <img className={style.img} src={foto} alt="" />
              </div>
              <div className={style.nombre}>
                <h3>{familiares.nombre}</h3>
              </div>
              <Link
                to={`/detalle/${
                  familiares.nombre
                    ? familiares.nombre.toLowerCase().replace(/\s/g, "-")
                    : ""
                }`}
                className={style.boton}
              >
                <button className={style.btn}>Ver más</button>
              </Link>
            </div>
          ))}
        </div>
        <br /> {/* EL ÚLTIMO CON ESTE NO JODO MÁS */}
        <div className={style.titulo}>
          <h1>PICADAS</h1>
        </div>
        <div className={style.cards}>
          {picadasData.map((picadas) => (
            <div className={style.card} key={picadas.id}>
              <div>
                <img className={style.img} src={foto} alt="" />
              </div>
              <div className={style.nombre}>
                <h3>{picadas.nombre}</h3>
              </div>
              <Link
                to={`/detalle/${
                  picadas.nombre
                    ? picadas.nombre.toLowerCase().replace(/\s/g, "-")
                    : ""
                }`}
                className={style.boton}
              >
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
