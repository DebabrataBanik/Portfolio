import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const Home = () => {
  return (
    <section id="home" className="py-10 pb-20 pt-30 border-b border-b-border">
      <h1 className="font-heading text-4xl font-medium mb-8 relative">
        Hi, I'm Debabrata <span className="absolute z-10 bottom-1">👋</span>
        <span className="absolute bottom-1 opacity-85 left-0 w-83 h-1.5 bg-accent"></span>
      </h1>
      <p className="tracking-wider text-text-secondary">
        I'm a frontend developer learning to build full-stack. Right now I'm
        working through DSA and system design fundamentals and building projects
        on the side with React, Tailwind and Node.
      </p>
      <p className="mt-5 tracking-wider text-text-secondary">
        I built this site to put my projects, skills and experience in one
        place. Thanks for stopping by!
      </p>
      <div className="flex gap-5 font-medium my-8">
        <a href="#projects" className="cta">
          View My Work
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          My Resume
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a
          className="cta-links"
          aria-label="GitHub"
          href="https://github.com/DebabrataBanik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="cta-links"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/debabrata-banik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="cta-links"
          aria-label="Frontend Mentor"
          href="https://www.frontendmentor.io/profile/DebabrataBanik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiFrontendmentor />
        </a>
      </div>
    </section>
  );
};

export default Home;
