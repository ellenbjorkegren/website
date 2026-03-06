# Bear Nordic -- Brand Guidelines

**Last updated:** 2026-03-01

---

## 1. Color Palette

### Primary Palette (confirmed from website source)

| Role             | Name            | HEX       | RGB               | Usage                                                    |
|------------------|-----------------|-----------|-------------------|----------------------------------------------------------|
| Primary BG       | Dark Brown      | `#302621` | 48, 38, 33        | Main background, nav bar, buttons, dark text on light     |
| Light Surface    | Warm Cream      | `#eae4d7` | 234, 228, 215     | Light section backgrounds, cards, light text on dark      |
| Mid Tone         | Muted Brown     | `#735a4c` | 115, 90, 76       | Secondary text, labels, nav links, subtle accents         |
| Muted Accent     | Warm Olive      | `#7a715c` | 122, 113, 92      | Body text on dark backgrounds, subtle descriptive text    |
| Darkest BG       | Deep Espresso   | `#2a1f1a` | 42, 31, 26        | Subscription section background, deepest contrast layer   |

### Extended UI Colors (derived from website source)

| Role             | Value           | Usage                                                    |
|------------------|-----------------|----------------------------------------------------------|
| Border (dark)    | `#3a2e26`       | Card grid dividers, subtle borders on dark backgrounds   |
| Border (hover)   | `#4a3d33`       | Button borders, interactive element default state        |
| Border (active)  | `#9a8d81`       | Hover state for bordered buttons and CTAs                |
| Hover BG         | `#352a1f`       | Card hover background                                   |
| Hover BG (alt)   | `#3d3028`       | Button hover on dark backgrounds                        |
| Overlay white    | `#ffffff04` -- `#ffffff08` | Ghost rings, subtle decorative borders          |

### Color Usage Rules

- Dark sections use `#302621` as background with `#eae4d7` as primary text
- Light sections use `#eae4d7` as background with `#302621` as primary text
- `#735a4c` is the standard muted/secondary text color in both contexts
- `#7a715c` is used for longer body copy and descriptive text
- The deepest background `#2a1f1a` is reserved for the subscription section to create visual hierarchy
- No bright or saturated accent colors are used anywhere on the site
- All interactive states use subtle shifts within the brown/cream spectrum

---

## 2. Typography

### Font Family

**Mukta Mahee** (Google Fonts) -- loaded via `next/font/google` with CSS variable `--font-mukta-mahee`

| Role           | Font Family  | Weight     | Size                          | Usage                                              |
|----------------|-------------|------------|-------------------------------|------------------------------------------------------|
| Display / Hero | Mukta Mahee | 700 (Bold) | `clamp(5rem, 22vw, 18rem)`    | Hero "BEAR" text                                     |
| Heading 1      | Mukta Mahee | 600 (Semi) | `clamp(2.5rem, 8vw, 6rem)`    | Final CTA section heading                            |
| Heading 2      | Mukta Mahee | 600 (Semi) | `clamp(1.75rem, 3vw, 2.75rem)`| Section titles                                       |
| Large Body     | Mukta Mahee | 300 (Light)| `clamp(1.1rem, 2.5vw, 1.5rem)`| Mission/Why body paragraphs                          |
| Body           | Mukta Mahee | 400        | `text-sm` (14px)              | Standard body text, product descriptions             |
| Small / Label  | Mukta Mahee | 400        | `text-xs` (12px)              | Buttons, navigation, CTAs                            |
| Micro Label    | Mukta Mahee | 400        | `text-[10px]`                 | Section overlines, category labels                   |

### Typography Style Rules

- All labels, buttons, nav items, and overlines use `uppercase` with wide letter-spacing (`0.2em` -- `0.5em`)
- Section overlines are set at 10px, uppercase, tracking `0.5em`, colored `#735a4c`
- Body text uses relaxed line-height (`leading-relaxed`)
- Font stack fallback: `Arial, Helvetica, sans-serif`
- `antialiased` rendering applied globally

---

## 3. Logo Usage

The BEAR logo is currently rendered as text typography only -- no graphic logo file exists.

- **Primary mark:** "BEAR" in Mukta Mahee Bold, uppercase, wide letter-spacing (`0.08em` -- `0.35em`)
- **Nav wordmark:** "Bear" in Mukta Mahee SemiBold, small caps style, tracking `0.4em`
- **Footer wordmark:** "Bear" matching nav treatment

### Logo Placement Rules

- Nav: top-left, fixed position, always visible
- Footer: left-aligned within footer container
- Hero: centered, viewport-dominant scale

### Approved Variations

- Dark on light: `#302621` text on `#eae4d7` background
- Light on dark: `#eae4d7` text on `#302621` background
- Embossed/debossed: Hero uses same-color text with subtle text-shadow for depth effect

---

## 4. Brand Voice & Tone

### Voice Adjectives

Confident. Direct. Warm. Honest. Understated. No-nonsense. Slightly irreverent.

### Communication Style

- **Register:** Informal but intelligent. Speaks like a sharp friend, not a corporation.
- **Tone:** Clean and modern. Never preachy, never clinical, never juvenile.
- **Perspective:** First-person plural ("We") when speaking as the brand; second-person ("You") when addressing the customer.
- **Humor:** Dry, subtle, and earned. Used sparingly -- mostly in footer taglines and section headers ("Commitment issues?"). Never slapstick or crude.
- **Copy patterns observed in website:**
  - Short, punchy sentences. Fragments used intentionally.
  - Em dashes for emphasis and pacing.
  - Rhetorical questions to reframe the product category.
  - Contrast structures: "Not X. Not Y. Just Z."

### Sample Voice Lines (from website)

- "No shame. No excuses. Just a condom worth choosing."
- "We got tired of it."
- "What if the problem isn't condoms -- it's that no one's made them worth choosing?"
- "A condom that fits properly changes everything -- and that's not marketing speak."
- "Monthly drop to your door. No pharmacy runs, no 3am panic. Just sorted."
- "Bear with us. Bear necessities. You can barely feel it."

---

## 5. Do's and Don'ts

### Visual Do's

- Use earth tones exclusively -- browns, creams, warm olives
- Maintain generous whitespace and clean layouts
- Use subtle hover states and smooth transitions (300--700ms)
- Keep decorative elements minimal and geometric (circles, lines, borders)
- Reference the mood board aesthetic: warm tungsten lighting, editorial lifestyle photography, heritage sportswear in elevated settings

### Visual Don'ts

- No bright or saturated colors (no reds, blues, greens outside of photography)
- No gradients (except subtle transparency fades for scroll indicators)
- No rounded corners on cards or buttons (sharp rectangular edges throughout)
- No stock photo aesthetic -- all imagery must feel editorial, lived-in, culturally grounded
- No cluttered layouts or competing visual elements

### Messaging Do's

- Normalise condom use without making it the whole conversation
- Present responsibility as attractive and confident, not dutiful
- Be direct about what the product does and why it matters
- Acknowledge the real problem (people avoid condoms) without moralising

### Messaging Don'ts

- No fear-based messaging (STD scare tactics, unwanted pregnancy guilt)
- No sexual innuendo or crude humor
- No gendered stereotyping or "lad culture" tone
- No clinical or medical language ("prophylactic", "contraceptive device")
- No apologies for existing -- the brand is confident in its category

---

## 6. Visual Aesthetic Reference

For detailed mood board analysis including lighting, textures, composition, casting, and styling direction, see:

- **Style prompt:** `/Users/ellenbjorkegren/website/bear_website/style-prompt.md`
- **Mood board images:** `/Users/ellenbjorkegren/website/bear_website/mood/` (27 reference images)
- **Bear costume reference:** `/Users/ellenbjorkegren/website/bear_website/bear_mask/` (24 photos + 1 video of the bear head mask and paw gloves)

### Aesthetic Summary

Nordic minimalism meets warm European editorial. Clean lines and earth tones. Warm tungsten interior lighting or flat overcast European daylight. Heritage sportswear worn in non-sport contexts. Genuinely diverse casting of self-possessed young adults. Lived-in and culturally grounded atmosphere. Photorealistic with fine film grain. Never trying too hard.
