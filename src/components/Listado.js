import React, { useEffect } from "react";
import Data from "./data.json";
import Item from "./Item.js";

export default function Listado({ contador }) {
  return (
    <div className="container">
      {Data.map((item) => (
        <Item
          key={item.id}
          img={item.producto.img}
          nombre={item.producto.nombre}
          descripcion={item.producto.descripcion}
          stock={item.stock}
          contador={contador}
        />
      ))}
    </div>
  );
}
