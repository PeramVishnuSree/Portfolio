import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WritingPost } from "@/types";

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function WritingCard({ post }: { post: WritingPost }) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className="group block border-b border-[var(--color-border)] py-8 first:pt-0 last:border-b-0 transition-colors"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 text-xs text-[var(--color-muted)] mb-3">
            <time>{formatDate(post.date)}</time>
            <span className="text-[var(--color-muted-soft)]">·</span>
            <span>{post.readingTime}</span>
          </div>

          <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)] tracking-tight group-hover:text-[var(--color-terracotta-600)] transition-colors">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="mt-3 text-[var(--color-muted)] leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          )}

          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] tracking-wide uppercase px-2 py-0.5 bg-[var(--color-terracotta-50)] text-[var(--color-terracotta-700)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <ArrowUpRight
          size={20}
          strokeWidth={1.5}
          className="text-[var(--color-muted)] group-hover:text-[var(--color-terracotta-600)] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
        />
      </div>
    </Link>
  );
}
