import amazon from "../assets/amazon.png";
import news from "../assets/news.png";
import textcraft from "../assets/textcraft.png";
import urbanclap from "../assets/urbanclap.png";
import rps from "../assets/rps.png";
import solarmax from "../assets/solarmax.png";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects">
        <div className="card">
          <img src={solarmax} alt="SolarMax" className="project-img" />
          <h3>SolarMax</h3>
          <p>
            A modern solar energy website built with React.js and Vite. Features
            responsive design, service showcase, solar calculator, project
            gallery, and contact section.
          </p>

          <div className="project-links">
            <a
              href="https://solar-max-nexw.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/rajkumar-dev04/Solar-Max"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="card">
          <img src={amazon} alt="Amazon Clone" className="project-img" />
          <h3>Amazon Clone</h3>
          <p>
            An e-commerce website inspired by Amazon with product listings and
            responsive design.
          </p>

          <div className="project-links">
            <a
              href="https://amazon-clone-wcqt.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/rajkumar-dev04"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="card">
          <img src={urbanclap} alt="Urban Clap" className="project-img" />
          <h3>Urban Clap</h3>
          <p>
            A service booking platform where users can find and book
            professionals for home services.
          </p>

          <div className="project-links">
            <a
              href="https://urban-clap-rose.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="card">
          <img src={news} alt="News Hunt" className="project-img" />
          <h3>News Hunt</h3>
          <p>
            A React news application that displays news articles using API data.
          </p>

          <div className="project-links">
            <a
              href="https://news-hunt-alpha.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="card">
          <img src={textcraft} alt="TextCraft" className="project-img" />
          <h3>TextCraft</h3>
          <p>
            A text utility app with features like text conversion, word count,
            and dark mode.
          </p>

          <div className="project-links">
            <a
              href="https://text-craft-by-raj.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="card">
          <img src={rps} alt="Rock Paper Scissor" className="project-img" />
          <h3>Rock Paper Scissor</h3>
          <p>
            A simple JavaScript game where users play against the computer with
            score tracking.
          </p>

          <div className="project-links">
            <a
              href="https://rps-by-raj.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;