import React from "react";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";

import "./App.css";

import Menu from "./component/layout/Menu";
import MenuItem from "./component/layout/MenuItem";
import Home from "./views/Home";
import FunctionRoot from "./views/FunctionRoot";
import LinearSystem from "./views/LinearSystem";

export default props => {
    return(
        <div>
            <Router>
                <Menu>
                    <MenuItem label="Raízes de funções" path="/function-roots"></MenuItem>
                    <MenuItem label="Sistemas lineares" path="/linear-system"></MenuItem>
                </Menu>

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/function-roots" element={<FunctionRoot/>} />
                    <Route path="/linear-system" element={<LinearSystem/>} />
                </Routes>
            </Router>
        </div>
    )
}