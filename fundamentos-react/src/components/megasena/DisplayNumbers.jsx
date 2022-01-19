import "./DisplayNumbers.css";

import React from "react";

export default props =>{

    const numbersJSX = props.numbers.map((number, i) => {
        return(
            <div className="number-sorted" key={i}>
                {number}
            </div>
        );
    });

    return(
        <>
            <div className="d-flex justify-content-center mt-2">
                <button className="btn-mega" onClick={props.onGenerate}>Sortear</button>
            </div>
            <div className="d-flex justify-content-around mt-2">
                {numbersJSX}
            </div>
        </>
    );
}