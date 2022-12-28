import './Home.css';

import { useFetch } from "../hooks/useFetch";
import { Link } from 'react-router-dom';

const Home = () =>{
    const url = "http://localhost:3000/players"
    const {data, httpConfig, loading, error} = useFetch(url);
    
    return(
        <div>
            <h1>Lista de Jogadores</h1>

            <div className="list">
                {loading && <p>Carregando...</p>}
                {error && <p>{error}</p>}
                {!error && !loading && data && data.map(p => (
                    <div className="item" key={p.id}>
                        {p.name} - {p.team} 
                        <strong>{p.shortName}</strong>
                        <Link to={`/products/${p.id}`}>Detalhes</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;