 import "./Header.scss";
import logo from "../../assets/images/company-logo.svg";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header" role="banner">
            <nav className="header__nav" aria-label="Main navigation">
                <div className="header__container">
                    <NavLink to="/" className="header__logo-wrapper">
                        <img className="header__logo" src={logo} alt="Los Angeles Mountains Company Logo" />
                    </NavLink>
                    <h3 className="header__company-name"><span className="header__company-name--highlight">LOSANGELES</span> MOUNTAINS</h3>
                </div>
                <ul className="header__list" role="menu">
                    <li className="header__list-item" >
                        <NavLink 
                            to="/history" 
                            className= 'header__list-item--link'
                            role="menuitem"
                            aria-current="page">
                            01. HISTORY
                        </NavLink>
                    </li>
                    <li className="header__list-item" >
                        <NavLink 
                            to="/team" 
                            className= 'header__list-item--link'
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