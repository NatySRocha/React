import React from "react";
import "./Tarefas.css";
import { useState } from "react";
import axios from "axios";

const Tarefas = () => {
  const [Tarefa, setTarefa] = useState(" ");
  const [Cpf, setCpf] = useState(" ");

  console.log(Tarefa);
  console.log(Cpf);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando o formulário");
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        userId: Cpf,
        title: Tarefa,
      }
    );
    console.log(response.data.id);
  };

  return (
    <>
      {/* Criação de forms */}

      <h1>Cadastro de Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Label envolvendo input */}
          <label>
            <span> Informe a Descrição da Tarefa: </span>
            <input
              type="text"
              name="Tarefa"
              placeholder="Digite sua Tarefa"
              value={Tarefa}
              onChange={(e) => setTarefa(e.target.value)}
            />
          </label>

          <label>
            <span> Informe o Documento do Usuário: </span>
            <input
              type="text"
              name="Cpf"
              placeholder="Digite seu CPF"
              value={Cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default Tarefas;
