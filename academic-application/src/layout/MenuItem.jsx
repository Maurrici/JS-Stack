import React from "react";

export default props => {
    return(
        <li>
            <a href="<?php echo get_home_url();?>/noticias">
                <span class="link-name">{props.label}</span>
            </a>
        </li>
    );
}