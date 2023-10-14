import React from 'react'
import './inicio.scss'
import { Button } from 'react-bootstrap'


export const Inicio = () => {
  const mailTo = `mailto:carlo_aguirre@outlook.cl`;
  return (
    <div>
        <div className='profile-container'>
            <img src="yo.png" alt="" />
            <div className='profile-desc'>
                <h1>Soy <br />Carlo Aguirre Chacón,</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur labore, incidunt minima velit exercitationem, fugit voluptas fugiat ab doloremque nihil beatae sequi culpa assumenda dolorem odio ea repudiandae! Ipsa.</p>
                <div className='buttons-wrapper'>
                <Button className='button-cv'>
                  <a href="/C.V_carlo-aguirre.pdf" download="C.V_carlo-aguirre.pdf">
                    <div className='btn-custom'>
                      <p>Descargar Curriculum</p> 
                      <span className="material-symbols-outlined ms-2">
                        download
                      </span>
                    </div>
                  </a>
                </Button>

                <Button variant='secondary button-contact'>
                  <a href={mailTo}>
                    <div className='btn-custom'>
                      <p>Contactar</p>
                      <span class="material-symbols-outlined ms-2">
                        send
                      </span>
                    </div>
                  </a>
                </Button>
                </div>
            </div>
        </div>
    </div>
  )
}
