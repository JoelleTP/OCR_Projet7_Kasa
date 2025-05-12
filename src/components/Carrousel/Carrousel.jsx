import { useState } from 'react'
import arrow_right from "../../assets/images/arrow_right.png"
import arrow_left from "../../assets/images/arrow_left.png"
import './Carrousel.scss'

function Carrousel({pictures}) {
  const [slidesPosition, updateslidesPosition] = useState(0)
  const slidesLength = pictures.length
  return  slidesLength > 1 ? (
    <div className="carrousel">
      <img className="carrousel__image" src={pictures[slidesPosition]} alt={`Image ${slidesPosition + 1}`} />
      <button 
        className="carrousel__arrow carrousel__arrow--right" 
        onClick={() => updateslidesPosition(slidesPosition < slidesLength - 1 ? slidesPosition + 1 : 0)}
      >
        <img src={arrow_right} alt="flèche droite" />
      </button>
      <button 
        className="carrousel__arrow carrousel__arrow--left" 
        onClick={() => updateslidesPosition(slidesPosition > 0 ? slidesPosition - 1 : slidesLength - 1)}
      >
        <img src={arrow_left} alt="flèche gauche" />
      </button>
      <span className="carrousel__slidenumber">{slidesPosition + 1}/{slidesLength}</span>
    </div>
  ) : (
    <div className="carrousel">
      <img className="carrousel__image" src={pictures[slidesPosition]} alt={`Image ${slidesPosition + 1}`} />
    </div>
  )
}

export default Carrousel