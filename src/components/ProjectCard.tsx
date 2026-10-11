import type { Project } from "../projects";
import { FaGithub } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { InfoIcon } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  onDetails: () => void;
};

const ProjectCard = ({ project, onDetails }: ProjectCardProps) => {
  return (
    <article className="border border-border p-4">
      <img
        src={project.image}
        alt={`${project.title} preview`}
        loading="lazy"
        className="aspect-video w-full object-cover border border-border"
      />

      <div className="mt-4 pb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium tracking-wider">{project.title}</h3>
          <p className="text-xs tracking-wider text-text-secondary">
            {project.stack.slice(0, 3).join(" · ")}
          </p>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={onDetails}
            aria-label={`${project.title} details`}
            className="icon-btn cursor-pointer"
          >
            <InfoIcon size={18} />
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="icon-btn"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live site`}
            className="icon-btn p-1 rounded-full border border-border"
          >
            <RxArrowTopRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
