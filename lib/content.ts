import fs from "node:fs";
import path from "node:path";
import { profile } from "@/content/profile";

const isDev = process.env.NODE_ENV !== "production";

export const isTodo = (value?: string | null) => !value || value.trim().startsWith("TODO:");

/** True when a value should be rendered: real content always, TODOs only in dev. */
export const shouldShow = (value?: string | null) => !!value && (!isTodo(value) || isDev);

/** Filters a list down to what should render in the current environment. */
export const visible = <T extends string>(items: readonly T[] | undefined) =>
  (items ?? []).filter((item) => shouldShow(item));

export const hasCv = () => fs.existsSync(path.join(process.cwd(), "public", profile.cvPath));

export const cvLink = () =>
  hasCv()
    ? { href: profile.cvPath, label: "Download CV", download: true }
    : {
        href: `mailto:${profile.email}?subject=${encodeURIComponent("CV request")}`,
        label: "Request CV",
        download: false,
      };

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const hostname = (url: string) => new URL(url).hostname.replace(/^www\./, "");
