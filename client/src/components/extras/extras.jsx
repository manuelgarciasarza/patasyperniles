import style from "./extras.module.css";
import React, { useState, useEffect } from "react";

const EXTRA_PRICES = {
  "Figazas de manteca": 500, 
  "Chimichurri": 500,
    "Crema de Albahaca": 500,
    "Crema de Barbacoa": 500,
    "Chutney de Cebolla morada al malbec": 500,
    "Mayonesa a las Finas Hierbas": 500,
    "Mostaza y Miel": 500,
    "Crema de Cheddar": 500,
    "Crema de Hongos": 500,
    "Philadelphia": 500,
    "Mayonesa de Naranja": 500,
    "Mix Criolla": 500,
    "Salsa Tartara": 500,
    "Salsa Aioli": 500,
    "Salsa Coleslaw": 500,
    "Salsa del Bosque": 500,
    "Berenjenas": 500,
  "Vitel Tone": 500, 
  "Cuchilla":500,
    "Servicio de filetedeador":500,
};

function ExtraItem({ name, count, setCount }) {
  const handleIncrement = () => {
    if (name === "Figazas de manteca") {
      setCount(count + 25);
    } else {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      if (name === "Figazas de manteca" && count >= 25) {
        setCount(count - 25);
      } else {
        setCount(count - 1);
      }
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

function Extras({ onExtrasTotal, calculateTotalCarrito, extrasTotal }) {
  const [counts, setCounts] = useState({});

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
    "Cuchilla",
    "Servicio de filetedeador",
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
  }, [counts, onExtrasTotal]);


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
