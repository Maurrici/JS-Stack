import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const useCounterContext = () => {
    const context = useContext(CounterContext);

    if(!context){
        console.log("Contexto não encontrado");
    }

    return context;
}

export default useCounterContext;