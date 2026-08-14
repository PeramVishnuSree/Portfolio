export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  image?: string;
  category: string;
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
