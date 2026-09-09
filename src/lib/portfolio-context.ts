import { personal, projects, skills, socialLinks } from "@/lib/data";

/**
 * Serializes the portfolio content into a compact text block for the
 * assistant's system prompt. Built from the same data.ts the site renders,
 * so the assistant never drifts out of sync with the page.
 */
export function buildPortfolioContext(): string {
  const projectLines = projects
    .map((p) => {
      const links = [
        p.live ? `Live: ${p.live}` : null,
        p.repo ? `Repo: ${p.repo}` : null,
      ]
        .filter(Boolean)
        .join(" | ");
      return `- ${p.title} [${p.category}] — ${p.description} Tech: ${p.tags.join(
        ", "
      )}.${links ? ` ${links}` : ""}`;
    })
    .join("\n");

  const skillLines = skills
    .map((g) => `- ${g.name}: ${g.items.join(", ")}`)
    .join("\n");

  return `
NAME: ${personal.name}
ROLE: ${personal.role}
LOCATION: ${personal.location}
ABOUT: ${personal.summary} ${personal.headline}
CONTACT: email ${socialLinks.email} | GitHub ${socialLinks.github} | LinkedIn ${socialLinks.linkedin}

PROJECTS:
${projectLines}

SKILLS / STACK:
${skillLines}
`.trim();
}
