/* Exibindo o filho que foi passado */
const Container = (prop) => {
    return(
        <div>
            <h2>Título do container</h2>
            {prop.children}
        </div>
    )
}

export default Container;