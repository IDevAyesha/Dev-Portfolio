import { hero, highlights, profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { cvLink } from "@/lib/content";
import { ButtonLink } from "./button-link";
import { ArrowRight, Download, GitHub, LinkedIn, Mail } from "./icons";
import { ProjectMarquee } from "./project-marquee";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

const linkCls =
  "inline-flex items-center gap-2 text-white/65 underline-offset-4 transition-colors hover:text-white hover:underline";

export function Hero() {
  const cv = cvLink();
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-navy pb-16 pt-28 text-white md:pb-20 md:pt-40"
    >
      {/* Background: grid + two soft glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid-dark absolute inset-0" />
        <div
          className="animate-drift absolute -right-[15%] -top-[30%] size-[48rem] rounded-full opacity-70"
          style={{ background: "radial-gradient(closest-side, rgb(54 86 224 / 0.55), transparent)" }}
        />
        <div
          className="animate-drift absolute -bottom-[35%] -left-[15%] size-[40rem] rounded-full opacity-50 [animation-delay:-9s]"
          style={{ background: "radial-gradient(closest-side, rgb(45 212 191 / 0.28), transparent)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="container-page">
        {profile.showAvailability ? (
          <p
            className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.05] py-1.5 pl-3 pr-4 text-[0.82rem] text-white/80 backdrop-blur-sm"
            style={d(0)}
          >
            <span className="relative flex size-2">
              <span className="animate-ping-soft absolute inset-0 rounded-full bg-teal" />
              <span className="relative size-2 rounded-full bg-teal" />
            </span>
            {profile.availability}
          </p>
        ) : null}

        <h1
          id="hero-title"
          className="mt-7 max-w-[17ch] text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[3.6rem] lg:max-w-[18ch] lg:text-[4.75rem]"
        >
          <span className="animate-rise block" style={d(80)}>
            {hero.headline.lead}{" "}
          </span>
          <span className="animate-rise relative inline-block" style={d(180)}>
            <span className="text-gradient font-serif pr-[0.08em] text-[1.08em] font-normal italic tracking-[-0.02em]">
              {hero.headline.accent}
            </span>
            <span
              aria-hidden
              className="animate-draw absolute -bottom-1 left-0 hidden h-[3px] w-full rounded-full bg-gradient-to-r from-accent-light/50 to-teal/40 lg:block"
              style={d(700)}
            />
          </span>
        </h1>

        <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:items-end">
          <p
            className="animate-rise max-w-xl text-pretty text-[1.08rem] leading-relaxed text-white/70 lg:col-span-7 lg:text-[1.15rem]"
            style={d(280)}
          >
            {hero.intro}
          </p>

          <div className="animate-rise lg:col-span-5 lg:justify-self-end" style={d(380)}>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="#work" variant="accent">
                View My Work
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink href={cv.href} variant="outline-dark" download={cv.download}>
                <Download className="transition-transform duration-300 group-hover:translate-y-0.5" />
                {cv.label}
              </ButtonLink>
            </div>
            <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.9rem]">
              <li>
                <a href={`mailto:${profile.email}`} className={linkCls}>
                  <Mail width={16} height={16} /> {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  <LinkedIn width={15} height={15} /> LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  <GitHub width={15} height={15} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <dl
          className="animate-rise mt-14 grid grid-cols-1 divide-y divide-white/10 border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          style={d(460)}
        >
          {highlights.map((h) => (
            <div key={h.label} className="flex items-baseline gap-4 py-5 sm:block sm:px-6 sm:py-6 sm:first:pl-0">
              <dt className="sr-only">{h.label}</dt>
              <dd className="text-[2.2rem] font-semibold leading-none tracking-[-0.04em] text-white sm:text-[2.6rem]">
                {h.value}
              </dd>
              <dd className="text-[0.88rem] leading-snug text-white/55 sm:mt-2.5">{h.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="animate-rise mt-14 md:mt-16" style={d(560)}>
        <ProjectMarquee projects={projects} tone="dark" />
      </div>
    </section>
  );
}
