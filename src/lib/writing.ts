import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { WritingPost, WritingPostMeta } from "@/types";

const WRITING_DIR = path.join(process.cwd(), "content", "writing");

function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function parseFile(fileName: string): WritingPost {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(WRITING_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    summary: String(data.summary ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    paper: data.paper,
    implementation: Array.isArray(data.implementation)
      ? data.implementation
      : undefined,
    readingTime: readingTime(content),
    content,
  };
}

function getFileNames(): string[] {
  if (!fs.existsSync(WRITING_DIR)) return [];
  return fs.readdirSync(WRITING_DIR).filter((f) => /\.mdx?$/.test(f));
}

export function getAllPosts(): WritingPostMeta[] {
  return getFileNames()
    .map(parseFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content: _content, ...meta }) => meta);
}

export function getAllSlugs(): string[] {
  return getFileNames().map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug: string): WritingPost | null {
  const fileName = getFileNames().find(
    (f) => f.replace(/\.mdx?$/, "") === slug
  );
  return fileName ? parseFile(fileName) : null;
}
