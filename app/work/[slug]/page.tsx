import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/icons";
import { ProjectVisual } from "@/components/project-visual";
import { Editable } from "@/components/todo-note";
import { getProject, projects } from "@/content/projects";
import { hostname, shouldShow, visible } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.name} case study`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} · Case study`,
      description: project.description,
      url: `/work/${project.slug}`,
      images: project.image ? [{ url: project.image, width: 1440, height: 900 }] : undefined,
    },
  };
}

function Block({ title, children, n }: { title: string; children: React.ReactNode; n: number }) {
  return (
    <section data-reveal className="grid gap-4 border-t border-line py-10 md:grid-cols-[13rem_1fr] md:gap-10">
      <h2 className="flex items-baseline gap-3 text-[1.05rem] font-semibold tracking-[-0.02em]">
        <span className="font-mono text-[0.72rem] font-normal text-accent">{String(n).padStart(2, "0")}</span>
        {title}
      </h2>
      <div className="max-w-2xl text-[1.02rem] leading-[1.75] text-ink-2">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span className="mt-[0.85em] h-px w-3 shrink-0 bg-ink-3" aria-hidden />
          <Editable as="span" text={t} />
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudy({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const cs = project.caseStudy;
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const prev = projects[(idx - 1 + projects.length) % projects.length];

  const responsibilities = visible(cs.responsibilities);
  const implementation = visible(cs.implementation);
  const challenges = cs.challenges.filter((c) => shouldShow(c.challenge));

  const sections: { title: string; body: React.ReactNode }[] = [];
  if (shouldShow(cs.overview)) sections.push({ title: "Project overview", body: <Editable text={cs.overview} /> });
  if (shouldShow(cs.goal)) sections.push({ title: "Product goal", body: <Editable text={cs.goal} /> });
  if (responsibilities.length)
    sections.push({ title: "My role & responsibilities", body: <BulletList items={responsibilities} /> });
  if (implementation.length)
    sections.push({ title: "Technical implementation", body: <BulletList items={implementation} /> });
  if (challenges.length)
    sections.push({
      title: "Challenges & solutions",
      body: (
        <dl className="space-y-6">
          {challenges.map((c) => (
            <div key={c.challenge}>
              <dt className="font-medium text-ink">
                <Editable as="span" text={c.challenge} />
              </dt>
              <Editable as="dd" text={c.solution} className="mt-1.5" />
            </div>
          ))}
        </dl>
      ),
    });
  if (shouldShow(cs.outcome)) sections.push({ title: "Outcome", body: <Editable text={cs.outcome} /> });
  if (project.stack.length)
    sections.push({
      title: project.stackConfirmed ? "Technologies used" : "Live site stack",
      body: (
        <>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <li key={t} className="rounded-md border border-line bg-card px-2.5 py-1 font-mono text-[0.78rem] text-ink">
                {t}
              </li>
            ))}
          </ul>
          {!project.stackConfirmed ? (
            <p className="mt-3 text-[0.85rem] text-ink-3">Detected from the public website.</p>
          ) : null}
        </>
      ),
    });

  const meta = [
    { k: "Category", v: project.category },
    { k: "Role", v: project.role },
    { k: "Website", v: hostname(project.url), href: project.url },
  ].filter((m) => shouldShow(m.v));

  return (
    <article className="pb-24 pt-28 md:pt-36" aria-labelledby="cs-title">
      <div className="container-page">
        <Link
          href="/#work"
          className="animate-rise group inline-flex items-center gap-2 text-[0.9rem] text-ink-2 transition-colors hover:text-ink"
        >
          <ArrowLeft width={16} height={16} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
          All work
        </Link>

        <header className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow animate-rise" style={{ "--d": "60ms" } as React.CSSProperties}>
              Case study · {project.category}
            </p>
            <h1
              id="cs-title"
              className="animate-rise mt-4 text-[2.8rem] font-semibold leading-[1] tracking-[-0.045em] sm:text-[4rem] lg:text-[5rem]"
              style={{ "--d": "120ms" } as React.CSSProperties}
            >
              {project.name}
            </h1>
            <p
              className="animate-rise mt-6 max-w-2xl text-pretty text-[1.12rem] leading-relaxed text-ink-2"
              style={{ "--d": "200ms" } as React.CSSProperties}
            >
              {project.description}
            </p>
          </div>
          <div className="animate-rise lg:col-span-4 lg:justify-self-end" style={{ "--d": "260ms" } as React.CSSProperties}>
            <ButtonLink href={project.url} external>
              View Live Project
              <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="sr-only">(opens in a new tab)</span>
            </ButtonLink>
          </div>
        </header>

        <dl
          className="animate-rise mt-12 grid gap-6 border-y border-line py-6 sm:grid-cols-3"
          style={{ "--d": "320ms" } as React.CSSProperties}
        >
          {meta.map((m) => (
            <div key={m.k}>
              <dt className="eyebrow">{m.k}</dt>
              <dd className="mt-2 text-[0.98rem] text-ink">
                {m.href ? (
                  <a href={m.href} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-accent hover:underline">
                    {m.v}
                  </a>
                ) : (
                  <Editable as="span" text={m.v} />
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="animate-rise mt-12" style={{ "--d": "400ms" } as React.CSSProperties}>
          <ProjectVisual project={project} priority sizes="(min-width: 1216px) 72rem, 100vw" />
        </div>

        <div className="mt-16">
          {sections.map((s, i) => (
            <Block key={s.title} title={s.title} n={i + 1}>
              {s.body}
            </Block>
          ))}
        </div>

        <nav aria-label="More case studies" className="mt-16 grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
          <Link href={`/work/${prev.slug}`} className="group rounded-xl border border-line bg-card p-6 transition-colors hover:border-ink">
            <span className="eyebrow flex items-center gap-2">
              <ArrowLeft width={14} height={14} /> Previous
            </span>
            <span className="mt-3 block text-[1.3rem] font-semibold tracking-[-0.03em] group-hover:text-accent">{prev.name}</span>
          </Link>
          <Link href={`/work/${next.slug}`} className="group rounded-xl border border-line bg-card p-6 text-right transition-colors hover:border-ink">
            <span className="eyebrow flex items-center justify-end gap-2">
              Next <ArrowRight width={14} height={14} />
            </span>
            <span className="mt-3 block text-[1.3rem] font-semibold tracking-[-0.03em] group-hover:text-accent">{next.name}</span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
