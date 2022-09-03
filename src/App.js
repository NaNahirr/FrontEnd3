
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import {useState} from "react";

function App() {
  const [product, setProduct] = useState(0);

  const contadorProductos = () => {
    setProduct((prevState) => prevState + 1)
  }
  return (
    <div className="App">
      <Cabecera product={product} />
      <Listado contador={contadorProductos} />
    </div>
  );
}
export default App;