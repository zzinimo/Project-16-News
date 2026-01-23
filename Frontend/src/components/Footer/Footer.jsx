import {Link} from 'react-router-dom'
import "./Footer.css"; 


function Footer(){
	
	return (
		<div className="footer__content">
			<p className="footer__copyright">&copy; 2024 Supersite, Powered by News API</p>
			<div className="footer__links">
			<Link to="/" className='footer__links-link footer__links-link_home'>Home</Link>
			<a href="https://tripleten.com/" className="footer__links-link">TripleTen</a>
			<a href="google.com/" className="footer__links-link">GitHub</a>
			<a href="espn.com" className="footer__links-link">Indeed</a>
			</div>
		</div>
	)
}

export default Footer; 