import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <div className="section-heading">
        <span>CONTACT</span>
        <h2>Let's Build Something Amazing Together</h2>

        <p>
          I'm currently open to Frontend Developer opportunities,
          freelance projects and exciting collaborations.
          Feel free to get in touch.
        </p>
      </div>

      <div className="contact-grid">

        <div className="contact-card">

          <h3>Get In Touch</h3>

          <div className="contact-item">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>rajkumar.contact04@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+919211844123</p>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Delhi, India</p>
            </div>
          </div>

        </div>

        <div className="contact-card">

          <h3>Connect With Me</h3>

          <div className="contact-buttons">

            <a
              href="mailto:rajkumar.contact04@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
              Email Me
            </a>

            <a
              href="https://github.com/rajkumar-dev04"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/raj-kumar-4a1a91218"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a href="/resume.pdf" download>
              <FaDownload />
              Download Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;