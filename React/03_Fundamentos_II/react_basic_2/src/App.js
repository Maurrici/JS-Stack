import './App.css';
import Developer from "./assets/developer.jpg";

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Maurício";

  return (
    <div className="App">
      <h1>Seção 03</h1>

      <div>
        <img src="/react-img.png" width="200" alt="React universe" />
        <img src={Developer} width="200" alt="Desenvolvedor" />
      </div>
      <hr />
      <div>
        <h2>Manipulação de dados</h2>
        <ManageData/>
      </div>
      <div>
        <h2>Renderização de listas</h2>
        <ListRender/>
      </div>
      <hr />
      <div>
        <h2>Renderização condicional</h2>
        <CondicionalRender/>
      </div>
      <hr />
      <div>
        <h2>Utilização de props</h2>
        <ShowUserName name={name} />
        <CarDetails brand="Fiat" km={10000} color="Vermelho" />
        <CarDetails brand="Hyundai" km={0} color="Azul" />
      </div>
    </div>
  );
}

export default App;
