import { profile } from "@/content/profile";
import { GitHub, LinkedIn, Mail } from "./icons";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-paper/60">
      <div className="container-page flex flex-col gap-6 border-t border-white/10 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}. Designed and built with Next.js.
        </p>
        <ul className="flex items-center gap-2">
          {[
            { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
            { href: profile.linkedin, label: "LinkedIn", Icon: LinkedIn },
            { href: profile.github, label: "GitHub", Icon: GitHub },
          ].map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="grid size-10 place-items-center rounded-full border border-white/10 transition-colors duration-300 hover:border-white/40 hover:text-paper"
              >
                <Icon width={16} height={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
