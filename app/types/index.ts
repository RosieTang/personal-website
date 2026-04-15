export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
}
