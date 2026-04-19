"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle decorative blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "var(--color-terracotta-500)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full opacity-[0.05] blur-3xl"
        style={{ background: "var(--color-terracotta-400)" }}
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs md:text-sm uppercase tracking-[0.25em] text-[var(--color-terracotta-600)] mb-6"
        >
          Portfolio / {new Date().getFullYear()}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05] text-[var(--color-ink)]"
        >
          {personal.name}.
          <br />
          <span className="italic text-[var(--color-terracotta-600)]">
            building
          </span>{" "}
          <span className="text-[var(--color-ink-soft)]">
            at the edge of
          </span>
          <br />
          <span className="text-[var(--color-ink-soft)]">
            code & curiosity.
          </span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="rule origin-left mt-10 w-40"
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 max-w-xl text-base md:text-lg text-[var(--color-muted)] leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-12 flex items-center gap-3 text-sm text-[var(--color-muted)]"
        >
          <a
            href="#about"
            className="flex items-center gap-2 hover:text-[var(--color-terracotta-600)] transition-colors"
          >
            <span>Scroll</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              <ArrowDown size={14} strokeWidth={1.5} />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
