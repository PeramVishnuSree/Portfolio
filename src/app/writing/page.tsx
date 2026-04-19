import { getAllPosts } from "@/lib/writing";
import WritingCard from "@/components/ui/WritingCard";

export const metadata = {
  title: "Writing",
  description: "Essays, technical articles, and notes from the margins.",
};

export default function WritingIndex() {
  const posts = getAllPosts();

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-terracotta-600)] mb-4">
          Writing
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-medium tracking-tight text-[var(--color-ink)]">
          Essays, notes, and things in between.
        </h1>
        <p className="mt-6 text-[var(--color-muted)] leading-relaxed max-w-xl">
          A slow-growing collection of technical pieces, half-formed ideas,
          and things I wish I&apos;d known a year earlier.
        </p>

        <div className="rule mt-14 w-24" />

        <div className="mt-12">
          {posts.length === 0 ? (
            <p className="text-[var(--color-muted)]">
              No posts yet — check back soon.
            </p>
          ) : (
            posts.map((post) => <WritingCard key={post.slug} post={post} />)
          )}
        </div>
      </div>
    </section>
  );
}
