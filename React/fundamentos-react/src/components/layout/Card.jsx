import "./Card.css";
import React from "react";

export default (props) => {

    const style = {
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#F00"
    }

    return(
        <div className="Card" style={style}>
            <div className="Title">
                {props.title}
            </div>

            <div className="Content">
                {props.children}
            </div>
        </div>
    );
}