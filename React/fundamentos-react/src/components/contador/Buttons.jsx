import React from "react";

export default props => {
    return(
        <>
            <button className="btn btn-dark border-circle" onClick={props.increment}>+</button>
            <button className="btn btn-dark" onClick={props.decrement}>-</button>
        </> 
    );
}