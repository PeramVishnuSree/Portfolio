import type { Project, SkillGroup, SocialLinks } from "@/types";

export const personal = {
  name: "Vishnu",
  initials: "V.",
  role: "Computer Science Student & Builder",
  tagline:
    "Notes from a computer science journey — building at the intersection of machine learning, systems, and thoughtful interfaces.",
  location: "India",
};

export const socialLinks: SocialLinks = {
  email: "hello@example.com",
  github: "https://github.com/your-handle",
  linkedin: "https://linkedin.com/in/your-handle",
};

export const projects: Project[] = [
  {
    slug: "ai-research-paper-summarizer",
    title: "Research Paper Summarizer",
    year: "2026",
    summary:
      "An LLM-powered reading companion that distills dense research papers into structured, skimmable briefs.",
    description:
      "Upload a paper, get a structured summary with key contributions, methodology, and limitations. Built with Streamlit and a retrieval-augmented pipeline.",
    tags: ["Python", "Streamlit", "LLMs", "RAG"],
    repo: "https://github.com/your-handle/AI-research-paper-summarizer",
    live: "https://research-papers.streamlit.app/",
  },
  {
    slug: "accent-ease",
    title: "AccentEase",
    year: "2025",
    summary:
      "A speech-aware tool that helps non-native speakers refine pronunciation through real-time audio feedback.",
    description:
      "Records short utterances, compares them against native references, and surfaces phoneme-level guidance. Built on top of a custom speech feature pipeline.",
    tags: ["Python", "Speech", "ML", "Audio"],
    repo: "https://github.com/your-handle/AccentEase",
  },
  {
    slug: "ai-trader",
    title: "AI Trader",
    year: "2025",
    summary:
      "An experimental trading agent exploring reinforcement-learning strategies on historical market data.",
    description:
      "A sandbox for evaluating RL-driven trading ideas with clean backtesting, evaluation metrics, and visual drill-downs.",
    tags: ["Python", "RL", "Pandas", "Backtesting"],
    repo: "https://github.com/your-handle/AI-Trader",
  },
];

export const skills: SkillGroup[] = [
  {
    name: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "Bash"],
  },
  {
    name: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "Streamlit",
    ],
  },
  {
    name: "Machine Learning",
    items: ["LLMs & RAG", "Computer Vision", "NLP", "Classical ML", "Eval"],
  },
  {
    name: "Tools & Infra",
    items: ["Git", "Docker", "Linux", "AWS", "Vercel", "PostgreSQL"],
  },
];
