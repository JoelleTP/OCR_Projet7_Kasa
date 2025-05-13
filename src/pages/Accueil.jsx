import Header from "../components/Header/Header.jsx"
import Banner from "../components/Banner/Banner.jsx"
import Gallery from "../components/Gallery/Gallery.jsx"
import Footer from "../components/Footer/Footer.jsx"
import '../assets/styles/General.scss'
import imageAccueil from "../assets/images/imageAccueil.png"

function Accueil() {
    return (
        <>
            <Header />
            <Banner 
                title="Chez vous, partout et ailleurs"
                image={imageAccueil}
            />
        <section>
            <Gallery />
        </section>         
            <Footer />
        </>
    )
}

export default Accueil