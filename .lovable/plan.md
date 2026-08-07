# Portfolio Page — Adeeb Abdurahiman, DevOps Engineer

A single-page portfolio at `/` in Warm Sand tones, built with a tactile mix of glassmorphism (frosted, blurred panels) and skeuomorphism (soft embossed cards, inset grooves, physical toggles and pill buttons).

## Look and feel

- Palette: warm sand base `#faf8f5`, panel `#f0ebe3`, accents `#c9b99a` and `#8b7355`.
- Type: Space Grotesk headings, DM Sans body (loaded via a link tag in the root route).
- Surfaces: layered soft shadows (light from top-left, inset lowlight bottom-right), 1px light rims, subtle noise/grain, frosted blur over warm gradient blobs.
- Motion: restrained — press-in on buttons, gentle lift on card hover.

## Sections

1. **Hero** — name, "DevOps Engineer", one-line positioning, floating glass card with soft-embossed avatar plate, and two pill buttons: GitHub and LinkedIn.
2. **About** — short bio panel written around a DevOps focus: CI/CD, automation, cloud infrastructure, reliability.
3. **Skills** — skeuomorphic tiles grouped as:
   - CI/CD: GitHub Actions, Jenkins, GitLab CI
   - Containers & Orchestration: Docker, Kubernetes
   - Cloud & IaC: AWS, Terraform, Ansible
   - Observability: Prometheus, Grafana, ELK
   - Scripting & OS: Bash, Python, Linux, Git
4. **Projects** — two glass case-study cards:
   - Reversible Data Hiding in Encrypted Images using DNA Coding
   - College Bus Smart Card Scan
   Each with a short summary and a tech-tag row.
5. **Experience** — vertical timeline on an inset groove rail (education/roles as placeholder entries you can edit).
6. **Contact** — glass panel with email link plus GitHub and LinkedIn buttons. Static links only, no form and no backend, so nothing to set up.
7. Minimal footer.

## Technical notes

- Rewrite `src/routes/index.tsx` as the portfolio page, split into small components under `src/components/portfolio/`.
- Add tokens (sand palette, glass/emboss shadow variables, grain utility) to `src/styles.css` under `@theme inline` — no hardcoded color classes in components.
- Fonts via `<link>` in `src/routes/__root.tsx`; family names registered as `--font-*` tokens.
- Per-page SEO `head()` on the index route with a portfolio-specific title and description.
- Generate a small set of abstract warm-sand background/texture assets into `src/assets/` for the hero and project cards.
- Fully responsive; single-column stack on mobile.

## Needs from you later

GitHub and LinkedIn URLs, and your email — I'll wire in placeholders you can swap, or paste them and I'll drop them straight in.
