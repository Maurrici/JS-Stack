import style from "./Register.module.css";

import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const user = {
      name,
      email,
      password
    }

    if(password.length < 6){
      setError("A senha deve ter no mínimo 6 dígitos!");
      return
    } else if(password != confirmPassword){
      setError("As senhas precisam ser iguais!");
      return
    }

    console.log(user);
    const res = await createUser(user);

    console.log(res);
  }

  useEffect(() => {
    console.log(authError)
    if(authError){
      setError(authError);
    }else{
      setError("");
    }
  }, [authError])

  return (
    <div className={style.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias!</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input 
            type="text"
            name='name'
            required
            placeholder='Nome de usuário'
            value={name}
            onChange={e => setName(e.target.value)} />
        </label>

        <label>
          <span>Email</span>
          <input 
            type="email"
            name='email'
            required
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </label>

        <label>
          <span>Senha</span>
          <input 
            type="password"
            name='password'
            required
            placeholder='Insira sua senha'
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </label>

        <label>
          <span>Confirmação de senha</span>
          <input 
            type="password"
            name='confirmPassword'
            required
            placeholder='Insira sua senha'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)} />
        </label>

        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Register