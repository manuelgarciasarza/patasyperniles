import AllProducts from "../../components/allProducts/allProducts";
import Banner from "../../components/banner/banner";
import BestProducts from "../../components/bestProducts/bestProducts";
//import Descripcion from "../../components/descripcion/descripcion";
import Header from "../../components/header/header";
import Info from "../../components/info/info";
import Footer from "../../components/footer/footer";
import ContactHome from "../../components/contactHome/contactHome";

function Home() {
  return (
    <div>
      <Header />
      <Banner />

      {/*  <Descripcion /> */}
      <BestProducts />
      <AllProducts />
      <Info />
      <ContactHome />
      <Footer />
    </div>
  );
}

export default Home;
