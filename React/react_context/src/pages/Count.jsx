import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const Count = () => {
    const { counter, setCounter } = useContext(CounterContext);

    return(
        <div>
            <h1>Contador</h1>
            <h3>Valor: {counter}</h3>
        </div>
    )
}

export default Count;