# Bear Nordic PM -- Agent Memory

## Project Structure

- **Project root:** `/Users/ellenbjorkegren/website/bear_website/`
- **Framework:** Next.js 16 + React 19 + Tailwind CSS 4 + GSAP + Framer Motion
- **Main page:** `app/page.tsx` (one-page site, all sections in single file)
- **Layout:** `app/layout.tsx` (loads Mukta Mahee font via next/font/google)
- **Styles:** `app/globals.css` (CSS vars for brand colors, Tailwind config)

## PM Artifacts (created 2026-03-01)

- `BEAR_NORDIC_SPEC.md` -- project specification
- `BEAR_NORDIC_BRAND.md` -- brand guidelines
- `BEAR_NORDIC_IMAGE_PROMPTS.md` -- image prompt requirements

## Key Brand Details (confirmed from source code)

- **Colors:** #302621 (primary bg), #eae4d7 (cream), #735a4c (mid), #7a715c (olive), #2a1f1a (darkest)
- **Font:** Mukta Mahee, weights 400/600/700
- **Tagline:** "It's better when it fits."
- **Sizes:** B3 (Fitted), B4 (Classic), B5 (Large)
- **Currency:** GBP

## Creative Assets

- `style-prompt.md` -- comprehensive mood board analysis (27 images), includes clothing/styling injection blocks and bear head/paws injection block
- `mood/` -- 27 mood board reference images
- `bear_mask/` -- 24 HEIC photos + JPG conversions + 1 MOV video of bear costume
- `approved-prompts/` -- does not exist yet, will be created by prompt-enhancer agent
- `.claude/agents/prompt-enhancer.md` -- agent config for image prompt workflow

## Open Items

- No image/video assets integrated into website yet
- E-commerce buttons are UI placeholders (no payment backend)
- Legal pages (Privacy, Terms, Contact) not written
- Member modal uses hardcoded demo data
- No graphic logo exists -- logo is text-only (Mukta Mahee Bold)
