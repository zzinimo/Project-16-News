import "./About.css";
import avatar from "../../assets/avatar.svg";

function About() {
  return (
    <section className="about">
      <img src={avatar} alt="avatar" className="about__avatar" />
      <div className="about__text">
        <h1 className="about__title">About the author</h1>
        <p className="about__subtext about__subtext_about">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.{" "}
        </p>
        <p className="about__subtext about__subtext_experience">
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
