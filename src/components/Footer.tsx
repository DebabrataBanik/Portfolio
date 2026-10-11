import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const Footer = () => (
  <footer className="tracking-wider flex items-center justify-between border-t border-border py-4 text-sm text-text-secondary">
    <p>© {new Date().getFullYear()} Debabrata Banik</p>
    <div className="flex items-center gap-5">
      <a
        aria-label="GitHub"
        href="https://github.com/DebabrataBanik"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/debabrata-banik"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        aria-label="Frontend Mentor"
        href="https://www.frontendmentor.io/profile/DebabrataBanik"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiFrontendmentor />
      </a>
    </div>
  </footer>
);

export default Footer;
