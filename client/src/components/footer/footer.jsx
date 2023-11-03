import { Link } from "react-router-dom";

import facebook from "../../img/BiFacebook.png";
import instagram from "../../img/BiInstagram.png";
import whatsApp from "../../img/BiWhatsapp.png";

import style from "./footer.module.css";

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h3>Patas y Perniles - Cocina Gourmet</h3>
      </div>
      <div className={style.footerInfo}>
        <div className={style.infoLeft}>
          <p>Buenos Aires, Argentina</p>
          <p>Oficialwebsite@patasyperniles.com</p>
          <p>+54 XX XXXX XXXX</p>
        </div>
        <div className={style.links}>
          <h5>Páginas Principales</h5>
          <Link className={style.link}>Inicio</Link>
          <Link className={style.link}>Productos Destacados</Link>
          <Link className={style.link}>Tienda</Link>
          <Link className={style.link}>Opinion</Link>
          <Link className={style.link}>Contacto</Link>
        </div>
      </div>
      <div className={style.redes}>
        <a href="https://www.facebook.com/">
          <img className={style.img} src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <img className={style.img} src={instagram} alt="instagram" />
        </a>
        <a href="">
          <img className={style.img} src={whatsApp} alt="whatsapp" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
