export interface SkillGroup {
  category: string;
  items: string[];
}

// TODO: Replace with your actual skills
export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"], // TODO: update
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML / CSS"], // TODO: update
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL"], // TODO: update
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "AWS", "PostgreSQL"], // TODO: update
  },
];
