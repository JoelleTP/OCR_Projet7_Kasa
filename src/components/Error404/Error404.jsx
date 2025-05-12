import { Link } from "react-router"
import './Error404.scss'

function Error404() {
    return (
        <div className="ErrorPage">
            <h1 className="ErrorPage__title">404</h1>
            <p className="ErrorPage__txt">Oups! La page que vous demandez n'existe pas</p>
            <Link className="ErrorPage__link" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error404