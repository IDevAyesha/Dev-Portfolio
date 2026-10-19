import { lookingFor, strengths } from "@/content/profile";
import { SectionHeading } from "./section-heading";

export function Strengths() {
  return (
    <section aria-labelledby="bring-title" className="border-t border-line bg-paper-2/50 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading id="bring-title" index="05" label="Value" title="What I bring to a product team." />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s, i) => (
            <li
              key={s.title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 80}ms` } as React.CSSProperties}
              className="group bg-card p-7 transition-colors duration-500 hover:bg-paper md:p-8"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-accent-soft font-mono text-[0.72rem] text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-[1.15rem] font-semibold tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-2 text-pretty text-[0.95rem] leading-relaxed text-ink-2">{s.body}</p>
            </li>
          ))}

          <li data-reveal className="relative isolate flex flex-col justify-between overflow-hidden bg-navy p-7 text-paper md:p-8 sm:col-span-2 lg:col-span-1">
            <span
              aria-hidden
              className="absolute -right-24 -top-24 -z-10 size-72 rounded-full"
              style={{ background: "radial-gradient(closest-side, rgb(54 86 224 / 0.5), transparent)" }}
            />
            <p className="eyebrow flex items-center gap-2 !text-teal">
              <span className="size-1.5 rounded-full bg-teal" aria-hidden />
              What I am looking for
            </p>
            <p className="mt-6 text-pretty text-[1.1rem] leading-relaxed tracking-[-0.01em] text-paper/90">
              {lookingFor}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
