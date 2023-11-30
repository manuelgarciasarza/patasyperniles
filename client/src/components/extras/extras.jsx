import style from "./extras.module.css";
import { useState } from "react";

function ExtraItem({ name }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={style.items}>
      <h4>{name}</h4>
      <div className={style.count}>
        <button onClick={handleIncrement}>+</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}

function Extras() {
  const extraItems = [
    "Figazas de manteca",
    "Chimichurri",
    "Crema de Albahaca",
    "Crema de Barbacoa",
    "Chutney de Cebolla morada al malbec",
    "Mayonesa a las Finas Hierbas",
    "Mostaza y Miel",
    "Crema de Cheddar",
    "Crema de Hongos",
    "Philadelphia",
    "Mayonesa de Naranja",
    "Mix Criolla",
    "Salsa Tartara",
    "Salsa Aioli",
    "Salsa Coleslaw",
    "Salsa del Bosque",
    "Berenjenas",
    "Vitel Tone",
  ];

  return (
    <div className={style.container}>
      <div>
        <h2>Extras</h2>
      </div>
      {extraItems.map((item, index) => (
        <ExtraItem key={index} name={item} />
      ))}
    </div>
  );
}

export default Extras;
