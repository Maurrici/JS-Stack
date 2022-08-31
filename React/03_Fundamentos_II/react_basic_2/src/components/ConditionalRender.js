import { useState } from "react";

const CondicionalRender = () => {
    const [x, setX] = useState(false);
    const [name, setName] = useState("Maurício");

    return(
        <div>
            <div>
                <h1>Isso será exibido?</h1>
                {x && <p>Se x for true, sim.</p>}
                {!x && <p>Agora x é falso</p>}
                <button onClick={() => (setX(prevX => !prevX))}>Inverter x</button>
            </div>
            <div>
                {name === "Maurício" ? (<p>Se o nome for Maurício esse texté exibido</p>) : (<p>O nome não é Maurício</p>)}
                <button onClick={() => (setName("Evelyn"))}>Mudar nome</button>
            </div>
        </div>
    )
}

export default CondicionalRender;