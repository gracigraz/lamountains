
import "./Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
    return (
    <footer className="footer">
        <div className="footer__container">
            <img src="" alt="" className="footer__logo"/>
			<span className="footer__company-name">LOSANGELES MOUNTAINS</span>
        </div>
			<p className="footer__copyright">COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
    </footer>

    );
}

export default Footer;