import React from "react";
import "../../fonts/Merienda.css";
import "./Menu.css";

export default props => {
    return(
        <div className="sidebar active">
            <div className="logo-content">
                <div className="logo">
                    <a href="/" className="logo-name">
                        <span className="title-1">Academic</span>
                        <span className="title-2">Applications</span>
                    </a>
                </div>
            </div>

            <ul className="nav-list">
                {props.children}
            </ul>
        </div>
    );
}