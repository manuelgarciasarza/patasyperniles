import { Link } from "react-router-dom";
import style from "./navBar.module.css";

function NavBar() {
  return (
    <div className={style.container}>
      <Link to={"/"} className={style.link}>
        Inicio
      </Link>
      <p className={style.link}>|</p>
      <Link Link to={"/tienda"} className={style.link}>
        Tienda
      </Link>
      <p className={style.link}>|</p>
      <Link Link to={"/nosotros"} className={style.link}>
        Nosotros
      </Link>
      <p className={style.link}>|</p>
      <Link Link to={"/contacto"} className={style.link}>
        Contacto
      </Link>
    </div>
  );
}

export default NavBar;
