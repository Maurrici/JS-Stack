import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    const { id } = useParams();
    const url = `http://localhost:3000/players/${id}`;
    console.log(url);
    const {data: player, httpConfig, loading, error} = useFetch(url);
    console.log(player);
    return(
        <div>
            {loading && <p>Carregando...</p>}
            {error && <p>{error}</p>}
            {player && (
                <div>
                    <h3>{player.name}</h3>
                    <div>Id: {player.id}</div>
                    <div>Time: {player.team}</div>
                    <div>Sigla: {player.shortName}</div>
                </div>
            )}
        </div>
    )
}

export default Product;