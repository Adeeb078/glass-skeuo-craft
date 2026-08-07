import { skillGroups } from "./data";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="01" title="About" />
        <div className="glass-panel grain mt-8 rounded-3xl p-7 sm:p-10">
          <p className="text-lg leading-relaxed text-foreground">
            I work where code meets infrastructure. My day is spent turning manual, fragile release
            steps into pipelines that anyone on the team can trust — building images, running tests,
            promoting environments and rolling back cleanly when something is off.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            My focus areas are continuous delivery, container orchestration, infrastructure as code
            and observability. I like systems that describe themselves: declarative infrastructure,
            reproducible environments, dashboards that answer the question before it is asked. A
            background in security research keeps me careful about secrets, access boundaries and
            what actually ships into production.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="02" title="Skills" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="emboss rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <h3 className="font-display text-sm font-semibold tracking-wide text-primary uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="groove rounded-full px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
