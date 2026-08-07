import { ArrowUpRight } from "lucide-react";
import { projects, timeline } from "./data";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="03" title="Projects" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-panel grain flex flex-col rounded-3xl p-7 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {project.meta}
              </span>
              <h3 className="mt-3 font-display text-xl leading-snug font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="emboss-sm rounded-full px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="04" title="Experience" />
        <div className="relative mt-10 pl-8 sm:pl-12">
          <span aria-hidden className="groove absolute top-2 bottom-2 left-2 w-2 rounded-full" />
          <div className="space-y-6">
            {timeline.map((entry) => (
              <div key={entry.title} className="relative">
                <span
                  aria-hidden
                  className="emboss-sm absolute top-7 -left-[1.6rem] h-4 w-4 rounded-full sm:-left-[2.35rem]"
                />
                <div className="emboss rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {entry.title}
                    </h3>
                    <span className="text-xs font-medium tracking-wide text-primary uppercase">
                      {entry.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{entry.org}</p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{entry.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LinkArrow({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="press emboss inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground"
    >
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
