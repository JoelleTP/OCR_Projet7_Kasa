import logo from "../../assets/images/WhiteLOGO.svg"
import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="logo Kasa" />
            <p className="footer__txt">&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer