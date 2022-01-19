import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"

export default props =>{
    return(
        <aside className="menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/param/123">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/abcd">Param #02</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}