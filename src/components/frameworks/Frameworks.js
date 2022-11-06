import "./Frameworks.css";
import { useEffect } from "react";

function Frameworks(props) {
  useEffect(function () {
    console.log("O componente framework carregou");
  }, []);
  return <h1 className="frameworks">{props.texto}</h1>;
}
export default Frameworks;
