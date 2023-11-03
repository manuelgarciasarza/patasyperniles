import banner1 from "../../img/banner1.jpg";
/* import banner2 from "../../img/banner2.jpg";
import banner3 from "../../img/banner3.jpg";
 */
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
      <img className={style.img} src={banner1} alt="" />
      <img className={style.img} src={banner1} alt="" />
      <img className={style.img} src={banner1} alt="" />
    </Carousel>
  );
}

export default Banner;
