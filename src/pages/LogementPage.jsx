import '../assets/styles/style.scss'
import Collapse from "../components/Collapse/Collapse.jsx"
import { annonceLogement } from "../data/annoncesLogements.jsx"
import { useParams } from 'react-router'
import Carrousel from '../components/Carrousel/Carrousel.jsx'
import Title from '../components/Title/Title.jsx'
import Tag from '../components/Tag/Tag.jsx'
import Host from '../components/Host/Host.jsx'
import Rate from '../components/Rate/Rate.jsx'
import ErrorPage from './ErrorPage.jsx'
 
function LogementPage() {
    const { id } = useParams()
    const logement = annonceLogement.find((item) => item.id === id)

    if(!logement) return(<ErrorPage />)
    
    return (
        <>
            <Carrousel 
                pictures={logement.pictures}
            />
            <section className="logementDetails">
                <div className="logementDetails__titleTags">
                    <Title
                        title={logement.title}
                        subtitle={logement.location}
                    />
                    <ul className="tags">
                        {logement.tags.map((tag) => (
                            <Tag
                                key={tag}
                                label={tag}
                            />
                        ))}
                    </ul>
                </div>
                <div className="logementDetails__hostRate">
                    <Host 
                        host={logement.host}
                    />
                    <Rate 
                        rating={logement.rating}
                    />
                </div>
            </section>                
            <section className="collapse__container">
                <Collapse
                    name="Description"
                    description={logement.description}
                />
                <Collapse 
                    name="Equipements"
                    description={ 
                    <ul>
                        {logement.equipments?.map((equipement) => (
                            <li key={equipement}>{equipement}</li>
                        ))}
                    </ul>
                    }
                />
            </section>
        </>
    ) 
}

export default LogementPage