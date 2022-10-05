import './App.css';

import Car from './components/Car';

function App() {
  let cars = [
    {
      id: 1,
      name: "UP",
      brand: "WolksVagen",
      km: 10000,
      port: 4,
      color: "Vermelho"
    },
    {
      id: 2,
      name: "Strada",
      brand: "Fiat",
      km: 50000,
      port: 2,
      color: "Branco"
    },
    {
      id: 3,
      name: "Camaro",
      brand: "BMW",
      km: 5000,
      port: 2,
      color: "Amarelo"
    },
    {
      id: 4,
      name: "Gol",
      brand: "WolksVagen",
      km: 20000,
      port: 4,
      color: "Preto"
    },
    {
      id: 5,
      name: "Uno",
      brand: "Fiat",
      km: 80000,
      port: 2,
      color: "Prata"
    },
    {
      id: 6,
      name: "Celta",
      brand: "Ford",
      km: 120000,
      port: 2,
      color: "Preto"
    },
    {
      id: 6,
      name: "Corsa",
      brand: "Ford",
      km: 180000,
      port: 2,
      color: "Preto"
    }
  ]

  return (
    <div className="App">
      <h1>Challenge Css</h1>

      <div className='list'>
        {
          cars.map(car => {
            return (<Car key={car.id} name={car.name} brand={car.brand} km={car.km} port={car.port} color={car.color} />)
          })
        }
      </div>
    </div>
  );
}

export default App;
