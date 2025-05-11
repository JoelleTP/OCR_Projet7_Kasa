
import './Banner.scss'

function Banner({ title, image }) {
    return (<div className="banner">
        <img className="banner__cover" src={image} alt="Bannière paysage" />
        {title && <h1 className="banner__title">{title}</h1>}
    </div>)
}

export default Banner