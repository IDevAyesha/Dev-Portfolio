import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowRight, ArrowUpRight } from "./icons";
import { ProjectVisual } from "./project-visual";
import { Editable } from "./todo-note";

type Props = { project: Project; index: number; size: "lg" | "sm" };

export function ProjectCard({ project, index, size }: Props) {
  const lg = size === "lg";
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${(index % 2) * 90}ms` } as React.CSSProperties}
      className="group relative flex flex-col"
      aria-labelledby={`p-${project.slug}`}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block rounded-xl"
        aria-hidden
        tabIndex={-1}
      >
        <ProjectVisual
          project={project}
          zoomOnHover
          sizes={lg ? "(min-width: 1024px) 36rem, (min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 18rem, (min-width: 640px) 50vw, 100vw"}
          className="transition-[box-shadow,transform] duration-500 ease-out-soft group-hover:-translate-y-1 group-hover:border-accent/30 group-hover:shadow-[0_2px_4px_rgb(12_26_51/0.04),0_28px_56px_-24px_rgb(54_86_224/0.45)]"
        />
      </Link>

      <div className={`flex flex-1 flex-col ${lg ? "mt-6" : "mt-5"}`}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.72rem] text-accent">{num}</span>
          <span className="h-px w-5 bg-line-2" aria-hidden />
          <span className="eyebrow">{project.category}</span>
        </div>

        <h3
          id={`p-${project.slug}`}
          className={`mt-3 font-semibold tracking-[-0.03em] ${lg ? "text-[1.7rem]" : "text-[1.25rem]"}`}
        >
          <Link href={`/work/${project.slug}`} className="transition-colors hover:text-accent">
            {project.name}
          </Link>
        </h3>

        <p className={`mt-2 text-pretty leading-relaxed text-ink-2 ${lg ? "text-[1rem]" : "text-[0.92rem]"}`}>
          {project.description}
        </p>

        <Editable
          text={project.contribution}
          className={`mt-3 text-[0.92rem] leading-relaxed text-ink ${lg ? "" : "text-[0.88rem]"}`}
        />

        {project.stack.length ? (
          <div className="mt-4">
            <p className="sr-only">{project.stackConfirmed ? "Built with" : "Live site stack"}</p>
            <ul className="flex flex-wrap gap-1.5" title={project.stackConfirmed ? "Built with" : "Detected on the live site"}>
              {project.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-md bg-accent-soft px-2 py-1 font-mono text-[0.7rem] text-accent-ink"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-auto flex items-center gap-5 pt-5 text-[0.88rem] font-medium">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
          >
            Case study
            <ArrowRight width={15} height={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            <span className="sr-only">: {project.name}</span>
          </Link>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-2 transition-colors hover:text-accent"
          >
            View Live Project
            <ArrowUpRight width={15} height={15} />
            <span className="sr-only">: {project.name} (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
