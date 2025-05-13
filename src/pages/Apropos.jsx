import Header from "../components/Header/Header.jsx"
import Banner from "../components/Banner/Banner.jsx"
import { AproposTxt } from "../data/AproposTxt.jsx"
import Collapse from "../components/Collapse/Collapse.jsx"
import Footer from "../components/Footer/Footer.jsx"
import imageApropos from "../assets/images/imageApropos.png"

function Apropos() {
    return (
        <>
            <Header />
            <Banner
                    image={imageApropos}
            />
            <section> 
                <div className="AproposSection">
                    {AproposTxt.map(({ id, name, description }) => (
                        <Collapse
                            key={id}
                            name={name}
                            description={description}    
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    ) 
}

export default Apropos