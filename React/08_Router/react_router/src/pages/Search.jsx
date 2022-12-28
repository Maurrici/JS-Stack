import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
    const [searchParams] = useSearchParams();
    const url = `http://localhost:3000/players?${searchParams}`;

    const {data: results, httpConfig, loading, error} = useFetch(url);
    console.log(results)
    return(
        <div>
            <h1>Resultados Disponíveis</h1>
            {!error && !loading && results && results.map(p => (
                <div className="item" key={p.id}>
                    {p.name} 
                    <Link to={`/products/${p.id}`}>Detalhes</Link>
                </div>
            ))}
        </div>
    )
}

export default Search;