import { contact, profile } from "@/content/profile";
import { cvLink } from "@/lib/content";
import { ArrowUpRight, Download, GitHub, LinkedIn, Mail } from "./icons";

export function Contact() {
  const cv = cvLink();
  const links = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: Mail,
      external: false,
    },
    {
      label: "LinkedIn",
      value: profile.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\//, "").replace(/\/$/, ""),
      href: profile.linkedin,
      Icon: LinkedIn,
      external: true,
    },
    {
      label: "GitHub",
      value: profile.github.replace("https://github.com/", "@"),
      href: profile.github,
      Icon: GitHub,
      external: true,
    },
    {
      label: cv.label,
      value: cv.download ? "PDF" : "By email",
      href: cv.href,
      Icon: Download,
      external: false,
      download: cv.download,
    },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-navy text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_80%_0%,#000,transparent_75%)]"
      />
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -right-[10%] -top-[40%] size-[44rem] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgb(54 86 224 / 0.4), transparent)" }}
      />
      <div className="container-page relative py-24 md:py-32">
        <p className="eyebrow flex items-center gap-3 !text-paper/50" data-reveal>
          <span className="text-accent-light">06</span>
          <span className="h-px w-8 bg-white/20" aria-hidden />
          <span>Contact</span>
        </p>

        <h2
          id="contact-title"
          data-reveal
          className="mt-8 max-w-4xl text-balance text-[2.4rem] font-semibold leading-[1.04] tracking-[-0.04em] sm:text-[3.4rem] lg:text-[4.2rem]"
        >
          {contact.heading.lead}{" "}
          <span className="text-gradient font-serif pr-[0.08em] font-normal italic">{contact.heading.accent}</span>
        </h2>
        <p data-reveal className="mt-6 max-w-xl text-pretty text-[1.08rem] leading-relaxed text-paper/70">
          {contact.body}
        </p>

        <ul className="mt-14 grid border-t border-white/10 sm:grid-cols-2">
          {links.map(({ label, value, href, Icon, external, download }, i) => (
            <li
              key={label}
              data-reveal
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              className="border-b border-white/10 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
            >
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(download ? { download: "" } : {})}
                className="group flex items-center gap-5 py-7"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <Icon width={17} height={17} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[1.15rem] font-medium tracking-[-0.02em]">{label}</span>
                  <span className="block truncate text-[0.9rem] text-paper/55">{value}</span>
                </span>
                <ArrowUpRight className="shrink-0 text-paper/40 transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper" />
                {external ? <span className="sr-only">(opens in a new tab)</span> : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
