import { Link } from "react-router-dom";
import style from "./navBar.module.css";

function NavBar() {
  return (
    <div className={style.container}>
      <Link className={style.link}>Inicio</Link>
      <Link className={style.link}>Nosotros</Link>
      <Link className={style.link}>Servicios</Link>
      <Link className={style.link}>Contacto</Link>
    </div>
  );
}

export default NavBar;
