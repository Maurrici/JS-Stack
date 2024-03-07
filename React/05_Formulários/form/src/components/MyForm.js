import { useState } from "react";
import "./MyForm.css";

export default (props) => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(props ? props.name : "");
    const [email, setEmail] = useState(props ? props.email : "");
    const [bio, setBio] = useState(props ? props.bio : "");
    const [role, setRole] = useState(props ? props.role : "");

    // 4 - Tratamento e envio de dados
    const handleSubmit = (e) => {
        e.preventDefault();
        // Tratamento
        console.log(name, email, bio, role);
        console.log("Envio de formulário");

        // Resetando campos
        setName("");
        setEmail("");
        setBio("");
    }

    return(
        <div>
            {/* 1 - Criação de Formulários */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Digite seu nome" 
                        value={name} 
                        onChange={e => setName(e.target.value)} />
                </div>

                {/* 2 - Label envolvendo input */}
                <label>
                    <span>E-mail</span>
                    <input 
                        type="email" 
                        placeholder="Digite o seu email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}/>
                </label>

                {/* 5 - Inputs do tipo textarea */}
                <label>
                    <span>Biografia</span>
                    <textarea 
                        name="bio" 
                        value={bio} 
                        onChange={e => setBio(e.target.value)}></textarea>
                </label>

                {/* 6 - Inputs do tipo select */}
                <label>
                    <span>Função no sistema</span>
                    <select name="role" value={role} onChange={e => setRole(e.target.value)}>
                        <option value="user">Usuário</option>
                        <option value="seller">Vendedor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>

                <input type="submit" value="Enviar"/>
            </form>

            
        </div>
    )
}