import React from "react";

export default props => {

    const getAge = () => parseInt(Math.random() * (20)) + 50;
    const getNerd = () => Math.random() > 0.5;
    return (
        <div>
            <div>
                Filho
            </div>

            <button onClick={e => props.sendInfo("Mauro", getAge(), getNerd())}>
                Fornecer Informações
            </button>
        </div>
    );
}