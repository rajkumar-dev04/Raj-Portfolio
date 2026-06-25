import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <a href="#home" className="footer-logo">
          <span>Raj</span> Kumar
        </a>

        <p>
          Frontend Developer passionate about creating modern,
          responsive and beautiful web applications.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a
            href="mailto:rajkumar.contact04@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/rajkumar-dev04"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/raj-kumar-4a1a91218"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <a href="#home" className="back-top">
          <FaArrowUp />
        </a>

        <p className="copyright">
          © 2026 Raj Kumar. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;