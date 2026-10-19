import { about } from "@/content/profile";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="about-title"
          index="02"
          label="About"
          title={
            <>
              Full-stack developer focused on{" "}
              <span className="font-serif font-normal italic text-accent">practical, maintainable</span>{" "}
              product work.
            </>
          }
        />

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="space-y-5 md:col-span-6 md:col-start-4">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                className="text-pretty text-[1.05rem] leading-[1.75] text-ink-2"
              >
                {p}
              </p>
            ))}
          </div>

          <aside className="md:col-span-3" data-reveal aria-label="Focus areas">
            <p className="eyebrow">Focus areas</p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {about.focus.map((f) => (
                <li key={f} className="flex items-center gap-3 py-3 text-[0.93rem] text-ink">
                  <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
