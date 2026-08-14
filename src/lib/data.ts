import type { Project, SkillGroup, SocialLinks } from "@/types";

export const personal = {
  name: "Vishnu Peram",
  initials: "VP",
  role: "AI Engineer",
  brandTag: "AI 2026",
  location: "San José, CA",
  headline:
    "Artificial Intelligence M.S. student at SJSU. Building agentic systems that reason and act.",
  summary:
    "AI engineer and M.S. student at SJSU, focused on building LLM-based agents and the systems around them, and comfortable across the full ML pipeline from data preparation to deployment.",
};

export const socialLinks: SocialLinks = {
  email: "vishnusree416@gmail.com",
  github: "https://github.com/PeramVishnuSree",
  linkedin: "https://www.linkedin.com/in/vishnu-sree-peram/",
};

export const projects: Project[] = [
  {
    slug: "bankruptcy-prediction",
    title: "Bankruptcy Prediction",
    category: "ML · Finance",
    summary:
      "ML pipeline for bankruptcy risk — benchmarked Logistic Regression, Random Forest, and XGBoost across 9 class-imbalance techniques (F1 +40–60%), with threshold/cost analysis and isotonic-calibrated risk scores.",
    description:
      "Compared 9 class-imbalance techniques across Logistic Regression, Random Forest, and XGBoost, improving F1 by 40–60% and recall to 60–70%. Threshold and cost-based analysis found an optimal 0.30–0.40 cutoff to reduce missed high-risk cases. ROC, PR, and calibration curves with isotonic calibration produce reliable probability-based risk scores.",
    tags: ["Python", "scikit-learn", "XGBoost", "SHAP"],
    repo: "https://github.com/PeramVishnuSree/Bankruptcy-prediction",
    image: "/projects/bankruptcy-prediction.png",
  },
  {
    slug: "gcp-sales-data-analysis",
    title: "GCP Sales Data Analysis",
    category: "Data Analytics",
    summary:
      "Cloud analytics pipeline on GCP — a Streamlit uploader lands files in Cloud Storage, a Cloud Function loads BigQuery via a star schema (40% faster queries), surfaced in a 7-chart Looker Studio dashboard.",
    description:
      "Streamlit app for managers to upload files to Google Cloud Storage; a Cloud Function loads the data into BigQuery for analytics. Star-schema modeling improved query performance 40%. Looker Studio dashboard connects to BigQuery with 7 performance charts and 3 filters.",
    tags: ["GCP", "BigQuery", "SQL", "Looker Studio", "Python"],
    live: "https://lookerstudio.google.com/reporting/9247226d-8e3b-4562-ad3f-8eaf4ebac4df",
    image: "/projects/gcp-sales-data-analysis.png",
  },
  {
    slug: "film-club",
    title: "Film Club",
    category: "Full Stack",
    summary:
      "Full-stack social film catalogue — ratings, reviews, diaries, ranked lists, feeds, and recommendations across 25+ REST endpoints. Colocating backend and DB in AWS us-east-1 cut query latency from ~70 ms to ~1 ms.",
    description:
      "FastAPI, async SQLAlchemy 2.0, asyncpg, PostgreSQL, Next.js 16, and React 19. Three-tier deploy across Vercel, Dockerized Render, and Neon serverless Postgres. TMDB caching and batch ingestion sped streaming-availability lookups ~7–9× (~13 s to <1 s); IMDb-style Bayesian ranking builds a Top 500 from ~1,000 films. ~60 pytest tests, GitHub Actions CI/CD, JWT auth, email verification, rate limiting, and security headers.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "AWS"],
    repo: "https://github.com/PeramVishnuSree/Film-Club",
    live: "https://film-club-sigma.vercel.app",
    image: "/projects/film-club.png",
  },
  {
    slug: "research-paper-summarizer",
    title: "Research Paper Summarizer",
    category: "GenAI",
    summary:
      "GPU-free RAG pipeline for research-paper Q&A and summarization — semantic retrieval over FAISS grounds Llama 3.1 (via Groq) with source citations and map-reduce summaries for long documents.",
    description:
      "End-to-end RAG pipeline using PyMuPDF, Sentence Transformers (all-MiniLM-L6-v2), and FAISS with overlapping chunking and semantic retrieval. Context-aware Q&A with citations and map-reduce summarization via Llama 3.1 on the Groq API. Modular Python backend with persistent FAISS indexes, deployed on Streamlit Community Cloud.",
    tags: ["Python", "RAG", "FAISS", "LLMs", "Streamlit"],
    repo: "https://github.com/PeramVishnuSree/AI-research-paper-summarizer",
    live: "https://research-papers.streamlit.app/",
    image: "/projects/research-paper-summarizer.png",
  },
];

export const skills: SkillGroup[] = [
  {
    name: "AI & ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "LLMs & RAG",
      "LangChain",
      "NLP",
      "Computer Vision",
      "Evaluation",
    ],
  },
  {
    name: "Languages & Frameworks",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "C++",
      "SQL",
      "React",
      "Next.js",
      "FastAPI",
      "Node.js",
    ],
  },
  {
    name: "Tools & Infra",
    items: [
      "Git",
      "Docker",
      "Linux",
      "AWS",
      "Vercel",
      "PostgreSQL",
      "Streamlit",
      "Bash",
    ],
  },
];
