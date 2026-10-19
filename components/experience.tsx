import { experience } from "@/content/experience";
import { isTodo, visible } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { Editable } from "./todo-note";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="experience-title"
          index="04"
          label="Experience"
          title="Where I have been building."
        />

        <div className="mt-14 md:grid md:grid-cols-12 md:gap-8">
          <ol className="md:col-span-9 md:col-start-4">
            {experience.map((job, i) => {
              const responsibilities = visible(job.responsibilities);
              const achievements = visible(job.achievements);
              return (
                <li
                  key={`${job.company}-${job.role}`}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                  className="relative grid gap-4 border-t border-line py-10 pl-7 sm:grid-cols-[11rem_1fr] sm:gap-8 sm:pl-0 last:border-b"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-[2.85rem] size-2.5 rounded-full border-2 border-accent bg-paper sm:hidden"
                  />
                  <div>
                    <Editable text={job.period} className="font-mono text-[0.8rem] text-ink-3" />
                    {job.location ? <p className="mt-1 text-[0.85rem] text-ink-3">{job.location}</p> : null}
                  </div>
                  <div>
                    {isTodo(job.role) ? (
                      <>
                        <h3 className="text-[1.35rem] font-semibold tracking-[-0.025em]">{job.company}</h3>
                        <Editable text={job.role} className="mt-2 w-fit" />
                      </>
                    ) : (
                      <>
                        <h3 className="flex flex-wrap items-center gap-3 text-[1.35rem] font-semibold tracking-[-0.025em]">
                          {job.role}
                          {job.period.includes("Present") ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/15 px-2.5 py-0.5 text-[0.72rem] font-medium tracking-normal text-teal-ink">
                              <span className="size-1.5 rounded-full bg-teal-ink" aria-hidden />
                              Current
                            </span>
                          ) : null}
                        </h3>
                        <p className="mt-1 text-[1rem] font-medium text-accent">{job.company}</p>
                      </>
                    )}
                    <Editable text={job.summary} className="mt-4 max-w-2xl leading-relaxed text-ink-2" />

                    {responsibilities.length ? (
                      <ul className="mt-5 max-w-2xl space-y-2.5">
                        {responsibilities.map((r) => (
                          <li key={r} className="flex gap-3 text-[0.97rem] leading-relaxed text-ink-2">
                            <span className="mt-[0.7em] h-px w-3 shrink-0 bg-ink-3" aria-hidden />
                            <Editable as="span" text={r} />
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {achievements.length ? (
                      <div className="mt-6">
                        <p className="eyebrow">Highlights</p>
                        <ul className="mt-3 max-w-2xl space-y-2">
                          {achievements.map((a) => (
                            <li key={a} className="flex gap-3 text-[0.97rem] leading-relaxed text-ink">
                              <span className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                              <Editable as="span" text={a} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {job.stack?.length ? (
                      <ul className="mt-5 flex flex-wrap gap-1.5">
                        {job.stack.map((t) => (
                          <li key={t} className="rounded-md bg-accent-soft px-2 py-1 font-mono text-[0.7rem] text-accent-ink">
                            {t}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
