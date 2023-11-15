import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import style from "./tienda.module.css";
import foto from "../../img/cardej.jpg";
import { Link } from "react-router-dom";

function Tienda() {
  return (
    <div>
      <Header />{" "}
      <div className={style.container}>
        <div className={style.titulo}>
          <h1>NUESTROS PRODUCTOS</h1>
        </div>
        <div className={style.cards}>
          <div className={style.card}>
            <div>
              <img className={style.img} src={foto} alt="" />
            </div>
            <div className={style.nombre}>
              <h2>NOMBRE</h2>
            </div>
            <div className={style.desc}>
              <h3>Descripción</h3>
            </div>
          </div>

          <div className={style.card}>
            <div>
              <img className={style.img} src={foto} alt="" />
            </div>
            <div className={style.nombre}>
              <h2>NOMBRE</h2>
            </div>
            <div className={style.desc}>
              <h3>Descripción</h3>
            </div>
          </div>

          <div className={style.card}>
            <div>
              <img className={style.img} src={foto} alt="" />
            </div>
            <div className={style.nombre}>
              <h2>NOMBRE</h2>
            </div>
            <div className={style.desc}>
              <h3>Descripción</h3>
            </div>
            <div className={style.boton}>
              <Link to="/detail">
                <button className={style.btn}>Ver mas</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tienda;
