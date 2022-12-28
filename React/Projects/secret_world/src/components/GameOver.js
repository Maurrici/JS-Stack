import "./GameOver.css";

const GameOver = (props) => {
    return(
        <div className="gameover">
            <h1>Fim de jogo</h1>
            <h2>Pontuação final: <strong>{props.score}</strong></h2>
            <button onClick={props.retry}>Reiniciar</button>
        </div>
    )
}

export default GameOver;