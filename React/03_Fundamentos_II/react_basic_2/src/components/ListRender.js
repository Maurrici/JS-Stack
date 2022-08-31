import { useState } from "react";

const ListRender = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Maurício",
            age: 21
        },
        {
            id: 2,
            name: "Evelyn",
            age: 20
        },
        {
            id: 3,
            name: "Pedro",
            age: 20
        }
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 3);

        setUsers((prevUsers) => {
            return prevUsers.filter(user => randomNumber !== user.id);
        })
    }
    
    return(
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Deletar um usuário</button>
        </div>
    )
}

export default ListRender;