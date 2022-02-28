import React from "react";

export default (props) => {
    return(
        <div>
            <span>
                <strong>{props.name} {props.lastName}</strong>
            </span>
        </div>
    );
}