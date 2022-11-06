import Titulo from "../../components/titulo/Titulo";
import Curso from "../../components/curso/Curso";
import Frameworks from "../../components/frameworks/Frameworks";
import Linguagens from "../../components/linguagem/Linguagens";
import front_end from "../../assets/front_end.png";
import Formulario from "../../components/formulario/Formulario";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [usuarios, setUsuarios] = useState([]);

  /* 
        useEffect sempre chamado depois que a  pagina é carregada ou atualizada
        */
  useEffect(function () {
    buscarDadosNoServidor();
  }, []);

  /*
         Estrutura
        */
  const buscarDadosNoServidor = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsuarios(response.data);
  };

  /*
      Retorno
      */

  return (
    <div className="App">
      <header className="App-header">
        <Titulo texto={" Tecnologia "} />
        <img src={front_end} />
        <Curso texto={" Front End"} />
        <Linguagens texto={" HTML,CSS e JavaScript"} />
        <Frameworks texto={" React,Angular e Vue"} />
        <Formulario />
      </header>
      {usuarios.map((usuario, index) => (
        <p key={index}>
          {usuario.name}, {usuario.username},{usuario.id}, {usuario.email}
        </p>
      ))}
    </div>
  );
}

export default Home;
