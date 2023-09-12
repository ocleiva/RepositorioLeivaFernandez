import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../Assets/Logo.png'

/* componente para la barra de navegacion */
export default function NavBar() {
  return (
    <div className='navBar'>
        
        <div className='botonesNavBar'>
        <div className='logoNavBar'>  <img width={100} src={Logo} ></img> </div>
            <NavLink to="/" className='botonNavBar'>Home</NavLink>
            <NavLink to="/personajes" className='botonNavBar'>Personajes</NavLink>
            <NavLink to="/Login" className='botonNavBar'>Login</NavLink>
            
            
        </div>
    </div>
  )
}