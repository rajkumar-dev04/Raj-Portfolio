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
    Hi, I'm <strong>Raj Kumar</strong>, a passionate Frontend Developer dedicated to
    building modern, responsive, and high-performance web applications.
    I specialize in <strong>React.js, JavaScript, TypeScript, WordPress.</strong>,
    transforming ideas into intuitive digital experiences with clean code,
    scalable architecture, and user-centric design.
  </p>

  <p>
    I enjoy developing AI-powered applications, business websites,
    enterprise dashboards, SaaS platforms, and e-commerce solutions that
    combine functionality with visually appealing interfaces. My focus is on
    creating fast, accessible, and engaging products that deliver real value
    to both businesses and users.
  </p>

  <p>
    Currently, I work as a <strong>Web Developer at The Grow Biz</strong>, where I
    collaborate on client projects, develop responsive web applications,
    customize WordPress and Shopify websites, and build scalable digital
    solutions for businesses across various industries.
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