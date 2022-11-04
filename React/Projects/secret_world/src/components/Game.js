import { useState } from "react";
import "./Game.css";

const Game = (props) => {
    const [letter, setLetter] = useState("");

    let aux = 0;
    let lifes = [];
    while(aux < props.lifes){
        lifes.push((<img src="/heart.png" alt="life" />));
        aux += 1;
    }

    return(
        <div className="game">
            <h1>Jogo da Forca</h1>

            <div className="screen">
                <div className="scores">
                    <div className="points">
                        <p>Pontuação: <strong>{props.score}</strong></p>
                    </div>

                    <div>
                        <p>Letras utilizadas</p>
                        <div className="letters-tried">
                            {props.tryLetter.map(l => (<div key={l.value} className={l.status == "correct" ? "green" : "red"}>{l.value}</div>))}
                        </div>
                    </div>

                    <div className="lifes">
                        <p>Vidas</p>
                        {lifes.map(l => l)}
                    </div>
                </div>

                <div className="play">
                    <p>A dica é: <strong>{props.category}</strong></p>
                    <div className="word">
                        {props.letters.map(l => {
                            if(l !== " ") return (<div className="letter">{l}</div>);
                            else return (<div className="letter space"></div>);
                        })}   
                    </div>

                    <form>
                        <span>Tente adivinhar uma letra</span>
                        <label>
                            <input type="text" name="letter" value={letter} onChange={e => setLetter(e.target.value)} />
                        </label>
                        <button onClick={props.verifyLetter}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Game;