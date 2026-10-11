import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import type { Project } from "../projects";

type Props = { project: Project | null; onClose: () => void };

const ProjectModal = ({ project, onClose }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      className="m-auto w-[min(90vw,40rem)] border border-border bg-surface p-0 rounded-md text-text-secondary backdrop:bg-black/75"
    >
      {project && (
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-text-muted font-heading text-2xl font-medium tracking-wide">
              {project.title}
            </h3>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Close"
              className="text-text-muted cursor-pointer"
            >
              <FiX size={20} />
            </button>
          </div>
          <ul className="my-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li
                key={s}
                className="bg-background border border-border rounded-sm px-3 py-1 text-sm"
              >
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-4 leading-relaxed tracking-wide">
            {project.details.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      )}
    </dialog>
  );
};

export default ProjectModal;
