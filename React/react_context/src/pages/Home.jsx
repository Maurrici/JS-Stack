import useCounterContext from "../hooks/useCounterContext";

const Home = () => {
    const { counter, setCounter } = useCounterContext();

    return(
        <div>
            <h1>Home</h1>
            <p>Valor do Contexto: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Contar</button>
        </div>
    )
}

export default Home;