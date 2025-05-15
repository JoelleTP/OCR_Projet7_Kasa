import '../assets/styles/style.scss'
import Banner from "../components/Banner/Banner.jsx"
import Gallery from "../components/Gallery/Gallery.jsx"
import imageAccueil from "../assets/images/imageAccueil.png"

function Accueil() {
    return (
        <>
            <Banner 
                title="Chez vous, partout et ailleurs"
                image={imageAccueil}
            />
            <Gallery />       
        </>
    )
}

export default Accueil