import UserDetails from "./UserDetails";
import "./style.css"

const Challenge = (props) => {
    const data = [
        {
            id: 1,
            name: "Maurício de Moura dos Santos",
            age: 21,
            job: "Web Developer"
        },
        {
            id: 2,
            name: "Evelyn Braga Mendonça",
            age: 20,
            job: "Marketing Designer"
        },
        {
            id: 3,
            name: "Pedro Henrique Macedo Celestino",
            age: 20,
            job: "Everything in the Bank"
        },
        {
            id: 4,
            name: "Fábregas Neto Soares",
            age: 15,
            job: "Student"
        }
    ]
    return (
        <div className="content">
            <h2>Lista de Pessoas</h2>
            {data.map(person => (
                <UserDetails key={person.id} name={person.name} age={person.age} job={person.job}/>
            ))}
        </div>
    )
}

export default Challenge;