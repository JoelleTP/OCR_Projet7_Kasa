import './Cards.scss'
import { Link } from "react-router"

function Card({ id, title, cover }) {
    if(!id) return null
    return (
    <Link className="gallery__card" to={`/logement/${id}`}>
        {cover && <img className="card__cover" src={cover} alt={title ? `${title} cover` : "Image de logement"} />}
        {title && <h2 className="card__title">{title}</h2>}
    </Link>
    )
}

export default Card