import React, { useState } from "react";

export default props => {

    const [value, setValue] = useState("Initial");

    function changeValue(e){
        setValue(e.target.value);
    }

    return (
        <div>
            <h2>{value}</h2>
            
            <input type="text" value={value} onChange={changeValue} />
        </div>
    );
}