export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  github?: string;
  image: string;
  featured: boolean;
  category: string;
  stats?: {
    views: string;
    likes: string;
  };
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  logo?: string;
}

export type SkillCategory =
  | 'Interface Design'
  | 'Engineering Core'
  | 'UI & Styling'
  | 'Workflow & Ops';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
}


export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}