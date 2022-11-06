import "./Linguagens.css";
import { useEffect } from "react";

function Linguagens(props) {
  useEffect(function () {
    console.log("O componente linguagem carregou");
  }, []);
  return <h1 className="linguagens">{props.texto}</h1>;
}
export default Linguagens;
