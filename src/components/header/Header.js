import React from 'react'
import './header.css'
import { Link} from "react-router-dom";

export function Header (){
  return (
    <div id="masterDivNavBar" className="container w-full max-w-xs m-auto">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <Link id='link' to={'/'}>Home</Link>
      <Link id='link' to={'/mostrarPersona'}>Ver Personas (tarjetas)</Link>
      <Link id='link' to={'/FormIngresarPersona'}>Crear Persona</Link>
    </div>
  </nav>
</div>
  )
}
