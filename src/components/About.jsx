function About() {
  return (
    <section id="about" className="section about-section">

      <div className="section-heading">
        <span>ABOUT ME</span>
        <h2>Building Modern Digital Experiences</h2>
        <p>
          Passionate about creating responsive, high-performance and visually
          appealing web applications using modern frontend technologies.
        </p>
      </div>

      <div className="about-grid">

        {/* Left Card */}

        <div className="about-card">

          <h3>Who I Am</h3>

          <p>
            Hi, I'm <strong>Raj Kumar</strong>, a passionate Frontend Developer
            specializing in HTML, CSS, JavaScript, React.js and modern web
            technologies.
          </p>

          <p>
            I enjoy transforming ideas into beautiful, responsive and
            user-friendly websites that deliver excellent user experiences
            across all devices.
          </p>

          <p>
            I continuously learn new technologies and focus on writing clean,
            maintainable and scalable code while following modern development
            practices.
          </p>

        </div>

        {/* Right Card */}

        <div className="about-card experience-card">

          <span className="experience-badge">
            Current Position
          </span>

          <h3>Web Developer</h3>

          <h4>Grow Biz</h4>

          <p>
            Currently working as a <strong>Web Developer at The Grow Biz</strong>,
            where I build responsive business websites, develop reusable React
            components, improve user interfaces, optimize website performance
            and contribute to real client projects.
          </p>

          <div className="experience-list">

            <div>
              ✔ Responsive Website Development
            </div>

            <div>
              ✔ React.js Application Development
            </div>

            <div>
              ✔ Modern UI / UX Implementation
            </div>

            <div>
              ✔ Client Project Collaboration
            </div>

            <div>
              ✔ Performance Optimization
            </div>

            <div>
              ✔ Clean & Maintainable Code
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;