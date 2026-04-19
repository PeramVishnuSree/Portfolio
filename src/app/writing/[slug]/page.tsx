import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { getAllSlugs, getPostBySlug } from "@/lib/writing";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

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

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-terracotta-600)] transition-colors mb-10"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          All writing
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs text-[var(--color-muted)] mb-4">
            <time>{formatDate(post.date)}</time>
            <span className="text-[var(--color-muted-soft)]">·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-medium tracking-tight text-[var(--color-ink)] leading-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-5 text-lg text-[var(--color-muted)] leading-relaxed">
              {post.excerpt}
            </p>
          )}
          <div className="rule mt-8 w-16" />
        </header>

        <div className="prose prose-editorial max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
