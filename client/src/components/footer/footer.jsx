import { Link } from "react-router-dom";

import facebook from "../../img/BiFacebook.png";
import instagram from "../../img/BiInstagram.png";
import whatsApp from "../../img/BiWhatsapp.png";

import style from "./footer.module.css";

function Footer() {
  const openWhatsApp = () => {
    const phoneNumber = "+5491135789595";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h3>patasyperniles.com - Gastronomía Gourmet</h3>
        <p>Unidos por el buen gusto</p>
      </div>
      <div className={style.footerInfo}>
        <div className={style.infoLeft}>
          <p>Buenos Aires, Argentina</p>
          <p>patasyperniles1@gmail.com</p>
          <p>+54 9 11 3578-9595</p>
        </div>
        <div className={style.links}>
          <h5>Páginas Principales</h5>
          <Link Link to={"/"} className={style.link}>
            Inicio
          </Link>
          <Link Link to={"/tienda"} className={style.link}>
            Tienda
          </Link>
          <Link Link to={"/nosotros"} className={style.link}>
            Nosotros
          </Link>
          <Link Link to={"/contacto"} className={style.link}>
            Contacto
          </Link>
        </div>
      </div>
      <div className={style.redes}>
        <a href="https://www.facebook.com/profile.php?id=100084183011408&mibextid=ZbWKwL">
          <img className={style.img} src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/patas_perniles_ypicadas?utm_source=qr&igshid=OGIxMTE0OTdkZA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={style.img} src={instagram} alt="instagram" />
        </a>
        <a onClick={openWhatsApp}>
          <img className={style.img} src={whatsApp} alt="whatsapp" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
