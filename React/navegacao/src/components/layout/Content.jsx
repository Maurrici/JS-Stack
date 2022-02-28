import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Content.css";

import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";

export default props =>{
    return(
        <main className="content">
            <Routes>
                <Route path="/about" element={<About/>} />

                <Route exact path="/" element={<Home/>} />

                <Route path="/param/:id" element={<Param/>} />

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </main>
    )
}