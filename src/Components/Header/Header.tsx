 import "./Header.scss";
import logo from "../../assets/images/company-logo.svg";
import { NavLink } from "react-router-dom";

interface HeaderProps {
    modifier?: string;
}

const Header: React.FC<HeaderProps> = ({modifier}) => {
    return (
        <header className="header" role="banner">
            <nav className={`header__nav header__nav--${modifier}`} aria-label="Main navigation">
                <div className="header__container">
                    <NavLink to="/" className="header__logo-wrapper">
                        <img className="header__logo" src={logo} alt="Los Angeles Mountains Company Logo" />
                    </NavLink>
                    <h3 className={`header__company-name header__company-name--${modifier}`}><span className={`header__company-name--highlight`}>LOSANGELES</span> MOUNTAINS</h3>
                </div>
                <ul className="header__list"  role="menu">
                    <li className="header__list-item" >
                        <a
                            href="/#history" 
                            className={`header__list-link header__list-link--${modifier}`}
                            role="menuitem"
                            aria-current="page">
                            01. HISTORY
                        </a>
                    </li>
                    <li className="header__list-item" >
                        <a href="/#team" 
                            className={`header__list-link header__list-link--${modifier}`}
                            role="menuitem">
                            02. TEAM
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;