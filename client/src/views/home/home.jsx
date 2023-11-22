import AllProducts from "../../components/allProducts/allProducts";
import Banner from "../../components/banner/banner";
import BestProducts from "../../components/bestProducts/bestProducts";
//import Descripcion from "../../components/descripcion/descripcion";
import Header from "../../components/header/header";
import Info from "../../components/info/info";
import Footer from "../../components/footer/footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />

      <BestProducts />
      <AllProducts />
      <Info />
      <Footer />
    </div>
  );
}

export default Home;
