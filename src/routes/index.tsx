import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About, Skills } from "@/components/portfolio/About";
import { Projects, Experience } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { ThemeSwitcher } from "@/components/portfolio/ThemeSwitcher";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Reveal } from "@/components/portfolio/Reveal";
import { ScrollBackground } from "@/components/portfolio/ScrollBackground";

const title = "Adeeb Abdurahiman — DevOps Engineer Portfolio";
const description =
  "Portfolio of Adeeb Abdurahiman, a DevOps engineer working with CI/CD, Docker, Kubernetes, AWS and Terraform. Projects, skills and contact details.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background">
      <ScrollBackground />
      <ThemeSwitcher />
      <CustomCursor />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal delay={60}>
        <Skills />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal delay={60}>
        <Experience />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </main>
  );
}
