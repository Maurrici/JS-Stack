import React from "react";

export default props => {
    return(
        <div className="d-flex align-items-center justify-content-around mt-2">
            <label htmlFor="quantity">Quantidade: </label>
            <input 
                type="number" 
                id="quantity" 
                className="d-inline form-control w-25"
                value={props.quantity} 
                onChange={e => props.onQuantity(+e.target.value)} />
        </div>
    );
}