// Context
import { createContext, useState } from "react";

export const CounterContext = createContext();

// Provider

export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(5);

    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}
