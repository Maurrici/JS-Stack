import React from "react";
import { useParams } from "react-router-dom";

export default props =>{
    const { id } = useParams();
    return(
        <div className="home">
           <h1>Param</h1>
           <h2>{id}</h2>
        </div>
    )
}