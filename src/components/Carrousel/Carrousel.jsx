import { useState } from 'react'
import arrow_right from "../../assets/images/arrow_right.png"
import arrow_left from "../../assets/images/arrow_left.png"
import './Carrousel.scss'

function Carrousel({pictures}) {
  const [slidesPosition, updateSlidesPosition] = useState(0)
  if (!pictures || pictures.length === 0) return null
  const slidesCount = pictures.length
  const nextSlide = () =>
    updateSlidesPosition(slidesPosition < slidesCount - 1 ? slidesPosition + 1 : 0)
  const prevSlide = () =>
    updateSlidesPosition(slidesPosition > 0 ? slidesPosition - 1 : slidesCount - 1)  
    
  return (
    <div className="carrousel">
      <img className="carrousel__image" src={pictures[slidesPosition]} alt={`Image ${slidesPosition + 1}`} />
      { slidesCount > 1 && (
        <>
          <button 
            className="carrousel__arrow carrousel__arrow--right" 
            onClick={nextSlide}
          >
            <img src={arrow_right} alt="flèche droite" />
          </button>
          <button 
            className="carrousel__arrow carrousel__arrow--left" 
            onClick={prevSlide}
          >
            <img src={arrow_left} alt="flèche gauche" />
          </button>
          <span className="carrousel__slidenumber">{slidesPosition + 1}/{slidesCount}</span>
        </>
      )}
    </div>
  )
}

export default Carrousel