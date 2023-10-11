import React, { useEffect, useRef } from 'react';
import './App.scss'
import { Route, Routes } from 'react-router-dom';
import { SideBar } from './sideBar/SideBar'
import { NavBar } from './components/navBar/NavBar'
import { InicioView } from './views/InicioView';
import { EstudiosViews } from './views/EstudiosViews';
import { usePortafolio } from './context';
import { PortafolioView } from './views/PortafolioView';
import { CurriculumViews } from './views/CurriculumViews';

export const App = () => {
  const mainRef = useRef(null);
  const {mainSwitch} = usePortafolio()
  useEffect(() => {
    const updateAsideHeight = () => {
      const mainHeight = mainRef.current.clientHeight;
      document.documentElement.style.setProperty('--main-height', `${mainHeight}px`);
    };

    updateAsideHeight();
    window.addEventListener('resize', updateAsideHeight);

    return () => {
      window.removeEventListener('resize', updateAsideHeight);
    };
  }, [mainSwitch]);
  return (
    <>
    <div className='inicio-container'>
        <img src="main_image.png" alt="background image" className='bg-image'/>
        <div className='aside'><SideBar /></div>
        <div className='main' ref={mainRef}>
          <Routes>
            <Route path='/' element={<InicioView />} />
            <Route path='/estudios' element={<EstudiosViews />} />
            <Route path='/portafolio' element={<PortafolioView />} />
            <Route path='/curriculum' element={<CurriculumViews />} />
          </Routes>
        </div>
        <div className='navBar'>
        <NavBar />
        </div>
    </div>
    </>
    
  )
}
