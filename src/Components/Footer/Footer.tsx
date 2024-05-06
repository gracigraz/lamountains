
import "./Footer.scss";
import logo from "../../assets/images/company-logo.svg";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
    return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__logo-wrapper">
                <img src={logo} alt="LA Mountain Company Logo" className="footer__logo"/>
            </div>
            <h3 className="footer__company-name"><span className="footer__company-name--highlight">LOSANGELES</span> MOUNTAINS</h3>
        </div>
			<p className="footer__copyright">COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
    </footer>

    );
}

export default Footer;