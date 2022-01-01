import React from "react";
import "./Display.css";

export default props => {
    return(
        <div className="display">
            <div className="history">
                {props.history}
            </div>
            <div>
                {props.value}
            </div>
        </div>
    );
}