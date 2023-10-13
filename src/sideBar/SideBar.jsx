import React from 'react'
import './sideBar.scss'
export const SideBar = () => {
  return (
    <>
      <div className='sideBar-container'>
        <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1697134425/Imagen1_eswblp.webp" alt="" />    
      </div>
      <div className='icons-wrapper'>
        <a href="https://www.linkedin.com/in/carlo-aguirre-30909242/" target='_blank'><i class="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/CarloAguirre" target='_blank'><i class="fab fa-github"></i></a>
        <a href="https://www.youtube.com/c/permacultural" target='_blank'><i class="fab fa-youtube"></i></a>
        <a href="https://web.facebook.com/people/Buena-Aventura/100042242845549/" target='_blank'><i class="fab fa-facebook-f"></i></a>
        <a href="https://wa.me/56934615794" target='_blank'><i class="fab fa-whatsapp"></i></a>
      </div>
    </>
  )
}
