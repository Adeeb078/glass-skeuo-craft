import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About, Skills } from "@/components/portfolio/About";
import { Projects, Experience } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

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
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
