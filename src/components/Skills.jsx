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
} from "react-icons/fa";

function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", level: "95%" },
    { icon: <FaCss3Alt />, name: "CSS3", level: "92%" },
    { icon: <FaJs />, name: "JavaScript", level: "90%" },
    { icon: <FaReact />, name: "React.js", level: "90%" },
    { icon: <FaBootstrap />, name: "Bootstrap", level: "88%" },
    { icon: <FaGitAlt />, name: "Git", level: "85%" },
    { icon: <FaGithub />, name: "GitHub", level: "90%" },
    { icon: <FaServer />, name: "REST APIs", level: "85%" },
  ];

  return (
    <section id="skills" className="section skills-section">

      <div className="section-heading">
        <span>Technical Skills</span>
        <h2>Technologies I Work With</h2>
        <p>
          I specialize in building responsive, modern and user-friendly web
          applications using the latest frontend technologies.
        </p>
      </div>

      <div className="skills-layout">

        <div className="skills-left">

          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>

              <div className="skill-top">

                <div className="skill-name">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>

                <span>{skill.level}</span>

              </div>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{ width: skill.level }}
                ></div>
              </div>

            </div>
          ))}

        </div>

        <div className="skills-right">

          <div className="skill-card">
            <FaLaptopCode />

            <h3>Frontend Development</h3>

            <p>
              Building responsive and interactive user interfaces using
              React.js, JavaScript and modern CSS.
            </p>
          </div>

          <div className="skill-card">
            <FaCode />

            <h3>Clean Code</h3>

            <p>
              Writing reusable components, maintainable code and scalable
              frontend applications.
            </p>
          </div>

          <div className="skill-card">
            <FaServer />

            <h3>API Integration</h3>

            <p>
              Connecting frontend applications with REST APIs and handling
              dynamic data efficiently.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;