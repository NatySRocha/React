/*
 Importação de módulos
 Padrao: import nome from "nome"
 Importação de Componentes
 Padrao: import nome from " ./"
*/

import "./App.css";

import Home from "./pages/home/Home";

import Tarefa from "./pages/tarefas/Tarefas";

import tarefa from "./assets/tarefas.jpeg";
import List from "./pages/List/list";

/*
Funcao
*/
function App() {
  /*
Retorno
*/

  return (
    <div className="App">
      {/* <Home /> */}
      <img src={tarefa} />
      <Tarefa />
      {/* Children */}
      <List>
        <li>Entender componentes</li>
        <li> Entender Props</li>
        <li>Executar as props</li>
      </List>
    </div>
  );
}

export default App;
