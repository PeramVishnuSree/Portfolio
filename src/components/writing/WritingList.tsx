import Link from "next/link";
import type { WritingPostMeta } from "@/types";

function formatDate(iso: string) {
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      });
}

export default function WritingList({ posts }: { posts: WritingPostMeta[] }) {
  return (
    <div className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/writing/${post.slug}`}
          className="group block py-6 md:py-7"
        >
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-lg md:text-xl font-bold tracking-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
              {post.title}
            </h3>
            <span className="shrink-0 font-mono text-xs text-[var(--color-muted-soft)]">
              {formatDate(post.date)}
            </span>
          </div>

          {post.paper && (
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-[var(--color-muted-soft)]">
              Paper · {post.paper.title}
            </p>
          )}

          {post.summary && (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
              {post.summary}
            </p>
          )}

          {post.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[var(--color-border)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--color-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
