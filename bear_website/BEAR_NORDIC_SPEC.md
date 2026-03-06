# Bear Nordic -- Project Specification

**Last updated:** 2026-03-01

---

## 1. Company Overview

**Company name:** BEAR (operating as Bear Nordic)

BEAR is a premium condom brand targeting young men who want a product that fits properly, looks good, and removes the stigma around buying and using condoms. The brand positions itself at the intersection of Nordic minimalism, modern masculinity, and accessible premium quality. BEAR treats condoms as a normal, unselfconscious part of life -- like deodorant -- rather than something to hide or negotiate around.

**Market position:** Premium but accessible. Not luxury-priced, not budget. The brand competes on fit, aesthetics, and cultural relevance rather than clinical claims or shock value.

**Values:**
- Zero shame, zero excuses (inspired by Sweden's *nollvisionen*)
- Confidence without arrogance
- Responsible masculinity presented as attractive, not preachy
- Quality materials and honest communication

---

## 2. Mission Statement

> BEAR exists to make condoms worth choosing. Starting with fit, because a condom that fits properly changes everything.

**Supporting vision:** A generation where STDs and unplanned pregnancies are the exception -- not the risk people just shrug at. Condoms should feel as normal as deodorant: you don't explain it, you don't hide it, you just use it.

**Tagline:** "It's better when it fits."

**Brand descriptors:** Confident. Reliable. Daring.

---

## 3. Products & Services

### Core Product

Ultra-thin natural latex condoms (0.05mm), ISO 4074 certified, sustainably sourced. Available in three sizes:

| Size Code | Fit Name | Length       | Girth        |
|-----------|----------|--------------|--------------|
| B3        | Fitted   | Up to 16cm   | Up to 11cm   |
| B4        | Classic  | 16 -- 18cm   | 11 -- 12.5cm |
| B5        | Large    | 18cm+        | 12.5cm+      |

### Purchase Options

**Subscription (recurring delivery):**
- Frequency: Monthly or Bimonthly (bimonthly saves 5%)
- Pack sizes: 12, 24, or 36 condoms per delivery
- Base prices: 12 / 20 / 28 GBP (monthly); discounted for bimonthly
- Cancel or pause at any time

**One-time orders:**
| Pack Name | Price | Quantity     | Description                                      |
|-----------|-------|--------------|--------------------------------------------------|
| Tester    | 4 GBP | 3 condoms    | One of each size (B3, B4, B5) or 3 of one size   |
| Stash     | 11 GBP| 12 condoms   | Your chosen size, no subscription                 |
| Bulk      | 20 GBP| 24 condoms   | Best per-unit price for a single order            |

### Key Differentiators
- **Fit-first approach:** Three distinct sizes with at-home tester kit
- **Subscription convenience:** Delivered to your door, no pharmacy runs
- **Brand aesthetic:** Premium, minimalist design that men are not embarrassed to own
- **No-shame positioning:** Cultural normalisation rather than fear-based messaging

### Target Audience
Young men aged 18--35. Culturally literate, self-possessed, style-conscious but not vain. The kind of person who has their own music taste, their own corner cafe, their own circle. Not defined by income bracket but by taste and intentionality.

---

## 4. Current Project Scope

### Website Development

- **Objective:** Build and launch a one-page marketing website for BEAR
- **Technology:** Next.js 16, React 19, Tailwind CSS 4, GSAP (scroll animations), Framer Motion
- **Brand integration:** Brand colors, Mukta Mahee font, and mission statement are fully implemented in the current build
- **Sections implemented:** Navigation, Hero, Mission, Why, Product (with specs), Vision, Why Bear (features), Sizing Guide, Subscription configurator, One-time order, Final CTA, Footer, Tester modal, Member modal
- **Status:** In Progress -- core layout and copy complete; image/video assets not yet integrated

### Marketing Material Creation

- **Mood board:** 27 images in `/mood/` folder, fully analysed in `style-prompt.md`
- **Bear costume reference:** 24 photos + 1 video in `/bear_mask/` folder (bear head mask and paw gloves for campaign imagery)
- **Style prompt:** Complete general style prompt generated from mood board analysis (`style-prompt.md`)
- **Prompt enhancer agent:** Configured at `.claude/agents/prompt-enhancer.md` for consistent AI image generation
- **Approved prompts:** Not yet created (folder does not exist)
- **Image assets for website:** Not yet generated
- **Video assets for website:** Not yet generated
- **Status:** In Progress -- creative direction established, asset generation pending

---

## 5. Deliverables & Milestones

| Deliverable                          | Status        | Notes                                                   |
|--------------------------------------|---------------|---------------------------------------------------------|
| Brand guidelines document            | Completed     | `BEAR_NORDIC_BRAND.md` (this session)                   |
| Project specification document       | Completed     | `BEAR_NORDIC_SPEC.md` (this session)                    |
| Image prompt requirements document   | Completed     | `BEAR_NORDIC_IMAGE_PROMPTS.md` (this session)           |
| Style prompt / mood board analysis   | Completed     | `style-prompt.md`                                       |
| Prompt enhancer agent                | Completed     | `.claude/agents/prompt-enhancer.md`                     |
| Website layout and copy              | Completed     | `app/page.tsx` -- all sections built                    |
| Website scroll animations            | Completed     | GSAP ScrollTrigger implemented                          |
| AI-generated image assets            | Not Started   | Pending prompt creation and generation                  |
| AI-generated video assets            | Not Started   | Pending prompt creation and generation                  |
| Image/video integration into website | Not Started   | Blocked by asset generation                             |
| E-commerce / payment integration     | Not Started   | Subscribe/Order buttons are UI-only placeholders        |
| Responsive design QA                 | Pending       | Layout uses responsive classes but needs device testing |
| Domain and deployment                | Not Started   |                                                         |

---

## 6. Stakeholders

| Role                    | Name / Entity         | Responsibility                                          |
|-------------------------|-----------------------|---------------------------------------------------------|
| Founder / Creative Lead | Ellen Bjorkegren      | Brand direction, content approval, final sign-off       |
| Project Manager (AI)    | bear-nordic-pm agent  | Spec, brand, and image prompt documentation             |
| Prompt Engineer (AI)    | prompt-enhancer agent | AI image/video prompt creation and refinement           |

---

## 7. Notes & Open Items

- **E-commerce backend:** Subscribe Now and Order Now buttons are currently non-functional UI. Payment provider and order management system need to be selected and integrated.
- **Legal pages:** Privacy, Terms, and Contact links in footer point to `#` -- content not yet written.
- **Member modal:** Currently shows hardcoded placeholder data (B4, 12 condoms, monthly, next shipment 15 April 2026). Will need to connect to a real account/subscription system.
- **Image assets:** The website currently has no photography or generated images. All visual elements are CSS/SVG-based (rotating rings, typography). Image integration is the next major milestone.
- **Approved prompts folder:** Does not yet exist. Will be created automatically by the prompt-enhancer agent when the first prompt is approved.
- **Currency:** All prices shown in GBP. No multi-currency support currently planned.
- **SEO metadata:** Basic title and description set in `layout.tsx`. May need expansion for launch.
