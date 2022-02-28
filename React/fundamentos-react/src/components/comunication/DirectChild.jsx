import React from "react";

export default props => {
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.age}</span>
            <span>{props.nerd ? 'Verdadeiro' : 'Falso'} !</span>
        </div>
    );
}