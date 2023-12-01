import bannerCuatro from "../../img/bannerCuatro.jpg";
import bannerCinco from "../../img/bannerCinco.jpg";
import bannerSeis from "../../img/bannerSeis.jpg";
import bannerTres from "../../img/bannerTres.jpg";
import bannerPrueba from "../../img/bannerPrueba.jpg";
import bannerPrueba2 from "../../img/bannerPrueba2.jpg";

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
      <img className={style.img} src={bannerPrueba} alt="" />
      <img className={style.img} src={bannerPrueba2} alt="" />
    </Carousel>
  );
}

export default Banner;
