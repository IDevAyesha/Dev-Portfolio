import type { ReactNode } from "react";

type Props = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  className?: string;
};

export function SectionHeading({ index, label, title, intro, id, className = "" }: Props) {
  return (
    <div className={`grid gap-6 md:grid-cols-12 md:gap-8 ${className}`}>
      <div className="md:col-span-3" data-reveal>
        <p className="eyebrow flex items-center gap-3">
          <span className="text-accent">{index}</span>
          <span className="h-px w-8 bg-line-2" aria-hidden />
          <span>{label}</span>
        </p>
      </div>
      <div className="md:col-span-9">
        <h2
          id={id}
          data-reveal
          className="max-w-3xl text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-ink sm:text-[2.6rem] lg:text-[3rem]"
        >
          {title}
        </h2>
        {intro ? (
          <p
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="mt-5 max-w-2xl text-pretty text-[1.05rem] leading-relaxed text-ink-2"
          >
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}
