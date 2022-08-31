import React, {useState} from "react";

const ManageData = () => {
    let value = 10;
    const [data, setData] = useState(15);
    const [list, setList] = useState(["Maurício", "Evelyn", "Pedro"]);

    return(
        <div>
            <div>Valor com useState: {data}</div>
            <button onClick={() => (setData(50))}>Mudar Variável</button>
        </div>
    )
}

export default ManageData;