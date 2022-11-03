import "./StartScreen.css"

export default (props) => {
    return(
        <div className="start">
            <h1>Jogo da forca</h1>
            <button onClick={props.startGame}>Iniciar</button>
        </div>
    )
}