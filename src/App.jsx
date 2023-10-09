import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom';
import { SideBar } from './sideBar/SideBar'
import { NavBar } from './components/navBar/NavBar'
import { InicioView } from './views/Inicio';
export const App = () => {
  return (
    <div className='inicio-container'>
        <div className='aside'><SideBar /></div>
        <div className='main'>
          <Routes>
            <Route path='/' element={<InicioView />} />
          </Routes>
          <img src="main_image.png" alt="background image" className='bg-image'/>
        </div>
        <div className='navBar'>
        <NavBar />
        </div>
    </div>
    
  )
}
