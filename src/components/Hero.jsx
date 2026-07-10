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
      {/* LEFT SIDE */}
      <div className="hero-left">

        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for Frontend Developer Roles & Freelance Projects
        </div>

        <span className="hero-greeting">
          👋 Hello, I'm
        </span>

        <h1 className="hero-title">
          Raj <span>Kumar</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "React.js Developer",
            2000,
            "JavaScript Developer",
            2000,
            "Building Modern Web Experiences",
            2000,
          ]}
          wrapper="h2"
          speed={45}
          repeat={Infinity}
          className="typing-text"
        />

        <p className="hero-description">
          Frontend Developer with hands-on experience building modern React
          applications, AI-powered platforms, enterprise dashboards, and
          business websites. I create fast, responsive, and visually engaging
          digital experiences with clean code, scalable architecture, and
          exceptional user interfaces.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            Explore My Work
            <FaArrowRight />
          </a>

          <a
            href="/resume.pdf"
            download
            className="btn outline"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>

        {/* Featured Project */}
        <div className="featured-project-card">
          <div className="featured-header">
            <span>⭐ Featured Project</span>
            <span className="project-status">● Live</span>
          </div>

          <h4>BuildFlow Pro</h4>

          <p>
            Enterprise Construction Management SaaS Platform featuring project
            management, finance tracking, inventory, AI assistant, file
            management, and analytics dashboard.
          </p>
        </div>

        {/* Social Links */}
        <div className="hero-social">

          <a
            href="https://github.com/rajkumar-dev04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/raj-kumar-4a1a91218"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="hero-right">

  <div className="profile-card">

    <div className="profile-ring"></div>

    <img
      src={profile}
      alt="Raj Kumar"
      className="profile-img"
    />

    <div className="profile-status">
      <span className="status-dot"></span>
      Available for Work
    </div>

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

    <div className="stat-card">
      <h3>25+</h3>
      <p>Projects Delivered</p>
    </div>

    <div className="stat-card">
      <h3>10+</h3>
      <p>Business Websites</p>
    </div>

    <div className="stat-card">
      <h3>React</h3>
      <p>Specialist</p>
    </div>

    <div className="stat-card">
      <h3>100%</h3>
      <p>Responsive UI</p>
    </div>

  </div>

</div>
    </section>
  );
}

export default Hero;