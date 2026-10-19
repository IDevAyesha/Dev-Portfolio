import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Strengths } from "@/components/strengths";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Skills />
      <Experience />
      <Strengths />
      <Contact />
    </>
  );
}
