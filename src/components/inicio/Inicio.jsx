import React from 'react'
import './inicio.scss'
import { Button } from 'react-bootstrap'


export const Inicio = () => {
  return (
    <div>
        <div className='profile-container'>
            <img src="yo.png" alt="" />
            <div className='profile-desc'>
                <h1>Soy <br />Carlo Aguirre Chacón,</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur labore, incidunt minima velit exercitationem, fugit voluptas fugiat ab doloremque nihil beatae sequi culpa assumenda dolorem odio ea repudiandae! Ipsa.</p>
                <div className='buttons-wrapper'>
                  <Button className='button-cv'><div className='btn-custom'><p>Descargar Curriculum</p> <span class="material-symbols-outlined ms-2">
                  download
                  </span></div></Button>
                  <Button variant='secondary'><div className='btn-custom'><p>Contactar</p> <span class="material-symbols-outlined ms-2">
                  send
                  </span></div></Button>
                </div>
            </div>
        </div>
    </div>
  )
}
