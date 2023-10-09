import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import {  NavLink } from "react-router-dom";
import './navBar.scss'

export const NavBar = () => {
  return (
    <>
      <Navbar expand="md">
        <Container className="space-between ">
          {/* <Navbar.Toggle aria-controls="navbar-collapse" />
          <Navbar.Collapse id="navbar-collapse" className="justify-content-end"> */}
          <Nav className="flex-column ml-auto navBar-container"> 
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/">
              <span class="material-symbols-outlined" title='Inicio'>
                home
              </span>
            </NavLink>
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/productos">
              <span class="material-symbols-outlined" title='Estudios'>
                school
              </span>
            </NavLink>
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/mi-perfil">
              <span class="material-symbols-outlined" title='Portafolio'>
                business_center
              </span>
            </NavLink>      
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/iniciar-sesion">
              <span class="material-symbols-outlined" title='Historial laboral'>
                badge
              </span>
            </NavLink> 
            {/* <NavLink className={({isActive})=>(isActive ? "navLink" : "navLink")} >Cerrar Sesión</NavLink>                   */}
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  )
}
