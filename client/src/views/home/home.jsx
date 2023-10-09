import Banner from "../../components/banner/banner";
import BestProducts from "../../components/bestProducts/bestProducts";
import Descripcion from "../../components/descripcion/descripcion";
import Header from "../../components/header/header";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Descripcion />
      <BestProducts />
    </div>
  );
}

export default Home;
