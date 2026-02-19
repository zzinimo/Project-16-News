import { Link } from "react-router-dom";
import "./Footer.css";
import gitHubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/Linkedin.svg";

function Footer() {
  return (
    <div className="footer__content">
      <p className="footer__copyright">
        &copy; 2024 Supersite, Powered by News API
      </p>
      <div className="footer__links-container">
        <div className="footer__nav-links">
          <Link to="/" className="footer__links-link">
            Home
          </Link>
          <a href="https://tripleten.com/" className="footer__links-link">
            TripleTen
          </a>
        </div>

        <div className="footer__social-links">
          <a href="google.com/" className="footer__links-link">
            <img src={gitHubLogo} alt="Git Hub Logo" />
          </a>
          <a href="espn.com" className="footer__links-link">
            <img src={linkedinLogo} alt="Linkedin Logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
