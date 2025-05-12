import Header from "../components/Header/Header.jsx"
import Error404 from "../components/Error404/Error404.jsx"
import Footer from "../components/Footer/Footer.jsx"
import '../assets/styles/General.scss'

function ErrorPage() {
    return (
        <>
            <Header />
            <Error404 />
            <Footer />
        </>
    )
}

export default ErrorPage