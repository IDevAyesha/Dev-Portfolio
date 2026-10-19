import Image from "next/image";
import type { Project } from "@/content/projects";

/** Slow, pausable strip of live project screenshots under the hero. */
export function ProjectMarquee({ projects, tone = "light" }: { projects: Project[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const items = projects.filter((p) => p.image);
  if (!items.length) return null;

  const row = (hidden: boolean) =>
    items.map((p) => (
      <li key={`${p.slug}-${hidden}`} aria-hidden={hidden || undefined} className="shrink-0">
        <a
          href={`/work/${p.slug}`}
          tabIndex={hidden ? -1 : undefined}
          className="group block w-[17rem] sm:w-[22rem] md:w-[26rem]"
        >
          <div className={`relative aspect-[16/10] overflow-hidden rounded-lg border ${dark ? "border-white/10 bg-navy-2 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.8)] ring-1 ring-white/5 transition-[border-color] duration-500 group-hover:border-white/30" : "border-line bg-card shadow-[0_10px_30px_-18px_rgb(12_26_51/0.35)]"}`}>
            <Image
              src={p.image!}
              alt={hidden ? "" : `${p.name} website`}
              fill
              sizes="(min-width: 768px) 26rem, (min-width: 640px) 22rem, 17rem"
              className="object-cover object-top transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
            />
          </div>
          <p className="mt-3 flex items-baseline justify-between text-[0.85rem]">
            <span className={`font-medium transition-colors ${dark ? "text-white group-hover:text-accent-light" : "text-ink group-hover:text-accent"}`}>{p.name}</span>
            <span className={`eyebrow !text-[0.66rem] ${dark ? "!text-white/40" : ""}`}>{p.category}</span>
          </p>
        </a>
      </li>
    ));

  return (
    <div
      className="marquee relative overflow-hidden motion-reduce:overflow-x-auto"
      style={{
        maskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
      }}
    >
      <ul className="marquee-track flex w-max gap-6" aria-label="Project previews">
        {row(false)}
        {row(true)}
      </ul>
    </div>
  );
}
