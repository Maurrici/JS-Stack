import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

import './App.css';

function App() {
  const url = "http://localhost:3000/products";

  const [name, setName] = useState("");
  const [value, setValue] = useState(0);

  // Resgate de dados
  const {data: items, httpConfig, loading, error} = useFetch(url);

  /*useEffect(() => {
    async function getProducts(){
      let res = await fetch(url);

      setProducts(await res.json());
    }

    getProducts();
  }, []);*/

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(name === "" && value <= 0) return;

    let product = {
      name,
      value
    }

    httpConfig(product, "POST");
    /*
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });

    let newProduct = await res.json();
    setProducts(currentProducts => [...currentProducts, newProduct]);
    */

    setName("");
    setValue(0);
  }

  const handleDelete = async (id) => {
    let data = { id };

    httpConfig(data, "DELETE");
  }

  return (
    <div className="App">
      <div>
        <h2>Lista de produtos</h2>
        {/* Tela de carregamento */}
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        <ul>
          {items && !loading && !error && items.map(p => (
            <li key={p.id}>
              {p.name} - R$ {p.value}

              <button onClick={() => handleDelete(p.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
      <hr></hr>
      <div>
        <h2>Cadastro de produto</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <label>
            <span>Nome</span>
            <input type="text" value={name} name="name" onChange={e => setName(e.target.value)}/>
          </label>
          <label>
            <span>Valor</span>
            <input type="number" min={0} name="value" value={value} onChange={e => setValue(e.target.value)}/>
          </label>

          <button disabled={loading}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
