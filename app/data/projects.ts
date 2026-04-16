import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with sections for projects, skills, experience, and contact information.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/username/personal-website",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Built with React, Node.js, and PostgreSQL.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "https://example-shop.com",
    github: "https://github.com/username/ecommerce",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with Vue.js and Firebase.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS", "JavaScript"],
    link: "https://taskapp-demo.com",
  },
];