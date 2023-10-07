import React, { useState } from 'react';
import './IconCarouselComponent.css';

const IconCarouselComponent = () => {
  const [isStepAnimation, setIsStepAnimation] = useState(false);

  const handleToggleAnimation = () => {
      var el = document.querySelector('.icon-cards__content');
      el.classList.toggle('step-animation');  
  };

  return (
    <div className='carousel-container'>
    <div className={`icon-cards ${isStepAnimation ? 'step-animation' : ''}`}>
      <div className="icon-cards__content">
        <div className="icon-cards__item d-flex align-items-center justify-content-center">
          <span className="h1">🙂</span>
        </div>
        <div className="icon-cards__item d-flex align-items-center justify-content-center">
          <span className="h1">😊</span>
        </div>
        <div className="icon-cards__item d-flex align-items-center justify-content-center">
          <span className="h1">😀</span>
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
        <label className="checkbox__checkbox" htmlFor="toggle-animation"></label>
        <label className="checkbox__label" htmlFor="toggle-animation">
          Toggle animation
        </label>
      </div>
    </div>
    </div>
  );
};

export default IconCarouselComponent;
