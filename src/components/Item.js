import { useState } from "react";

const Item = ({ img, nombre, descripcion, stock, contador }) => {
  const [cantUnidad, setCantUnidad] = useState(stock);
  const [valor, setValor] = useState("COMPRAR");
  const [disabled, setDisable] = useState(false);

  const cargaBoton = () => {
    if (cantUnidad > 1) {
      setCantUnidad((prevState) => prevState - 1);
      contador();
      setDisable(false);
    } else if (cantUnidad === 1) {
      contador();
      setValor("SIN STOCK");
      setCantUnidad("agotado");
      setDisable(true);
    } else {
      setValor("SIN STOCK");
      setDisable(true);
    }
  };
  return (
    <div className="producto">
      <img src={img} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>
        {" "}
        En stock: <span >{cantUnidad}</span>
      </h5>
      <button
        disabled={disabled}
        onClick={() => {
          cargaBoton();
        }}
      >
        {valor}
      </button>
    </div>
  );
};
export default Item;
