# Portfolio

A personal portfolio site — a journey through computer science, projects, and writing.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. Writing is powered by MDX.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with a custom terracotta + stone palette
- **Typography:** Playfair Display (display) + Inter (body) via `next/font`
- **Animation:** Framer Motion
- **Writing:** MDX via `next-mdx-remote/rsc` + `gray-matter` frontmatter

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
├── app/                  # App Router pages
│   ├── page.tsx          # Home — Hero, About, Projects, Skills, Contact
│   └── writing/          # Writing index + dynamic [slug] article pages
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Home page sections
│   └── ui/               # Reusable cards and primitives
├── lib/
│   ├── data.ts           # Projects, skills, social links
│   └── writing.ts        # MDX file reader utilities
└── types/
content/
└── writing/              # MDX blog posts with frontmatter
```

## Adding a writing post

Drop a new `.mdx` file into `content/writing/` with frontmatter:

```mdx
---
title: "Your title"
date: "2026-04-18"
excerpt: "One-sentence summary for the listing."
tags: ["Essay"]
---

Your content here.
```

## Adding a project

Edit `src/lib/data.ts` and add an entry to the `projects` array.

## Build

```bash
npm run build
npm run start
```

Deploys cleanly to Vercel out of the box.
