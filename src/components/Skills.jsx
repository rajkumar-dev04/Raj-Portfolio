import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaServer,
  FaCode,
  FaLaptopCode,
  FaWordpress,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiShopify,
  SiNpm,
  SiVite,
} from "react-icons/si";

function Skills() {
  const getWidth = (level) => {
    switch (level) {
      case "Advanced":
        return "90%";
      case "Intermediate":
        return "70%";
      default:
        return "50%";
    }
  };

  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      level: "Advanced",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      level: "Advanced",
    },
    {
      icon: <FaJs />,
      name: "JavaScript (ES6+)",
      level: "Advanced",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      level: "intermediate",
    },
    {
      icon: <FaReact />,
      name: "React.js",
      level: "Advanced",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      level: "Advanced",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
      level: "Advanced",
    },
    // {
    //   icon: <SiMui />,
    //   name: "Material UI",
    //   level: "Intermediate",
    // },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      level: "Advanced",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      level: "Intermediate",
    },
    {
      icon: <FaServer />,
      name: "REST APIs",
      level: "Advanced",
    },
    // {
    //   icon: <SiMongodb />,
    //   name: "MongoDB",
    //   level: "Intermediate",
    // },
    // {
    //   icon: <SiMysql />,
    //   name: "MySQL",
    //   level: "Advanced",
    // },
    // {
    //   icon: <FaWordpress />,
    //   name: "WordPress",
    //   level: "Advanced",
    // },
    // {
    //   icon: <SiShopify />,
    //   name: "Shopify",
    //   level: "Intermediate",
    // },
    {
      icon: <FaGitAlt />,
      name: "Git",
      level: "Advanced",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      level: "Advanced",
    },
    {
      icon: <SiNpm />,
      name: "NPM",
      level: "Advanced",
    },
    {
      icon: <SiVite />,
      name: "Vite",
      level: "Advanced",
    },
    {
      icon: <FaCode />,
      name: "VS Code",
      level: "Advanced",
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <span>My Expertise</span>

        <h2>Technologies & Tools I Use</h2>

        <p>
          I build modern, responsive and scalable web applications using
          frontend technologies, clean code practices and industry-standard
          development tools.
        </p>
      </div>

      <div className="skills-layout">
        {/* Skills List */}
        <div className="skills-left">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-top">
                <div className="skill-name">
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>

                <span className="skill-level">{skill.level}</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{ width: getWidth(skill.level) }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="skills-right">
          <div className="skill-card">
            <FaLaptopCode />

            <h3>Frontend Development</h3>

            <p>
              Creating responsive and interactive user interfaces using
              React.js, JavaScript, HTML, CSS and modern UI libraries.
            </p>
          </div>

          <div className="skill-card">
            <FaCode />

            <h3>Component Based Coding</h3>

            <p>
              Developing reusable React components with clean structure,
              optimized performance and maintainable code.
            </p>
          </div>

          <div className="skill-card">
            <FaServer />

            <h3>API & Data Handling</h3>

            <p>
              Integrating REST APIs, managing dynamic data and connecting
              frontend applications with backend services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;