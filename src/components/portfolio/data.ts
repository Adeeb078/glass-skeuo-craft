export const profile = {
  name: "Adeeb Abdurahiman",
  role: "DevOps Engineer",
  tagline:
    "I build the pipelines, infrastructure and guardrails that let teams ship safely — automation first, downtime last.",
  email: "hello@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  location: "Kerala, India",
};

export const skillGroups = [
  { title: "CI/CD", items: ["GitHub Actions", "Jenkins", "GitLab CI", "ArgoCD"] },
  { title: "Containers & Orchestration", items: ["Docker", "Kubernetes", "Helm"] },
  { title: "Cloud & IaC", items: ["AWS", "Terraform", "Ansible"] },
  { title: "Observability", items: ["Prometheus", "Grafana", "ELK Stack"] },
  { title: "Scripting & OS", items: ["Bash", "Python", "Linux", "Git"] },
];

export const projects = [
  {
    title: "Reversible Data Hiding in Encrypted Images using DNA Coding",
    summary:
      "A secure image steganography system that embeds payload data inside encrypted images using DNA-sequence encoding, allowing lossless recovery of both the hidden data and the original image.",
    tags: ["Python", "Cryptography", "DNA Coding", "Image Processing"],
    meta: "Research project",
  },
  {
    title: "College Bus Smart Card Scan",
    summary:
      "An RFID smart-card system for campus bus travel: students tap in, trips are validated against their pass, and administrators track boarding data from a live dashboard.",
    tags: ["RFID", "Web App", "Database", "Automation"],
    meta: "Campus system",
  },
];

export const timeline = [
  {
    period: "2024 — Present",
    title: "DevOps Engineer",
    org: "Cloud infrastructure & delivery",
    detail:
      "Automating build and release pipelines, containerising services, provisioning infrastructure as code, and keeping environments observable and reproducible.",
  },
  {
    period: "2023 — 2024",
    title: "Linux & Cloud Foundations",
    org: "Self-directed and hands-on labs",
    detail:
      "Deep work on Linux administration, networking, shell automation and AWS core services, backed by home-lab Kubernetes clusters.",
  },
  {
    period: "Education",
    title: "B.Tech, Computer Science",
    org: "Final-year research on encrypted image data hiding",
    detail:
      "Coursework in operating systems, networks and security, alongside applied projects in cryptography and embedded systems.",
  },
];
