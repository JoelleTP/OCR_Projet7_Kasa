import Card from '../Cards/Cards.jsx'
import { annonceLogement } from "../../data/annoncesLogements.jsx"
import './Gallery.scss'


function Gallery() {
    return (
        <section className="gallery">
            {annonceLogement.map(({ id, title, cover }) => (
                <Card 
                    key={id}
                    id={id}
                    title={title}
                    cover={cover}    
                />
            ))}
        </section>
    )
}

export default Gallery