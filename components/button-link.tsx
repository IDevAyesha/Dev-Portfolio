import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light" | "accent" | "outline-dark";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-accent shadow-[0_1px_0_rgb(255_255_255/0.12)_inset,0_1px_2px_rgb(12_26_51/0.25)]",
  secondary: "border border-line-2 bg-card text-ink hover:border-ink",
  ghost: "text-ink hover:text-accent px-1",
  light: "bg-paper text-ink hover:bg-white",
  accent:
    "bg-accent text-white hover:bg-[#4565f0] shadow-[0_1px_0_rgb(255_255_255/0.2)_inset,0_8px_24px_-8px_rgb(54_86_224/0.7)] hover:shadow-[0_1px_0_rgb(255_255_255/0.2)_inset,0_12px_32px_-8px_rgb(54_86_224/0.9)]",
  "outline-dark": "border border-white/20 bg-white/[0.04] text-white hover:border-white/50 hover:bg-white/[0.08]",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  className?: string;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  download,
  className = "",
  ariaLabel,
}: Props) {
  const cls = `group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-[0.92rem] font-medium tracking-[-0.01em] transition-[background-color,border-color,color,transform,box-shadow] duration-300 ease-out-soft active:scale-[0.98] ${styles[variant]} ${className}`;

  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: "" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
