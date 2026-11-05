import Link from "next/link";
import Section from "@/components/ui/Section";
import WritingList from "@/components/writing/WritingList";
import { getAllPosts } from "@/lib/writing";

export default function Writing() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <Section id="writing" number="04" label="Writing">
      <WritingList posts={posts} />
      <Link
        href="/writing"
        className="mt-8 inline-block font-mono text-xs uppercase tracking-widest text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
      >
        All writing →
      </Link>
    </Section>
  );
}
