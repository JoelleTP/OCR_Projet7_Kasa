import arrow_back from "../../assets/images/arrow_back.svg"
import { useState } from 'react'
import './Collapse.scss'

function Collapse({ name, description, variant }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
        <div className="collapse__name">
            {name && <h2 className={`collapse__title ${variant ? `collapse__title--${variant}` : ""}`}>{name}</h2>}
            <button 
                className="collapse__button" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <img 
                    className={`arrow ${isOpen ? 'rotated' : 'rotated_reverse'}`}
                    src={arrow_back} 
                    alt="chevron pour détails" 
                />
            </button>
        </div>
        <div className="collapse__description" aria-hidden={!isOpen}>
            {description && <div className="collapse__txt">{description}</div>}
        </div>
    </div>)
}

export default Collapse