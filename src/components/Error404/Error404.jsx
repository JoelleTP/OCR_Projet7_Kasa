import { Link } from "react-router"
import './Error404.scss'

function Error404() {
    return (
        <section className="errorPage">
            <h1 className="errorPage__title">404</h1>
            <p className="errorPage__txt">Oups! La page que<span className="mobileFormat"><br /></span> vous demandez n'existe pas.</p>
            <Link className="errorPage__link" to="/">Retourner sur la page d'accueil</Link>
        </section>
    )
}

export default Error404