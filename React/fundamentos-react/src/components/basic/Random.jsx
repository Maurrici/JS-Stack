import React from "react";

export default (props) => {
    const {min, max} = props;

    const randomNum = Math.floor(Math.random() * (max - min) + props.min);

    return (
        <div className="randomBox">
            <h3>Número sorteado</h3>
            <div>{ randomNum }</div>
        </div>
    );
};