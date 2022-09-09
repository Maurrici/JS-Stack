import "./style.css"

const UserDetails = (props) => {
    
    function handleAge(age){
        if(age >= 18) return "PODE";
        else return "NÃO PODE";
    }
    
    return(
        <div className="box">
            <div>
                <strong>Nome:</strong> {props.name}
            </div>
            <div>
                <strong>Idade:</strong> {props.age}
            </div>
            <div>
                <strong>Profissão:</strong> {props.job}
            </div>
            <div>
                Esse usuário <strong>{handleAge(props.age)}</strong> tirar carteira de habilitação!
            </div>
        </div>
    )
}

export default UserDetails;