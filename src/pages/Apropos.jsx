import '../assets/styles/style.scss'
import Banner from "../components/Banner/Banner.jsx"
import { AproposTxt } from "../data/AproposTxt.jsx"
import Collapse from "../components/Collapse/Collapse.jsx"
import imageApropos from "../assets/images/imageApropos.png"

function Apropos() {
    return (
        <>
            <Banner
                    image={imageApropos}
            />
            <section className="aboutSection">
                {AproposTxt.map(({ id, name, description }) => (
                    <Collapse
                        key={id}
                        name={name}
                        description={description}    
                    />
                ))}
            </section>
        </>
    ) 
}

export default Apropos