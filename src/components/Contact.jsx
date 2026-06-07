import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact Me</h2>

      <div className="contact-links">

        <a
          href="mailto:rajkumar.contact04@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope /> Email
        </a>

        <a
          href="https://github.com/rajkumar-dev04"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/raj-kumar-4a1a91218"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>

      </div>
    </section>
  );
}

export default Contact;