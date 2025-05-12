
import './Banner.scss'

function Banner({ title, image, brightness }) {
    const brightnessStyle = {filter: `brightness(${brightness}%)`}
    return (<section className="banner">
        <img 
            className= "banner__cover"
            src={image} 
            alt="Bannière paysage"
            style={brightnessStyle}
        />
        {title && <h1 className="banner__title">{title}</h1>}
    </section>)
}

export default Banner