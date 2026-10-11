import { projects, type Project } from "../projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

const Projects = () => {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <section id="projects" className="py-10 pb-20 border-b border-b-border">
      <h2 className="font-heading text-2xl sm:text-3xl tracking-wide font-medium mb-8 relative inline-block">
        Projects
        <span className="absolute bottom-1.5 ml-1.5 w-7 h-0.5 bg-accent"></span>
      </h2>
      <div className="grid sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            project={p}
            onDetails={() => setActive(p)}
          />
        ))}
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
      <p className="mt-8 text-sm tracking-wider text-text-secondary">
        More of my work is on{" "}
        <a
          href="https://github.com/DebabrataBanik"
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://www.frontendmentor.io/profile/DebabrataBanik"
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          Frontend Mentor
        </a>
        .
      </p>
    </section>
  );
};

export default Projects;
