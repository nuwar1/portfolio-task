import style from './navbar.module.css'
function Navbar() {

    return (
        <nav className={`navbar navbar-expand-lg py-4 ${style.customNav}`}>
            <div className="container">
                <a className={`navbar-brand  ${style.customNav}`} href="#">START BOOTSTRAP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-4">
                        <li className="nav-item">
                            <a className={`nav-link  ${style.navLink} ${style.isActive}`} href="#">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${style.navLink}`} href="#">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${style.navLink}`} href="#">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;