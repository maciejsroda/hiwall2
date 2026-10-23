import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project, aspect = "aspect-[4/5]", onOpen, className }) {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(project)}
      aria-label={`Powiększ zdjęcie: ${project.title}`}
      className={cn(
        "group relative block h-full w-full overflow-hidden bg-sand text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oak focus-visible:ring-offset-2",
        className
      )}
    >
      <div className={cn("relative w-full overflow-hidden", aspect)}>
        <Image
          src={project.image}
          alt={project.alt || project.title}
          className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
          originWidth={1200}
          originHeight={1500}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/0 to-charcoal/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-x-5 bottom-5 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[0.62rem] uppercase tracking-[0.2em] text-ivory/85">{project.category}</p>
          <p className="mt-1 font-heading text-lg font-light text-ivory">{project.title}</p>
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4 p-4">
        <div>
          <p className="text-[0.62rem] uppercase tracking-[0.2em] text-graphite/70">
            {project.category}
          </p>
          <h3 className="mt-1.5 text-[1.02rem] font-normal text-charcoal">{project.title}</h3>
        </div>
        <span aria-hidden="true" className="text-[0.66rem] uppercase tracking-[0.16em] text-graphite/50">
          Powiększ
        </span>
      </div>
    </button>
  );
}