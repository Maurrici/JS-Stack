import "./GameOver.css";

export default (props) => {
    return(
        <div>
            <h1>Fim de jogo</h1>
            <button onClick={props.retry}>Reiniciar</button>
        </div>
    )
}