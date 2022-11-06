import "./Curso.css";
import { useEffect } from "react";

/*
Props:São caracteristicas que um componete pode ter acesso,
uma props pode ser enviada como var,const,funcão...
*/
function Curso(props) {
  useEffect(function () {
    console.log("O componente curso carregou");
  }, []);

  return <h1 className="titulo-curso">{props.texto}</h1>;
}
export default Curso;
