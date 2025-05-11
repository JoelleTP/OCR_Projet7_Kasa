import Card from '../Cards/Cards.jsx'
import { annonceLogement } from "../../data/annoncesLogements.jsx"
import './Gallery.scss'
import { Link } from "react-router"

function Gallery() {
    return (
        <div className="gallery">
            {annonceLogement.map(({ id, title, cover }) => (
                <Link key={id} className="gallery__card" to={`/LogementPage/${id}`}>
                    <Card 
                        title={title}
                        cover={cover}    
                    />
                </Link>
            ))}
        </div>
    )
}

export default Gallery