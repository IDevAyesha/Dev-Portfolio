"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Close, Menu } from "./icons";

const nav = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
];

export function SiteHeader({ name }: { name: string }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const hero = document.getElementById("top");
      setOverHero(!!hero && hero.getBoundingClientRect().bottom > 72);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) return;
    const sections = ["top", ...nav.map((n) => n.id), "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onDark = isHome && overHero && !open;
  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        open
          ? "border-b border-line bg-paper text-ink"
          : onDark
            ? scrolled
              ? "border-b border-white/10 bg-navy/70 text-white backdrop-blur-md"
              : "border-b border-transparent bg-transparent text-white"
            : scrolled
              ? "border-b border-line bg-paper/85 text-ink backdrop-blur-md"
              : "border-b border-transparent bg-transparent text-ink"
      }`}
    >
      <span
        aria-hidden
        className="scroll-progress absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-accent"
      />
      <div className="container-page flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span aria-hidden className={`grid size-9 place-items-center rounded-[10px] font-mono text-[0.78rem] font-medium tracking-tight transition-colors duration-300 group-hover:bg-accent group-hover:text-white ${onDark ? "bg-white text-navy" : "bg-ink text-paper"}`}>
            {initials}
          </span>
          <span className="text-[0.95rem] font-semibold tracking-[-0.02em]">{name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={href(item.id)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[0.9rem] transition-colors duration-200 ${
                    onDark
                      ? "text-white/70 hover:text-white"
                      : active === item.id
                        ? "text-ink"
                        : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ease-out-soft ${
                      active === item.id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            ))}
            <li className="ml-3">
              <a
                href={href("contact")}
                className={`inline-flex h-10 items-center rounded-full px-4.5 text-[0.88rem] font-medium transition-colors duration-300 ${onDark ? "bg-white text-navy hover:bg-accent-light" : "bg-ink text-paper hover:bg-accent"}`}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className={`grid size-10 place-items-center rounded-full border md:hidden ${onDark ? "border-white/20 bg-white/5 text-white" : "border-line-2 bg-card text-ink"}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] border-t border-line bg-paper md:hidden"
      >
        <nav aria-label="Mobile" className="container-page py-8">
          <ul className="flex flex-col">
            {[...nav, { id: "contact", label: "Contact" }].map((item, i) => (
              <li key={item.id} className="animate-rise" style={{ "--d": `${i * 50}ms` } as React.CSSProperties}>
                <a
                  href={href(item.id)}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-line py-5 text-[1.9rem] font-semibold tracking-[-0.03em]"
                >
                  {item.label}
                  <span className="font-mono text-xs text-ink-3">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
