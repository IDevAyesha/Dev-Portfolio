import Image from "next/image";
import type { Project } from "@/content/projects";
import { hostname } from "@/lib/content";

type Props = {
  project: Project;
  sizes: string;
  priority?: boolean;
  className?: string;
  zoomOnHover?: boolean;
};

/** Screenshot inside a minimal browser frame, or a clean placeholder if no image is set. */
export function ProjectVisual({ project, sizes, priority, className = "", zoomOnHover }: Props) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-card shadow-[0_1px_2px_rgb(12_26_51/0.04),0_12px_32px_-16px_rgb(12_26_51/0.18)] ${className}`}
    >
      <div className="flex h-8 items-center gap-3 border-b border-line bg-paper-2/60 px-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-line-2" />
          <span className="size-2 rounded-full bg-line-2" />
          <span className="size-2 rounded-full bg-line-2" />
        </span>
        <span className="mx-auto max-w-[70%] truncate rounded-md bg-card px-3 py-0.5 font-mono text-[0.66rem] text-ink-3">
          {hostname(project.url)}
        </span>
        <span className="w-[2.6rem]" aria-hidden />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of the ${project.name} website homepage`}
            fill
            sizes={sizes}
            priority={priority}
            className={`object-cover object-top ${
              zoomOnHover
                ? "transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.035]"
                : ""
            }`}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center hero-grid">
            <div className="text-center">
              <p className="text-4xl font-semibold tracking-[-0.04em] text-ink/80">{project.name}</p>
              <p className="eyebrow mt-2">Screenshot coming soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
