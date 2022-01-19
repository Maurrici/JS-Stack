import React from "react";
import {Link} from "react-router-dom";

export default props => {
    return(
        <li>
            <Link to={props.path}>
                <span className="link-name">{props.label}</span>
            </Link>
        </li>
    );
}