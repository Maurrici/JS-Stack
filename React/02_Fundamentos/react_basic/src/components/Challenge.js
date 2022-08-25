const Challenge = () => {
    const value1 = 6;
    const value2 = 20;

    const handleSum = () => {
        console.log(value1 + value2);
    }

    return(
        <div>
            <p><strong>Valor a: {value1}</strong></p>
            <p><strong>Valor b: {value2}</strong></p>
            <button onClick={handleSum}>Some os valores(Resposta no console)</button>
        </div>
    )
}

export default Challenge;