import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { WritingPost } from "@/types";

const WRITING_DIR = path.join(process.cwd(), "content", "writing");

function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export function getAllPosts(): WritingPost[] {
  if (!fs.existsSync(WRITING_DIR)) return [];

  const files = fs
    .readdirSync(WRITING_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const source = fs.readFileSync(path.join(WRITING_DIR, file), "utf8");
    const { data, content } = matter(source);

    return {
      slug,
      title: (data.title as string) ?? slug,
      date: (data.date as string) ?? new Date().toISOString().slice(0, 10),
      excerpt: (data.excerpt as string) ?? "",
      tags: (data.tags as string[]) ?? [],
      readingTime: estimateReadingTime(content),
    } satisfies WritingPost;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(WRITING_DIR, `${slug}.mdx`);
  const altPath = path.join(WRITING_DIR, `${slug}.md`);
  const filePath = fs.existsSync(fullPath) ? fullPath : altPath;
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? new Date().toISOString().slice(0, 10),
    excerpt: (data.excerpt as string) ?? "",
    tags: (data.tags as string[]) ?? [],
    readingTime: estimateReadingTime(content),
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(WRITING_DIR)) return [];
  return fs
    .readdirSync(WRITING_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}
