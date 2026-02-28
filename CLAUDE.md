# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A Next.js 16 website using the App Router, TypeScript, and Tailwind CSS v4. The Next.js app lives in the `bear_website/` subdirectory — run all commands from there.

## Commands

```bash
cd bear_website

npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # run ESLint
```

## Architecture

- **`bear_website/app/`** — Next.js App Router. `layout.tsx` is the root layout (Geist font, global CSS). `page.tsx` is the home route.
- **`bear_website/app/globals.css`** — global styles; Tailwind v4 is imported here.
- Styling uses Tailwind CSS utility classes directly in JSX — no separate CSS modules.
- No test framework is configured yet.
