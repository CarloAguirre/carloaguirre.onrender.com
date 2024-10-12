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
      <Navbar>
        <Container className="space-between " >
          {/* <Navbar.Toggle aria-controls="navbar-collapse" />
          <Navbar.Collapse id="navbar-collapse" className="justify-content-end"> */}
          <Nav className="navBar-container"> 
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/" onClick={onMainSwitch} >
              {/* <span className="material-symbols-outlined" title='Inicio'>
                home
              </span>  */}
              <i class="fa-solid fa-house"></i> 
            </NavLink>
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/estudios" onClick={onMainSwitch}>
              {/* <span className="material-symbols-outlined" title='Formacion'>
                school
              </span> */}
              <i class="fa-solid fa-graduation-cap"></i>
            </NavLink>
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/portafolio" onClick={onMainSwitch}>
              {/* <span className="material-symbols-outlined" title='Portafolio'>
                business_center
              </span> */}
              <i class="fa-solid fa-briefcase"></i>
            </NavLink>      
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/curriculum" onClick={onMainSwitch}>
              {/* <span className="material-symbols-outlined" title='Historial laboral'>
                badge
              </span> */}
              <i class="fa-solid fa-id-card-clip"></i>
            </NavLink> 
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
