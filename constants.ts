import { Project, Experience, Skill, SocialLink } from './types';

export const PROFILE_DATA = {
  name: "Akruti Kasture",
  role: "UI/UX Engineer",
  tagline: "Bridging the gap between complex systems and intuitive design.",
  bio: "UI/UX Engineer with nearly 4 years of experience designing scalable, user-centric web and mobile interfaces for enterprise and SaaS applications. Skilled in UX research, prototyping, information architecture, design systems, and React-based UI implementation. I specialize in simplifying complex, multi-module workflows into intuitive user experiences.",
  location: "Goa, India",
  email: "akrutikasture@gmail.com",
  availability: "Available for opportunities",
  avatar: "/akruti_kasture.jpg",
  githubUsername: "akruti-75",
  linkedinUsername: "akrutikasture",
  // dribbbleUsername: "akrutikasture",
  behanceUsername: "akrutikasture",
  resumeUrl: "https://flowcv.com/resume/snvwu4qhda66"
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: `https://linkedin.com/in/${PROFILE_DATA.linkedinUsername}/`, icon: "Linkedin" },
  { platform: "GitHub", url: `https://github.com/${PROFILE_DATA.githubUsername}`, icon: "Github" },
  { platform: "Behance", url: `https://behance.net/${PROFILE_DATA.behanceUsername}`, icon: "Behance" },
  // { platform: "Dribbble", url: `https://dribbble.com/${PROFILE_DATA.dribbbleUsername}`, icon: "Dribbble" },
];

export const SKILLS: Skill[] = [
  // Design & Prototyping
  { name: 'Figma', category: 'Interface Design', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Photoshop', category: 'Interface Design', icon: '/photoshop.png' },
  { name: 'Canva', category: 'Interface Design', icon: '/Canva.svg' },

  // Frontend Engineering
  { name: 'React', category: 'Engineering Core', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'TypeScript', category: 'Engineering Core', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'JavaScript', category: 'Engineering Core', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'HTML5', category: 'UI & Styling', icon: 'https://cdn.simpleicons.org/html5/E34F26' },

  // UI Libraries & Styling
  { name: 'SASS', category: 'UI & Styling', icon: 'https://cdn.simpleicons.org/sass/CC6699' },
  { name: 'Bootstrap 5', category: 'UI & Styling', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
  { name: 'Angular Material', category: 'UI & Styling', icon: 'https://cdn.simpleicons.org/angular/DD0031' },

  // Tools & Workflow
  { name: 'Git', category: 'Workflow & Ops', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', category: 'Workflow & Ops', icon: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'Jira', category: 'Workflow & Ops', icon: 'https://cdn.simpleicons.org/jira/0052CC' },
  { name: 'Zoho', category: 'Workflow & Ops', icon: 'https://cdn.simpleicons.org/zoho/2266AA' },
  { name: 'NPM', category: 'Workflow & Ops', icon: 'https://cdn.simpleicons.org/npm/CB3837' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "Trellissoft",
    role: "UI/UX Engineer",
    period: "Feb 2022 - Present",
    description: [
      "Designed intuitive, scalable interfaces for multi-module enterprise web applications.",
      "Created user flows, wireframes, prototypes, and design-system driven UI screens.",
      "Improved usability for data-heavy workflows, dashboards, and admin modules.",
      "Collaborated with developers to ensure smooth React / Angular UI implementation.",
      "Contributed to rebranding, theme integration, and design consistency across projects."
    ],
    skills: ["React", "Angular", "Figma", "Photoshop", "Canva", "Design Systems"],
    logo: "https://trellissoft.ai/wp-content/uploads/2021/11/cropped-Trellissoft-logo-without-tagline-32x32.png"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "No Code - Flow Builder",
    description: "",
    techStack: ["Figma", "Prototyping"],
    link: "https://www.behance.net/gallery/242456419/No-Code-flow-builder",
    image: "/makeflowbuilder.webp",
    featured: true,
    category: "UI/UX"
  },
  {
    id: 2,
    title: "Travel Mobile App",
    description: "",
    techStack: ["Figma", "Prototyping"],
    link: "https://www.behance.net/gallery/224910177/Travel-Mobile-App-UI-Design",
    image: "/getsetgo.jpg",
    featured: true,
    category: "UI/UX"
  },
  {
    id: 3,
    title: "Furniture E-commerce Website",
    description: "",
    techStack: ["Figma", "Prototyping"],
    link: "https://www.behance.net/gallery/224896181/Furniture-E-commerce-Website-UI-Design",
    image: "/furniture.jpg",
    featured: true,
    category: "UI/UX"
  },
  {
    id: 4,
    title: "Yummy Delights Restaurant Home Page",
    description: "",
    techStack: ["Figma", "Prototyping"],
    link: "https://www.behance.net/gallery/221024185/Yummy-delights-Restaurant-home-page",
    image: "/yummydelights.jpg",
    featured: false,
    category: "UI/UX"
  },
  // {
  //   id: 5,
  //   title: "Nexracker",
  //   description: "",
  //   techStack: ["Figma", "Prototyping"],
  //   link: "https://www.behance.net/gallery/221024185/Yummy-delights-Restaurant-home-page",
  //   image: "public/nextracker.png",
  //   featured: false,
  //   category: "Frontend"
  // }
];