import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const ShoppingCart = () => {
  const pernilDeCerdo = JSON.parse(localStorage.getItem("pernilDeCerdo"));
  const pataDeTernera = JSON.parse(localStorage.getItem("pataDeTernera"));
  const combinada = JSON.parse(localStorage.getItem("combinada"));

  const prepareWhatsAppMessage = () => {
    const message = `Hola, quiero comprar:\n\n${pernilDeCerdo.name} - ${pernilDeCerdo.amount} personas - ${pernilDeCerdo.price}`;
    return encodeURIComponent(message);
  };

  const openWhatsApp = () => {
    const phoneNumber = "+5492966692490";
    const message = prepareWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div>
      <Header />
      <h2>Carrito de Compras</h2>
      <p>{pernilDeCerdo.name} </p>
      <p>{pernilDeCerdo.price} </p>
      <p>{pataDeTernera.name} </p>
      <p>${pataDeTernera.price} </p>
      <p>{combinada.name} </p>
      <p>{combinada.price} </p>
      <button onClick={openWhatsApp}>Hacer el pedido</button>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
