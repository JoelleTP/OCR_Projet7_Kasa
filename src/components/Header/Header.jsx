import logo from "../../assets/images/RedLOGO.svg"
import Nav from "../Navbar/Navbar.jsx"
import './Header.scss'



function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="logo Kasa" />
            <Nav />
        </header>
    )
}

export default Header