import React from "react";
import DirectChild from "./DirectChild";

export default props => {
    return (
        <div>
            <DirectChild name="Maurício" age={20} nerd={true}></DirectChild>
            <DirectChild name="Goku" age={54} nerd={false}></DirectChild>
        </div>
    );
}