//imagenes
/* import bannerUno from "../../img/bannerUno.jpg";import bannerDos from "../../img/bannerDos.jpg";

 
 */ import bannerCuatro from "../../img/bannerCuatro.jpg";
import bannerCinco from "../../img/bannerCinco.jpg";
import bannerSeis from "../../img/bannerSeis.jpg";
import bannerSiete from "../../img/bannerSiete.jpg";
import bannerTres from "../../img/bannerTres.jpg";

import style from "./banner.module.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={100}
      useKeyboardArrows={true}
    >
      <img className={style.img} src={bannerTres} alt="" />
      <img className={style.img} src={bannerCuatro} alt="" />
      <img className={style.img} src={bannerCinco} alt="" />
      <img className={style.img} src={bannerSeis} alt="" />
      <img className={style.img} src={bannerSiete} alt="" />
    </Carousel>
  );
}

export default Banner;
