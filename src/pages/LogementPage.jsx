import Header from "../components/Header/Header.jsx"
import Collapse from "../components/Collapse/Collapse.jsx"
import Footer from "../components/Footer/Footer.jsx"
import { annonceLogement } from "../data/annoncesLogements.jsx"
import { useParams } from 'react-router'
import Carrousel from '../components/Carrousel/Carrousel.jsx'
import Tag from '../components/Tag/Tag.jsx'
import Host from '../components/Host/Host.jsx'
import Rate from '../components/Rate/Rate.jsx'
import '../assets/styles/LogementPage.scss'
import ErrorPage from './ErrorPage.jsx'
 
function LogementPage() {
    const { id } = useParams()
    const logement = annonceLogement.find((item) => item.id === id)
    if(!logement) return(<ErrorPage />)
    
    return (
        <>
            <Header />
            <section>
                <Carrousel 
                    pictures={logement.pictures}
                />
                <div className="container">
                    <div className="container__title">
                        <h2 className="logementPage__title">{logement.title}</h2>
                        <p className="logementPage__subtitle">{logement.location}</p>
                        <ul className="tags">
                            {logement.tags.map((tag) => (
                                <Tag
                                    key={tag}
                                    label={tag}
                                />
                             ))}
                        </ul>
                    </div>
                    <div className="container__hostRate">
                        <Host 
                            host={logement.host}
                        />
                        <Rate 
                        rating={logement.rating}
                        />
                    </div>  
                </div>                
                <div className="collapse__container">
                    <Collapse
                        name="Description"
                        description={logement.description}
                    />
                    <Collapse 
                        name="Equipements"
                        description={ 
                        <ul>
                            {logement.equipments.map((equipement) => (
                                <li key={equipement}>{equipement}</li>
                            ))}
                        </ul>
                        }
                    />
                </div>
            </section>
            <Footer />
        </>
    ) 
}

export default LogementPage