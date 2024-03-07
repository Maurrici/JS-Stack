import style from "../components/MyComponent.module.css";

const MyComponent = () => {
    let isBig = true;
    let isBox = true;
    return(
        <div>
            <h2>Esse título utiliza um CSS de Componente</h2>
            <div className={isBig ? (isBox ? style.titleBig + " " + style.box : style.titleBig) : isBox ? style.box : ""}>
                Classes dinâmicas
            </div>
        </div>
    )
}

export default MyComponent;