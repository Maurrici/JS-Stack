import { useState, useRef } from "react";
import "./Game.css";

const Game = (props) => {
    const [letter, setLetter] = useState("");
    const letterInputRef = useRef(null);

    let aux = 0;
    let lifes = [];
    while(aux < props.lifes){
        lifes.push((<img key={aux} src="/heart.png" alt="life" />));
        aux += 1;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.verifyLetter(letter);
        setLetter("");

        letterInputRef.current.focus();
    }

    return(
        <div className="game">
            <h1>Jogo da Forca</h1>

            <div className="screen">
                <div className="scores">
                    <div className="points">
                        <p>Pontuação</p>
                        <span className="score-points">{props.score}</span>
                    </div>

                    <div>
                        <p>Letras utilizadas</p>
                        <div className="letters-tried">
                            {props.tryLetter.map((l, index) => (<div key={index} className={l.status === "correct" ? "green" : "red"}>{l.value}</div>))}
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
                        {props.letters.map((l, index) => {
                            if(l === " ") return (<div key={index} className="letter space"></div>);
                            else{
                                if(props.tryLetter.find(item => item.status === "correct" && item.value === l) !== undefined) return (<div key={index} className="letter">{l}</div>);
                                else return (<div key={index} className="letter"></div>);
                            }
                        })}   
                    </div>

                    <form onSubmit={e => handleSubmit(e)}>
                        <span>Tente adivinhar uma letra</span>
                        <label>
                            <input type="text" name="letter" value={letter} onChange={e => setLetter(e.target.value)} ref={letterInputRef} />
                        </label>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Game;