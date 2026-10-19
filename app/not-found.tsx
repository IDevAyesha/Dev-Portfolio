import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70dvh] flex-col items-start justify-center pt-28">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-[2.6rem] font-semibold tracking-[-0.04em]">This page does not exist.</h1>
      <p className="mt-3 text-ink-2">The link may be outdated. The portfolio is one click away.</p>
      <ButtonLink href="/" className="mt-8">Back to home</ButtonLink>
    </section>
  );
}
