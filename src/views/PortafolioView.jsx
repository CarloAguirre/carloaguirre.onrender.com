import React from 'react'
import IconCarouselComponent from '../components/carousel/Slider'
import { Portafolio } from '../components/portafolio/Portafolio'

export const PortafolioView= () => {
  return (
    <div className='portafolioView-container'>
      <IconCarouselComponent />
      <Portafolio />
    </div>
  )
}
