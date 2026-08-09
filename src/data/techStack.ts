export interface TechStackItem {
  name: string;
  icon: string;
  // Brand color (hex, no '#') used to render the icon. Dark brands (GitHub,
  // Express, Notion...) use white so they stay visible on the dark card.
  color: string;
}

// Tech with no Simple Icons entry: rendered as a styled text badge instead
// of a placeholder logo that would misrepresent the technology.
export interface TechStackTextItem {
  name: string;
}

export type TechStackEntry = TechStackItem | TechStackTextItem;

export interface CoreTech {
  name: string;
  icon: string;
  role: string;
  color: string;
}

export interface TechStackGroup {
  category: string;
  items: TechStackEntry[];
}

export const coreTech: CoreTech[] = [
  {
    name: 'Astro',
    icon: 'astro',
    role: 'Site statique & performance',
    color: 'BC52EE',
  },
  {
    name: 'React',
    icon: 'react',
    role: 'Interfaces dynamiques',
    color: '61DAFB',
  },
  {
    name: 'Odoo',
    icon: 'odoo',
    role: 'ERP & e-commerce',
    color: '714B67',
  },
];

export const techStackGroups: TechStackGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
      { name: 'TailwindCSS', icon: 'tailwindcss', color: '06B6D4' },
      { name: 'Vite', icon: 'vite', color: '646CFF' },
    ],
  },
  {
    category: 'Backend & Data',
    items: [
      { name: 'Python', icon: 'python', color: '3776AB' },
      { name: 'Django', icon: 'django', color: 'FFFFFF' },
      { name: 'PostgreSQL', icon: 'postgresql', color: '4169E1' },
      { name: 'Firebase', icon: 'firebase', color: 'DD2C00' },
      { name: 'Express', icon: 'express', color: 'FFFFFF' },
      { name: 'Cloudflare', icon: 'cloudflare', color: 'F38020' },
    ],
  },
  {
    category: 'Design & Outils',
    items: [
      { name: 'Figma', icon: 'figma', color: 'F24E1E' },
      { name: 'Git', icon: 'git', color: 'F03C2E' },
      { name: 'GitHub', icon: 'github', color: 'FFFFFF' },
    ],
  },
];
