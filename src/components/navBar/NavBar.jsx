import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import {  NavLink } from "react-router-dom";
import './navBar.scss'
import { usePortafolio } from '../../context';

export const NavBar = () => {
  const {mainSwitch, setMainSwitch} = usePortafolio()

  const onMainSwitch = ()=>{
    setMainSwitch(!mainSwitch)
  }
  return (
    <div className='navbar-wrapper'>
      <Navbar expand="md">
        <Container className="space-between " >
          {/* <Navbar.Toggle aria-controls="navbar-collapse" />
          <Navbar.Collapse id="navbar-collapse" className="justify-content-end"> */}
          <Nav className="flex-column ml-auto navBar-container"> 
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/" onClick={onMainSwitch} >
              <span className="material-symbols-outlined" title='Inicio'>
                home
              </span>
            </NavLink>
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/estudios" onClick={onMainSwitch}>
              <span className="material-symbols-outlined" title='Formacion'>
                school
              </span>
            </NavLink>
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/portafolio" onClick={onMainSwitch}>
              <span className="material-symbols-outlined" title='Portafolio'>
                business_center
              </span>
            </NavLink>      
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/iniciar-sesion" onClick={onMainSwitch}>
              <span className="material-symbols-outlined" title='Historial laboral'>
                badge
              </span>
            </NavLink> 
            {/* <NavLink className={({isActive})=>(isActive ? "navLink" : "navLink")} >Cerrar Sesión</NavLink>                   */}
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  )
}
