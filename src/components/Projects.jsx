import buildflow from "../assets/buildflow.png";
import geminimotors from "../assets/geminimotors.png";
import nova from "../assets/nova.png";
import luxewear from "../assets/luxewear.png";
import elorra from "../assets/elorra.png";
import amazon from "../assets/amazon.png";
import news from "../assets/news.png";
import textcraft from "../assets/textcraft.png";
import urbanclap from "../assets/urbanclap.png";
import rps from "../assets/rps.png";
import solarmax from "../assets/solarmax.png";
import jobflow from "../assets/jobflow.png";
const projects = [
  {
  title: "BuildFlow Pro",
  image: buildflow,
  category: "Enterprise Construction Management SaaS",
  description:
    "A premium enterprise SaaS platform built for construction companies to manage clients, projects, employees, inventory, finances, invoices, reports, analytics, and team collaboration through a modern dashboard. Designed with a professional UI, responsive layouts, interactive charts, Kanban boards, and business-focused workflows.",
  tech: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "React Router",
    "Recharts",
    "Framer Motion"
  ],
  live: "https://YOUR-BUILDFLOW.vercel.app",
  github: "https://github.com/rajkumar-dev04/buildflow-pro",
  featured: true,
},
{
  title: "Gemini Motors",
  image: geminimotors,
  category: "Commercial Vehicle & Logistics Website",
  description:
    "A premium corporate website developed for a commercial vehicle and logistics company. Features an elegant UI, fleet showcase, vehicle categories, responsive layouts, contact forms, business information, and a modern user experience focused on customer engagement.",
  tech: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Framer Motion"
  ],
  live: "https://YOUR-GEMINI-MOTORS.vercel.app",
  github: "https://github.com/rajkumar-dev04/gemini-motors",
  featured: true,
},
  {
    title: "Elorra Beauty Co.",
    image: elorra,
    category: "Featured Project",
    description:
      "A luxury beauty e-commerce website with premium UI, product filtering, shopping cart, wishlist, quick view modal, responsive layout, and modern product showcase.",
    tech: ["React", "Vite", "CSS3", "JavaScript", "React Icons"],
    live: "https://ellora-beauty-co-oi1n.vercel.app",
    github: "https://github.com/rajkumar-dev04/Ellora-Beauty-Co",
    featured: true,
  },
  {
  title: "Nova AI Workspace",
  image: nova,
  category: "AI Productivity SaaS Dashboard",
  description:
    "A modern AI-powered productivity dashboard built with React.js and Vite. Features a Gemini AI chatbot, smart notes, task management, productivity analytics, interactive charts, responsive design, elegant animations, and a premium SaaS-inspired user interface for enhanced workflow and productivity.",
  tech: [
    "React",
    "Vite",
    "JavaScript",
    "CSS3",
    "Gemini API",
    "React Icons",
    "Recharts",
  ],
  live: "https://nova-ai-workspace-one.vercel.app",
  github: "https://github.com/rajkumar-dev04/Nova-AI-Workspace",
  featured: true,
},
{
  title: "JobFlow AI",
  image: jobflow,
  category: "AI Job Application Tracker",
  description:
    "A modern AI-powered job application tracker built with React.js and Vite. Features a Kanban job board, application dashboard, AI cover letter writer, resume manager, interview preparation section, analytics charts, responsive design, and a premium SaaS-inspired interface.",
  tech: [
    "React",
    "Vite",
    "JavaScript",
    "CSS3",
    "React Icons",
    "Recharts",
  ],
  live: "https://job-flow-ai-eight.vercel.app",
  github: "https://github.com/rajkumar-dev04/JobFlow-AI",
  featured: true,
},
  {
  title: "LuxeWear Fashion",
  image: luxewear,
  category: "Luxury Fashion E-Commerce",
  description:
    "A premium fashion e-commerce website inspired by luxury brands. Built with React.js and Vite featuring a cinematic hero video, shopping cart, wishlist, quick view modal, product search, category filtering, responsive design, elegant animations, and a modern luxury shopping experience.",
  tech: [
    "React",
    "Vite",
    "JavaScript",
    "CSS3",
    "React Icons",
  ],
  live: "https://luxe-wear-fashion.vercel.app",
  github: "https://github.com/rajkumar-dev04/LuxeWear-Fashion",
  featured: true,
},
  {
    title: "SolarMax",
    image: solarmax,
    category: "Business Website",
    description:
      "A modern solar energy website with responsive design, service showcase, solar calculator, project gallery, and contact section.",
    tech: ["React", "Vite", "CSS3"],
    live: "https://solar-max-nexw.vercel.app",
    github: "https://github.com/rajkumar-dev04/Solar-Max",
  },
  {
    title: "Amazon Clone",
    image: amazon,
    category: "E-Commerce",
    description:
      "An Amazon-inspired e-commerce website with product listings, responsive design, and clean shopping UI.",
    tech: ["React", "CSS3"],
    live: "https://amazon-clone-wcqt.vercel.app",
    github: "https://github.com/rajkumar-dev04",
  },
  {
    title: "Urban Clap",
    image: urbanclap,
    category: "Service Platform",
    description:
      "A service booking platform where users can explore and book professionals for home services.",
    tech: ["React", "CSS3"],
    live: "https://urban-clap-rose.vercel.app",
  },
  {
    title: "News Hunt",
    image: news,
    category: "News App",
    description:
      "A React news application that displays news articles using API-style data with a clean card layout.",
    tech: ["React", "API", "CSS3"],
    live: "https://news-hunt-alpha.vercel.app",
  },
  {
    title: "TextCraft",
    image: textcraft,
    category: "Utility App",
    description:
      "A text utility app with text conversion, word counter, character counter, and dark mode features.",
    tech: ["React", "Bootstrap", "CSS3"],
    live: "https://text-craft-by-raj.vercel.app",
  },
  {
    title: "Rock Paper Scissor",
    image: rps,
    category: "JavaScript Game",
    description:
      "A browser-based JavaScript game where users play against the computer with score tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://rps-by-raj.vercel.app",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <span>My Work</span>
        <h2>Featured Projects & Real-World Applications</h2>

<p>
  <p>
Explore a collection of enterprise SaaS platforms, AI-powered applications,
e-commerce experiences, and commercial business websites built using modern
web technologies. Each project demonstrates my ability to design scalable,
responsive, and production-ready solutions with a strong focus on performance,
user experience, and clean architecture.
</p>
</p>
      </div>

      <div className="projects">
        {projects.map((project, index) => (
          <div
            className={project.featured ? "card featured-card" : "card"}
            key={index}
          >
            {project.featured && <span className="featured-badge">Featured</span>}

            <div className="project-image-box">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            </div>

            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;