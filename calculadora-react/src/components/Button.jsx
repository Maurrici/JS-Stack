import React from "react";

import "./Button.css"

export default props => {

    let classString = `button 
        ${props.operation ? 'operation': ''} 
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}`

    return (
        <button
            onClick={ _ => props.click && props.click(props.label) } 
            className={classString}>
            {props.label}
        </button>
    );
}