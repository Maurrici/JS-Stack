import React from "react";
import productList from "../../data/products";

export default props =>{

    const productsJSX = productList.map(p =>{
        return(
            <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
            </tr>
        );
    });

    return(
        <table className="table striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço (R$)</th>
                </tr>
            </thead>
            <tbody>
                {productsJSX}
            </tbody>
        </table>
    );
}