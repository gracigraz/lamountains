import "./Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header" role="banner">
            <nav className="header__nav" aria-label="Main navigation">
                <div className="header__logo-container">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'header__logo active' : 'header__logo'}>
                        <img src={logo} alt="Los Angeles Mountains Company Logo" />
                    </NavLink>
                    <span className="header__company-name">LOSANGELES MOUNTAINS</span>
                </div>
                <ul className="main-nav__list" role="menu">
                    <li className="main-nav__item" >
                        <NavLink 
                            to="/history" 
                            className={({ isActive }) => isActive ? 'main-nav__item--link main-nav__item--active' : 'main-nav__item--link'}
                            role="menuitem"
                            aria-current="page">
                            01. HISTORY
                        </NavLink>
                    </li>
                    <li className="main-nav__item" >
                        <NavLink 
                            to="/team" 
                            className={({ isActive }) => isActive ? 'main-nav__item--link main-nav__item--active' : 'main-nav__item--link'}
                            role="menuitem">
                            02. TEAM
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;