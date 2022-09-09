const ExecuteFunction = (props) => {
    return(
        <div>
            <button onClick={() => props.showMessage("Hello Guys!")}>Clique para executar a função</button>
        </div>
    )
}

export default ExecuteFunction;