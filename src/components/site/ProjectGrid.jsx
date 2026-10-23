import { useCallback, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectLightbox from "./ProjectLightbox";

export default function ProjectGrid({ projects, featured = false }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const open = (project) => {
    const index = projects.findIndex((item) => item.id === project.id);
    setActiveIndex(index >= 0 ? index : 0);
  };

  const navigate = useCallback(
    (direction) => {
      setActiveIndex((current) => {
        if (current === null) return current;
        return (current + direction + projects.length) % projects.length;
      });
    },
    [projects.length]
  );

  const rest = featured ? projects.slice(3) : projects;

  return (
    <div>
      {featured && projects.length >= 3 ? (
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-7">
          <div className="lg:col-span-7">
            <ProjectCard project={projects[0]} aspect="aspect-[4/5]" onOpen={open} />
          </div>
          <div className="grid gap-6 lg:col-span-5 lg:gap-7">
            <ProjectCard project={projects[1]} aspect="aspect-[4/3]" onOpen={open} />
            <ProjectCard project={projects[2]} aspect="aspect-[4/3]" onOpen={open} />
          </div>
        </div>
      ) : null}

      {rest.length ? (
        <div
          className={
            featured
              ? "mt-6 grid gap-6 sm:grid-cols-2 lg:mt-7 lg:grid-cols-3 lg:gap-7"
              : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          }
        >
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} aspect="aspect-[4/5]" onOpen={open} />
          ))}
        </div>
      ) : null}

      <ProjectLightbox
        projects={projects}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={navigate}
      />
    </div>
  );
}