export interface Experience {
  id: string;
  role: string;
  org: string;
  orgUrl: string;
  projectTag: string;
  period: string;
  impact: string;
  prUrl: string;
  tags: string[];
  isMember?: boolean;
  isContributor?:boolean;
  isGSOC?:boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  blog?: string;
  marketplace?: string;
  hasVideo: boolean;
  videoUrl?: string;
  detailedDescription?: string;
  features?: string[];
  architecture?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  image?: string;
  link: string;
  source: string;
  content?: string;
  slug: string;
}
