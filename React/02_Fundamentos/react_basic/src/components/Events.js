const Events = () => {
    const handleMyEvent = (e) => {
        console.log("Evento ativado!", e);
    };

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando IF</h1>
        }else{
            return <h1>Renderizando ELSE</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clique detectado!")}>Clique aqui também</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;