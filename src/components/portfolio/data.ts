export const profile = {
  name: "Adeeb Abdurahiman",
  role: "DevOps Engineer",
  tagline:
    "DevOps engineer working across AWS cloud infrastructure, CI/CD pipelines, Linux administration and Infrastructure-as-Code — automation first, downtime last.",
  email: "adeebabdurahiman2004@gmail.com",
  phone: "+971 52 133 0905",
  github: "https://github.com/Adeeb078",
  linkedin: "https://linkedin.com/in/adeebabdurahiman",
  location: "Sharjah, UAE",
};

export const skillGroups = [
  {
    title: "Cloud & IaC",
    items: ["AWS EC2", "S3", "IAM", "CloudFormation", "Terraform (basics)", "AWS CLI"],
  },
  { title: "CI/CD & Version Control", items: ["Jenkins", "GitHub", "Git", "CI/CD pipelines"] },
  { title: "Containers", items: ["Docker", "Kubernetes"] },
  {
    title: "Linux & Automation",
    items: ["Ubuntu", "CentOS", "Shell/Bash", "System administration", "Log rotation"],
  },
  { title: "Programming & Data", items: ["Python", "C", "MySQL", "SQL optimization", "Flask"] },
  { title: "Web & Tools", items: ["HTML", "CSS", "VS Code", "Jira"] },
];

export const projects = [
  {
    title: "Reversible Data Hiding in Encrypted Images using DNA Coding",
    summary:
      "Secure reversible data hiding built on DNA coding principles, with Python encryption and decryption modules achieving 100% lossless recovery. Performance analysis across 200+ test images averaged 45.2 dB PSNR with 95%+ recovery accuracy, and refactoring cut processing time by 25%.",
    tags: ["Python", "Cryptography", "DNA Coding", "Image Processing"],
    meta: "Sept 2025 — Feb 2026",
  },
  {
    title: "College Bus Pass Management System",
    summary:
      "Full-stack QR-code bus pass platform serving 500+ students and cutting manual verification time by 60%. Python Flask REST API, a 4-table normalized MySQL schema with dynamic fare increments, and a role-based admin dashboard processing 1,000+ daily scans at 99.8% accuracy.",
    tags: ["Python", "Flask", "MySQL", "QR Code", "REST API"],
    meta: "Jan 2025 — Apr 2025",
  },
];

export const timeline = [
  {
    period: "Jun 2026 — Present",
    title: "DevOps Engineer Trainee — Industry-Oriented Training",
    org: "Zoople Technologies · Calicut, Kerala",
    detail:
      "Provisioned and managed 5+ Ubuntu EC2 instances with SSH key auth, IAM policies and security groups; automated instance lifecycle with the AWS CLI and launch templates; authored CloudFormation templates for repeatable IaC deployments; wrote 10+ shell scripts for user, permission, patching and monitoring tasks; ran 50+ Git branching and pull-request workflows and documented deployment and troubleshooting procedures.",
  },
  {
    period: "Aug 2022 — Apr 2026",
    title: "B.Tech in Computer Science Engineering",
    org: "M. Dasan Institute of Technology · Calicut, Kerala",
    detail:
      "Final-year research on reversible data hiding in encrypted images, alongside coursework in operating systems, networks, databases and security.",
  },
  {
    period: "Jul 2020 — Mar 2022",
    title: "Higher Secondary, Computer Science",
    org: "Govt. Vocational Higher Secondary School Atholi · Calicut, Kerala",
    detail: "Computer science stream, first exposure to programming and Linux systems.",
  },
];

export const certifications = [
  "DevOps Engineer Training (In Progress) — Zoople Technologies",
  "Kubernetes and Containerization Fundamentals (In Progress)",
  "Python Development Internship — Maitexa Technologies",
];

export const languages = [
  { name: "Malayalam", level: "Native fluency" },
  { name: "English", level: "Professional fluency" },
  { name: "Hindi", level: "Professional working proficiency" },
];
