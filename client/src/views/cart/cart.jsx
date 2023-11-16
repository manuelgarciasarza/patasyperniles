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
      {pernilDeCerdo && (
        <div>
          <p>{pernilDeCerdo.name || "Nombre no disponible"} </p>
          <p>
            {pernilDeCerdo.price
              ? `$${pernilDeCerdo.price}`
              : "Precio no disponible"}{" "}
          </p>
        </div>
      )}

      {pataDeTernera && (
        <div>
          <p>{pataDeTernera.name || "Nombre no disponible"} </p>
          <p>
            {pataDeTernera.price
              ? `$${pataDeTernera.price}`
              : "Precio no disponible"}{" "}
          </p>
        </div>
      )}

      {combinada && (
        <div>
          <p>{combinada.name || "Nombre no disponible"} </p>
          <p>
            {combinada.price ? `$${combinada.price}` : "Precio no disponible"}{" "}
          </p>
        </div>
      )}
      <button onClick={openWhatsApp}>Hacer el pedido</button>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
