import bannerCuatro from "../../img/bannerCuatro.jpg";
import bannerCinco from "../../img/bannerCinco.jpg";
import bannerSeis from "../../img/bannerSeis.jpg";
import bannerTres from "../../img/bannerTres.jpg";
import bannerOcho from "../../img/bannerOcho.jpg";

import style from "./banner.module.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      g
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
      <img className={style.img} src={bannerOcho} alt="" />
    </Carousel>
  );
}

export default Banner;
