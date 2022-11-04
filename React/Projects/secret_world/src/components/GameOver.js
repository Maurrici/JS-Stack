import "./GameOver.css";

const GameOver = (props) => {
    return(
        <div>
            <h1>Fim de jogo</h1>
            <button onClick={props.retry}>Reiniciar</button>
        </div>
    )
}

export default GameOver;