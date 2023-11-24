import style from "./bestProducts.module.css";
import foto from "../../img/cardej.jpg";

function BestProducts() {
  return (
    <div className={style.container}>
      <div className={style.titulo}>
        <h1>NUESTROS DESTACADOS</h1>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <div>
            <img className={style.img} src={foto} alt="" />
          </div>
          <div className={style.nombre}>
            <h3>PERNILES Y PATAS</h3>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img className={style.img} src={foto} alt="" />
          </div>
          <div className={style.nombre}>
            <h3>FILETEADAS</h3>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img className={style.img} src={foto} alt="" />
          </div>
          <div className={style.nombre}>
            <h3>TACOS</h3>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img className={style.img} src={foto} alt="" />
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
