import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSlugs, getPostBySlug } from "@/lib/writing";
import Markdown from "@/components/writing/Markdown";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Vishnu Peram`,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary, type: "article" },
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/writing"
        className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
      >
        ← Writing
      </Link>

      <header className="mt-8">
        <p className="font-mono text-xs text-[var(--color-muted-soft)]">
          {formatDate(post.date)} · {post.readingTime}
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-ink)]">
          {post.title}
        </h1>
        {post.summary && (
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
            {post.summary}
          </p>
        )}

        {post.paper && (
          <div className="mt-6 border-l-2 border-[var(--color-accent)] pl-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Paper
            </p>
            <a
              href={post.paper.url}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
            >
              {post.paper.title}
            </a>
            {(post.paper.authors || post.paper.year) && (
              <p className="text-sm text-[var(--color-muted)]">
                {[post.paper.authors, post.paper.year]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
          </div>
        )}
      </header>

      <div className="mt-10">
        <Markdown content={post.content} />
      </div>

      {post.implementation && post.implementation.length > 0 && (
        <div className="mt-12 border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Implementation
          </p>
          <ul className="flex flex-col gap-2">
            {post.implementation.map((impl) => (
              <li key={impl.url}>
                <a
                  href={impl.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80"
                >
                  {impl.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {post.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[var(--color-border)] px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-[var(--color-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Comments (Giscus) will go here in a later phase. */}
    </article>
  );
}
