import { Link } from "react-router-dom";
import "./Footer.css";
import gitHubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/Linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2024 Supersite, Powered by News API
      </p>
      <div className="footer__links">
        <div className="footer__nav">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <a href="https://tripleten.com/" className="footer__link">
            TripleTen
          </a>
        </div>

        <div className="footer__social">
          <a href="google.com/" className="footer__link">
            <img src={gitHubLogo} alt="Git Hub Logo" />
          </a>
          <a href="espn.com" className="footer__link">
            <img src={linkedinLogo} alt="Linkedin Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
