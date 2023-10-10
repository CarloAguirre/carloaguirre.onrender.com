import React, { useState } from 'react';
import './IconCarouselComponent.scss';

const IconCarouselComponent = () => {
  const [isStepAnimation, setIsStepAnimation] = useState(false);

  const handleToggleAnimation = () => {
      var el = document.querySelector('.icon-cards__content');
      el.classList.toggle('step-animation');  
      setIsStepAnimation(!isStepAnimation)
  };

  return (
  <div className='portafolio-wrapper'>
    <h1 className='h1'>Empresas que me han preferido</h1>
  <div className='logos-wrapper'>
    <img src="https://res.cloudinary.com/dubwhwd1w/image/upload/v1670111664/goat_jkfpoi.webp" alt="logo_cabra-del-valle" style={{backgroundColor: '#212529', padding: '10px'}}/>
    <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1696954807/AGILogo_cw2jea.webp" alt="logo_agi-controls" />
    <div className='logo_buenaaventura'>
      <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1696955157/logo_1_-_copia_iewgq1.webp" alt="logo_buenaaventura" />
      <p>BuenaAventura</p>
    </div>   
  </div>
  <div className="checkbox">
        <input
          className="d-none"
          id="toggle-animation"
          type="checkbox"
          checked={isStepAnimation}
          onChange={handleToggleAnimation}
          />
        <label className={isStepAnimation ? 'checkbox__checkbox checked' : 'checkbox__checkbox'}htmlFor="toggle-animation"></label>
        <label className="checkbox__label ms-1" htmlFor="toggle-animation">
          Animación estatica
        </label>
    </div>
    <div className='carousel-container'>
    <div className={`icon-cards ${isStepAnimation ? 'step-animation' : ''}`}>
      <div className="icon-cards__content">
      <a href="https://agi-controls.cl/" className="icon-cards__item d-flex align-items-center justify-content-center" target='_blank'></a>
      <a href="https://buenaaventura.cl/" className="icon-cards__item d-flex align-items-center justify-content-center" target='_blank'></a>
      <a href="https://www.cabradelvalle.cl/" className="icon-cards__item d-flex align-items-center justify-content-center" target='_blank'></a>
      </div>
      
    </div>
    
    </div>
  </div>
  );
};

export default IconCarouselComponent;
