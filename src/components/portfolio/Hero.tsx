import { Github, Linkedin, MapPin, Terminal } from "lucide-react";
import { profile } from "./data";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-20 pb-16 sm:px-8 md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-24 h-96 w-96 rounded-full bg-accent/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <span className="emboss-sm inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <Terminal className="h-3.5 w-3.5" />
            Available for work
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold tracking-tight text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-display text-xl text-primary sm:text-2xl">{profile.role}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="press emboss inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="press emboss inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="glass-panel grain rounded-3xl p-6">
          <div className="groove rounded-2xl p-5">
            <div className="emboss mx-auto flex h-28 w-28 items-center justify-center rounded-full">
              <span className="font-display text-3xl font-bold text-primary">AA</span>
            </div>
            <dl className="mt-6 space-y-3 text-sm">
              {[
                ["Focus", "CI/CD & Automation"],
                ["Cloud", "AWS · CloudFormation"],
                ["Runtime", "Docker · Kubernetes"],
                ["Systems", "Linux · Bash · Python"],
                ["Visa", "UAE Resident"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-right font-medium text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
