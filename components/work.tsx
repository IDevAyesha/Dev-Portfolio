import { projects } from "@/content/projects";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="work-title"
          index="01"
          label="Selected work"
          title="Live products across health, AI, commerce and community."
          intro="A selection of live web products I have worked on. Each one opens into a short case study with the context, my role and the technical details."
        />

        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} size="lg" />
          ))}
        </div>

        {more.length ? (
          <>
            <div className="mt-24 flex items-center gap-4" data-reveal>
              <h3 className="eyebrow shrink-0">More projects</h3>
              <span className="h-px flex-1 bg-line" aria-hidden />
            </div>
            <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {more.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={featured.length + i} size="sm" />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
