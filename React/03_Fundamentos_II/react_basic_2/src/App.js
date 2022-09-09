import './App.css';
import Developer from "./assets/developer.jpg";

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Challenge from './components/challenge/Challenge';

function App() {
  const name = "Maurício";
  const cars = [
    {
      id: 1,
      brand: "Peauget",
      km: 45000,
      color: "Green"
    },
    {
      id: 2,
      brand: "Sandero",
      km: 22000,
      color: "Gray"
    },
    {
      id: 3,
      brand: "BMW",
      km: 0,
      color: "Black"
    },
  ]

  function showMessage(msg){
    console.log(msg);
  }

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
        <hr />
        {cars.map(car => (
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
        ))}
      </div>
      <hr />
      <div>
        <h2>Children</h2>
        {/* Passando um filho dentro do componente */}
        <Container>
          <p>Esse é o conteúdo do container!</p>
        </Container>
      </div>
      <div>
        <h2>Passando funções nas props</h2>
        <ExecuteFunction showMessage={showMessage}/>
      </div>
      <div>
        <h1>Desafio da seção 03</h1>
        <Challenge />
      </div>
    </div>
  );
}

export default App;
