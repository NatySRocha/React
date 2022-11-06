import "./Formulario.css";
import { useState } from "react";

function Formulario() {
  const [texto, salvarTexto] = useState("Oi");
  return (
    <div>
      <p> {texto} </p>
      <input
        onChange={(evento) => salvarTexto(evento.target.value)}
        value={texto}
      />
    </div>
  );
}

export default Formulario;
