import "./About.css"
import avatar from "../../assets/avatar.svg"; 

function About(){

	return (
		<div className="about__content">
			<img src={avatar} alt="avatar" className="about__content-avatar"/>
			<div className="about__content-text">

				<h1 className="about__content-text-title">About the author</h1>
				<p className="about__content-text-subtext about__content-text-subtext-about">This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know. </p>
				<p className="about__content-text-subtext about__content-text-subtext-experience">You can also talk about your experience with TripleTen, what you learned there, and how you can help potential customers.</p>
			</div>
		</div>
	)
}

export default About; 