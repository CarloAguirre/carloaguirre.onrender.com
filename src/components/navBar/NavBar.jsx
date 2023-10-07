import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import {  NavLink } from "react-router-dom";
import './navBar.scss'

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container className="space-between ">
          {/* <Navbar.Toggle aria-controls="navbar-collapse" />
          <Navbar.Collapse id="navbar-collapse" className="justify-content-end"> */}
          <Nav className="flex-column ml-auto navBar-container"> 
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/">Inicio</NavLink>
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/productos">Productos</NavLink>
  
              <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/mi-perfil">Mi Perfil</NavLink>      
                <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/iniciar-sesion">Iniciar sesión</NavLink> 
               <NavLink className={({isActive})=>(isActive ? "navLink" : "navLink")} >Cerrar Sesión</NavLink>                  
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  )
}
