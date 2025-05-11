import { NavLink } from "react-router"

function Nav() {
    return (
        <nav className="navbar">
            <NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/">Accueil</NavLink>
            <NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"} to="/Apropos">A propos</NavLink>
        </nav>
    )
}

export default Nav