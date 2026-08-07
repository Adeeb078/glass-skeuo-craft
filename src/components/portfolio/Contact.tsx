import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "./data";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="05" title="Contact" />
        <div className="glass-panel grain mt-8 rounded-3xl p-8 text-center sm:p-12">
          <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Let's build something reliable.
          </h3>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted-foreground">
            Open to DevOps, platform and cloud infrastructure roles, and to interesting automation
            problems. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="press emboss inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
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

        <footer className="mt-14 pb-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </footer>
      </div>
    </section>
  );
}
