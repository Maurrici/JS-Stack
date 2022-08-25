const TemplateExpression = () =>{
    
    const user = {
        name: "Maurício",
        age: 21,
        job: "Web Development"
    }
    
    return(
        <div>
            Bem vindo {user.name}!
            <p>Você atua como {user.job} e possui {user.age} anos de vida.</p>
        </div>
    )
}

export default TemplateExpression;