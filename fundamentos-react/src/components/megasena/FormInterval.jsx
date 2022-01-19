import React from "react";

export default props => {
    return(
        <div className="d-flex align-items-center justify-content-around mt-2">
            <label>Intervalo: </label>
            <div className="d-inline w-25">
                <input 
                    type="number" 
                    id="min"
                    className="form-control"
                    value={props.min} 
                    onChange={e => props.onMin(+e.target.value)} />
                <input 
                    type="number" 
                    id="max"
                    className="form-control"
                    value={props.max} 
                    onChange={e => props.onMax(+e.target.value)} />
            </div>
        </div>
    );
}