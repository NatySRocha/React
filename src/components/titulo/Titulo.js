import "./Titulo.css";
import { useEffect } from "react";

function Titulo(props) {
  useEffect(function () {
    console.log("O componente titulo carregou");
  }, []);
  return <h1 className="titulo-titulo">{props.texto}</h1>;
}
export default Titulo;
