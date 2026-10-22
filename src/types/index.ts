export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  version: string;
  status: 'Production' | 'In Development' | 'Prototype';
  description: string;
  keyFeatures: string[];
  techStack: string[];
  apkFileName?: string;
  apkSize?: string;
  githubUrl?: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
  screens: {
    id: string;
    title: string;
    badge: string;
    description: string;
    highlights: string[];
  }[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: string;
    tags: string[];
    highlight?: boolean;
  }[];
}

export interface TimelineMilestone {
  year: string;
  period: string;
  title: string;
  role: string;
  institution: string;
  description: string;
  achievements: string[];
  badges: string[];
}
