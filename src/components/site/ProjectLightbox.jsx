import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Image } from "@/components/ui/image";

export default function ProjectLightbox({ projects, activeIndex, onClose, onNavigate }) {
  const open = activeIndex !== null && activeIndex !== undefined;
  const project = open ? projects[activeIndex] : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNavigate(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onNavigate(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onNavigate]);

  return (
    <Dialog open={open} onOpenChange={(next) => (next ? null : onClose())}>
      <DialogContent
        aria-describedby={undefined}
        className="left-0 top-0 flex h-[100dvh] w-screen max-w-none translate-x-0 translate-y-0 flex-col gap-0 border-0 bg-charcoal/98 px-4 py-5 shadow-none data-[state=closed]:slide-out-to-left-0 data-[state=closed]:slide-out-to-top-0 data-[state=closed]:zoom-out-100 data-[state=open]:slide-in-from-left-0 data-[state=open]:slide-in-from-top-0 data-[state=open]:zoom-in-100 sm:rounded-none md:px-8 [&>button]:hidden"
      >
        {project ? (
          <>
            <div className="flex items-center justify-between text-ivory">
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-ivory/70">
                {activeIndex + 1} / {projects.length} · {project.category}
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Zamknij powiększenie"
                className="flex h-11 w-11 items-center justify-center text-ivory/80 transition-colors hover:text-ivory"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center py-4">
              <Image
                src={project.image}
                alt={project.alt || project.title}
                className="h-full w-full object-contain"
                fittingType="fit"
              />
            </div>

            <div className="flex flex-col gap-4 border-t border-ivory/15 pt-4 text-ivory sm:flex-row sm:items-end sm:justify-between">
              <div>
                <DialogTitle className="font-heading text-xl font-light leading-snug tracking-normal text-ivory">
                  {project.title}
                </DialogTitle>
                {project.description ? (
                  <p className="mt-1 max-w-lg text-sm text-ivory/70">{project.description}</p>
                ) : null}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => onNavigate(-1)}
                  aria-label="Poprzednia realizacja"
                  className="flex h-11 w-11 items-center justify-center border border-ivory/25 text-ivory/80 transition-colors hover:border-ivory/70 hover:text-ivory"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate(1)}
                  aria-label="Następna realizacja"
                  className="flex h-11 w-11 items-center justify-center border border-ivory/25 text-ivory/80 transition-colors hover:border-ivory/70 hover:text-ivory"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}