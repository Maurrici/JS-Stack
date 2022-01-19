import React, { useState } from "react";
import IndirectChild from "./IndirectChild";

export default props => {

    const [name, setName] = useState("?");
    let [age, setAge] = useState(0);
    let [nerd, setNerd] = useState(false);

    function sendInfo(nameParam, ageParam, nerdParam){
        setName(nameParam);
        setAge(ageParam);
        setNerd(nerdParam);
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span>{age} </span>
                <span>{nerd ? "Verdadeiro" : "Falso"} </span>
            </div>
            <IndirectChild sendInfo={sendInfo}></IndirectChild>
        </div>
    );
}