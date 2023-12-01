import style from "./extras.module.css";
import React, { useState, useEffect } from "react";

export const EXTRA_PRICES = {
  "Figazas de manteca x25": 1700,
  Chimichurri: 1800,
  "Crema de Albahaca": 1800,
  "Crema de Barbacoa": 1800,
  "Chutney de Cebolla morada al malbec": 1800,
  "Mayonesa a las Finas Hierbas": 1800,
  "Mostaza y Miel": 1800,
  "Crema de Cheddar": 1800,
  "Crema de Hongos": 1800,
  Philadelphia: 1800,
  "Mayonesa de Naranja": 1800,
  "Mix Criolla": 1800,
  "Salsa Tartara": 1800,
  "Salsa Aioli": 1800,
  "Salsa Coleslaw": 1800,
  "Salsa del Bosque": 1800,
  Berenjenas: 1800,
  "Vitel Tone": 1800,
  Cuchilla: 4000,
  "Servicio de filetedeador x2HS": 17000,
};

function ExtraItem({ name, count, setCount }) {
  const handleIncrement = () => {
    if (name === "Figazas de manteca x25") {
      setCount(count + 25);
    } else {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      if (name === "Figazas de manteca x25" && count >= 25) {
        setCount(count - 25);
      } else {
        setCount(count - 1);
      }
    }
  };

  return (
    <div>
      <div className={style.items}>
        <p>{name}</p>
        <div className={style.count}>
          <button onClick={handleIncrement}>+</button>
          <p>{count}</p>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
      <hr className={style.hr} />
    </div>
  );
}

function Extras({
  onExtrasTotal,
  calculateTotalCarrito,
  extrasTotal,
  setExtras,
}) {
  const [counts, setCounts] = useState({});

  const extraItems = [
    "Figazas de manteca x25",
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
    "Cuchilla",
    "Servicio de filetedeador x2HS",
  ];

  const handleExtrasTotal = () => {
    let total = 0;
    for (const item in counts) {
      if (item === "Figazas de manteca") {
        total += Math.floor(counts[item] / 25) * EXTRA_PRICES[item];
      } else {
        total += counts[item] * EXTRA_PRICES[item];
      }
    }
    onExtrasTotal(total);
  };

  useEffect(() => {
    handleExtrasTotal();
    setExtras(counts); // Update the parent component state with the selected extras
  }, [counts, onExtrasTotal, setExtras]);

  return (
    <div className={style.container}>
      <div>
        <h2>Extras</h2>
      </div>
      {extraItems.map((item, index) => (
        <ExtraItem
          key={index}
          name={item}
          count={counts[item] || 0}
          setCount={(count) => setCounts({ ...counts, [item]: count })}
        />
      ))}
    </div>
  );
}
export default Extras;
