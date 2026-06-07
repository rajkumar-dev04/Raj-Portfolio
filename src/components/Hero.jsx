import profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="home" className="hero">

      <img
        src={profile}
        alt="Raj Kumar"
        className="profile-img"
      />

      <h1>
        Hi, I'm <span>Raj Kumar</span>
      </h1>

      <TypeAnimation
        sequence={[
          "Frontend Developer",
          1500,
          "React Developer",
          1500,
          "JavaScript Enthusiast",
          1500,
        ]}
        wrapper="h2"
        speed={50}
        repeat={Infinity}
        className="typing-text"
      />

      <p>
        Frontend Developer skilled in HTML, CSS, JavaScript and React.
        Passionate about building responsive, user-friendly and modern
        web applications.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">View Projects</a>
        <a href="#contact" className="btn outline">Contact Me</a>
        <a href="/resume.pdf" className="btn" download>
          Download Resume
        </a>
      </div>

    </section>
  );
}

export default Hero;