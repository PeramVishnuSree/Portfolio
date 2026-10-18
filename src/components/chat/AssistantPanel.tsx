"use client";

import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What projects has Vishnu built?",
  "What's his experience with LLMs and agents?",
  "What's his tech stack?",
  "Is he open to new opportunities?",
];

const MAX_INPUT = 500;

export default function AssistantPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const next: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            typeof data?.reply === "string" && data.reply
              ? data.reply
              : "Sorry, I couldn't answer that. Try rephrasing?",
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const isEmpty = messages.length === 0;

  return (
    <div className="flex h-[440px] w-full flex-col border border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="border-b border-[var(--color-border)] px-5 py-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Ask me anything
        </p>
        <p className="mt-1 text-sm text-[var(--color-muted)]">
          A quick assistant that answers questions about my work and background.
        </p>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
        {isEmpty && !loading && (
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="border border-[var(--color-border)] px-3 py-1.5 text-left text-xs text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {messages.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="flex justify-end">
              <div className="max-w-[85%] bg-[var(--color-ink)] px-3 py-2 text-sm text-[var(--color-background)]">
                {m.content}
              </div>
            </div>
          ) : (
            <div key={i} className="flex">
              <div className="max-w-[90%] text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {m.content}
              </div>
            </div>
          )
        )}

        {loading && (
          <div className="flex items-center gap-1 text-[var(--color-muted-soft)]">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" />
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 border-t border-[var(--color-border)] p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={MAX_INPUT}
          placeholder="Ask about my work…"
          aria-label="Ask a question about Vishnu"
          className="min-w-0 flex-1 bg-transparent px-2 py-1.5 text-sm text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted-soft)]"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          aria-label="Send"
          className="inline-flex h-9 w-9 items-center justify-center bg-[var(--color-accent)] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Send size={16} strokeWidth={1.75} />
        </button>
      </form>
    </div>
  );
}
