import { certifications, languages, skillGroups } from "./data";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="01" title="About" />
        <div className="glass-panel grain mt-8 rounded-3xl p-7 sm:p-10">
          <p className="text-lg leading-relaxed text-foreground">
            DevOps engineer with hands-on training in AWS cloud infrastructure — EC2, S3,
            CloudFormation and IAM — CI/CD pipeline workflows, Linux system administration and
            Infrastructure-as-Code.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            I work with Git-based collaborative development, shell scripting automation and Docker
            and Kubernetes fundamentals. A B.Tech Computer Science graduate, I'm looking to apply
            automation and cloud engineering skills in production DevOps environments — building
            repeatable infrastructure, documenting what I ship, and keeping systems observable.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="groove rounded-2xl p-5">
              <h3 className="font-display text-sm font-semibold tracking-wide text-primary uppercase">
                Certifications & Training
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="groove rounded-2xl p-5">
              <h3 className="font-display text-sm font-semibold tracking-wide text-primary uppercase">
                Languages
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {languages.map((l) => (
                  <li key={l.name}>
                    <span className="font-medium text-foreground">{l.name}</span> — {l.level}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
