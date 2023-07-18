import style from "./Navbar.module.css"
import React from 'react'
import { NavLink } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { useAuthValue } from "../context/AuthContext"

const Navbar = () => {
  const { user } = useAuthValue();

  return (
    <nav className={style.navbar}>
        <NavLink to="/" className={style.brand}>Mini <span>Blog</span></NavLink>

        <ul className={style.links_list}>
            <li>
                <NavLink to="/" className={({isActive}) => isActive ? style.active : ""}>Home</NavLink>
            </li>
            {
              !user && 
              <>
                <li>
                  <NavLink to="/dashboard" className={({isActive}) => isActive ? style.active : ""}>Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="/post/create" className={({isActive}) => isActive ? style.active : ""}>Novo Post</NavLink>
                </li>
              </> 
            }
            {
              user && 
              <>
                <li>
                  <NavLink to="/login" className={({isActive}) => isActive ? style.active : ""}>Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register" className={({isActive}) => isActive ? style.active : ""}>Cadastrar</NavLink>
                </li>
              </>
            }
        </ul>
    </nav>
  )
}

export default Navbar