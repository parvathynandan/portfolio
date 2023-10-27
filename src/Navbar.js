import { Fragment, useState } from "react"

const Navbar = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    const handleClick = () => {
        setIsHamburgerOpen(active => !active)
    }
return (
    <Fragment>

        {/* For the Desktop */}
        <nav id="navbar-desktop">
            <p class="header-title">Parvathy Nandakumar</p>
            <div>
                <ul class="navbar-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Technologies</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        {/* For the mobile */}
        <nav id="navbar-hamburger">
            <p class="header-title">Parvathy Nandakumar</p>
            <div class="hamburger-menu">
                <div className={isHamburgerOpen ? "hamburger-icon open" : 'hamburger-icon'} onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={isHamburgerOpen ? "menu-links open" : 'menu-links'}>
                    <li><a onClick={handleClick} href="#home">Home</a></li>
                    <li><a onClick={handleClick} href="#about">About</a></li>
                    <li><a onClick={handleClick} href="#experience">Experience</a></li>
                    <li><a onClick={handleClick} href="#projects">Technologies</a></li>
                    <li><a onClick={handleClick} href="#contact">Contact</a></li>
                </div>
            </div>
        </nav>
    </Fragment>
)
}

export default Navbar