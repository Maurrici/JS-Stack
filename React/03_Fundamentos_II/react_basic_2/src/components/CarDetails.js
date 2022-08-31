const CarDetails = ({brand, km, color}) => {
    return(
        <div>
            <h1>Carro</h1>
            <p><strong>Marca:</strong> {brand}</p>
            <p><strong>Km:</strong> {km}</p>
            <p><strong>Cor:</strong> {color}</p>
            {km === 0 && <strong>Esse carro é novo!</strong>}
        </div>
    )
}

export default CarDetails;