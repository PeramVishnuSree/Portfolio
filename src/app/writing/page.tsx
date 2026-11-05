import type { Metadata } from "next";
import { getAllPosts } from "@/lib/writing";
import WritingList from "@/components/writing/WritingList";

export const metadata: Metadata = {
  title: "Writing — Vishnu Peram",
  description:
    "Reflections on machine-learning papers, and what I find when I try to reproduce them.",
};

export default function WritingIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-accent)]">
        Writing
      </p>
      <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-ink)]">
        Notes on papers I read.
      </h1>
      <p className="mt-4 max-w-xl text-[var(--color-muted)] leading-relaxed">
        Reflections on machine-learning papers — and what I find when I try to
        reproduce them.
      </p>

      <div className="mt-12">
        {posts.length === 0 ? (
          <p className="text-[var(--color-muted)]">Nothing here yet.</p>
        ) : (
          <WritingList posts={posts} />
        )}
      </div>
    </div>
  );
}
