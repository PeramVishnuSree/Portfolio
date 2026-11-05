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

export type PaperRef = {
  title: string;
  authors?: string;
  year?: number;
  url: string;
};

export type ImplementationLink = {
  label: string;
  url: string;
};

export type WritingPostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  paper?: PaperRef;
  implementation?: ImplementationLink[];
  readingTime: string;
};

export type WritingPost = WritingPostMeta & {
  content: string;
};
