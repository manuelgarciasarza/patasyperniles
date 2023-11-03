import style from "./info.module.css";
import logo from "../../img/logo.png";

function Info() {
  return (
    <div class={style.container}>
      <div class={style.gridItem}>
        <h3>Zonas de Entrega</h3>
        <p>Capital Federal</p>
        <p>Buenos Aires Zona Norte</p>
        <p>Buenos Aires Zona Oeste</p>
      </div>
      <div class={style.gridItemMid}>
        <img className={style.img} src={logo} alt="logo" />
      </div>
      <div class={style.gridItem}>
        <h3>Horarios de Atención</h3>
        <p>Lunes a Sabados:10AM-20PM</p>
        <p>Domingos:9AM-12PM</p>
      </div>
      <div class={style.gridItem}>
        <h3>Horarios de Entrega</h3>
        <p>Lunes a Viernes:11AM-20PM</p>
        <p>Sabados:11AM-21PM</p>
        <p>Domingos:11AM-12PM</p>
      </div>
      <div class={style.gridItem}>
        <h3>Medios de Pago</h3>
        <p>Aceptamos tarjetas de crédito,</p>
        <p>debito, mercado pago, efectivo</p>
        <p>y transferencias</p>
      </div>
    </div>
  );
}

export default Info;
