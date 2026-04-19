export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  year: string;
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type SocialLinks = {
  email: string;
  github: string;
  linkedin: string;
};

export type WritingPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
};
