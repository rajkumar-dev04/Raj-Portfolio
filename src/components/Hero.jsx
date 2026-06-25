import profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-left">

        <div className="hero-badge">
          🚀 Available for Frontend Developer Opportunities
        </div>

        <h1>
          Hi, I'm <span>Raj Kumar</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1800,
            "React Developer",
            1800,
            "JavaScript Developer",
            1800,
            "UI Developer",
            1800,
          ]}
          wrapper="h2"
          speed={45}
          repeat={Infinity}
          className="typing-text"
        />

        <p>
          Passionate Frontend Developer specializing in React.js, JavaScript,
          and responsive web applications. I enjoy building modern,
          user-focused websites with clean code, smooth animations, and
          premium user experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View Projects <FaArrowRight />
          </a>

          <a href="/resume.pdf" className="btn outline" download>
            <FaDownload />
            Resume
          </a>
        </div>

        <div className="hero-social">
          <a
            href="https://github.com/rajkumar-dev04"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>

      <div className="hero-right">

        <div className="profile-card">

          <img
            src={profile}
            alt="Raj Kumar"
            className="profile-img"
          />

          <div className="floating-icons react">
            <FaReact />
          </div>

          <div className="floating-icons js">
            <FaJs />
          </div>

          <div className="floating-icons html">
            <FaHtml5 />
          </div>

          <div className="floating-icons css">
            <FaCss3Alt />
          </div>

        </div>

        <div className="hero-stats">

          <div>
            <h3>7+</h3>
            <p>Projects</p>
          </div>

          <div>
            <h3>React</h3>
            <p>Specialist</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Responsive</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;