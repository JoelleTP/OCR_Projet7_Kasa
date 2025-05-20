
import './Banner.scss'

function Banner({ title, image, variant }) {
    return (
    <div className={`banner ${variant ? `banner--${variant}` : ""}`}>
        <img 
            className= "banner__cover"
            src={image} 
            alt="Bannière paysage"
        />
        {title && <h1 className="banner__title">{title}</h1>}
    </div>)
}

export default Banner