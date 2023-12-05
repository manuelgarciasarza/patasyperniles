//imagenes
import perniles from "../../img/bannerUno.jpg";
import fileteada from "../../img/fileteadasBest.jpg";
import tacos from "../../img/tacosBest.jpg";
import familiares from "../../img/familiaresBest.jpg";

import style from "./bestProducts.module.css";
import { Link } from "react-router-dom";

function BestProducts() {
  return (
    <div className={style.container}>
      <div className={style.titulo}>
        <h1>NUESTROS DESTACADOS</h1>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <div>
            <Link to={"/tienda"}>
              <img className={style.img} src={perniles} alt="" />{" "}
            </Link>
          </div>
          <div className={style.nombre}>
            <h3>PERNILES Y PATAS</h3>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <Link to={"/tienda"}>
              <img className={style.img} src={fileteada} alt="" />
            </Link>
          </div>
          <div className={style.nombre}>
            <h3>FILETEADAS</h3>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <Link to={"/tienda"}>
              <img className={style.img} src={tacos} alt="" />
            </Link>
          </div>
          <div className={style.nombre}>
            <h3>TACOS</h3>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <Link to={"/tienda"}>
              <img className={style.img} src={familiares} alt="" />
            </Link>
          </div>
          <div className={style.nombre}>
            <h3>OPCIONES FAMILIARES</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestProducts;
