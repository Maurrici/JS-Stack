import React from "react";
import "./Menu.css";

import MenuItem from "./MenuItem";

export default props => {
    return(
        <div class="sidebar active">
            <div class="logo-content">
                <div class="logo">
                    <a href="/home" class="logo-name">
                        <span className="title-1">Academic</span>
                        <span className="title-2">Applications</span>
                    </a>
                </div>
                <img id="button-expand" src="" />
            </div>

            <ul class="nav-list">
                {props.children}
            </ul>
        </div>
    );
}