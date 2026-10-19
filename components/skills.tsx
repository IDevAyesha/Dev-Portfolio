import { skillGroups } from "@/content/skills";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line bg-paper-2/50 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="skills-title"
          index="03"
          label="Skills"
          title="The tools I use to ship across the stack."
        />

        <div className="mt-14 grid overflow-hidden rounded-2xl border border-line bg-card sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="group relative border-line p-7 transition-colors duration-500 hover:bg-accent-soft/40 max-sm:[&:not(:last-child)]:border-b sm:max-lg:[&:nth-child(-n+2)]:border-b sm:max-lg:odd:border-r lg:[&:not(:last-child)]:border-r"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent to-teal transition-transform duration-500 ease-out-soft group-hover:scale-x-100"
              />
              <div className="flex items-baseline justify-between">
                <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em]">{group.title}</h3>
                <span className="font-mono text-[0.7rem] text-ink-3">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1.5 text-[0.85rem] text-ink-2 transition-colors duration-300 group-hover:border-line-2 hover:!border-accent hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
