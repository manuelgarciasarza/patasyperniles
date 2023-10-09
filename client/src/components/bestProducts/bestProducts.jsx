import style from "./bestProducts.module.css";
import foto from "../../img/cardej.jpg";

function BestProducts() {
  return (
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
      </div>
    </div>
  );
}

export default BestProducts;
