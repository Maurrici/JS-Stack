import "./Game.css";

export default (props) => {
    return(
        <div>
            <h1>Game</h1>
            <p>{props.category + " " + props.word}</p>

            <div>
                {props.letters.map((letter, index) => (<span key={index}>{letter}  </span>))}
            </div>
            <button onClick={props.verifyLetter}>Iniciar</button>
        </div>
    )
}