# Prompt Enhancer Agent Memory

## Project Structure

- Project root: `/Users/ellenbjorkegren/website/bear_website`
- Agent specs: `/Users/ellenbjorkegren/website/bear_website/.claude/agents/`
- Memory directory: `/Users/ellenbjorkegren/website/bear_website/.claude/agent-memory/prompt-enhancer/`

## Mood Folder Status

- Mood folder found at: `/Users/ellenbjorkegren/website/bear_website/mood/`
- Images (48 total): full re-analysis 2026-03-05. Previous count was 37. 11 new images added: chef kitchen hands (red cabbage prep), washed brown cap / iPod nano / Penguin Classic flat lay, blue crate street wine still life, vintage Mercedes golden-hour tailgate (two men, Seager caps, Ohio plate), man eating pizza / white tile / green door, outdoor cafe table still life (navy cap + coffee + sunglasses), packed suitcase wardrobe flat lay (JIL SANDER bag, Goyard card holder), wine glass in grey denim pocket (close-up), La Seine riverside picnic (wine, salami, cheese, peach), blue striped cloth flat lay (film camera + natural wine + peach), green crate pavement coffee (two ceramic mugs from above)
- Style prompt updated from all 48 images: `/Users/ellenbjorkegren/website/bear_website/style-prompt.md`
- Style prompt last updated: 2026-03-05
- When invoked: check if any mood images are newer than `style-prompt.md`; if current, load and reuse it.

## Mood Board Aesthetic Summary (for quick injection)

- **Color palette:** Warm neutrals (cream, ecru, bone), chocolate brown + dark espresso (dominant outerwear), washed denim blue (dominant trouser), earth tones (olive, cognac, caramel), wood warmth (honey walnut, amber), accent tones (navy, forest green, burgundy, rust red), aged brass; NEW: natural wine amber/gold, pale peach, grey pavement/cool stone, washed grey denim, golden-hour champagne sky
- **Lighting:** Three modes — (1) warm tungsten practical interior with visible light sources, low-key cinematic; (2) flat overcast European daylight for street/cafe; (3) flat-lay still life with cool neutral daylight. Also: dramatic raking light in fine-dining, bright sun on clay courts, floodlit night sport, flash/black-bg night clubs, golden-hour exterior haze (new), Seine waterside late-afternoon (new)
- **Textures:** Dark leather outerwear, blue-and-white tile, green subway tile, aged brick, wood panelling, chunky knit, denim, worn cotton jersey, film grain; NEW: grey tarmac/concrete pavement, Parisian cobblestone/limestone quai, moulded plastic crate grid, open suitcase fabric
- **Composition:** Vertical portrait, two-shot cafe-table framing most common, foreground props for depth, full-body to three-quarter, mixed eye-contact; NEW: flat lay / bird's-eye still life (at least 5 images), extreme close-up body-part / gesture detail shots
- **Mood:** Effortlessly cool, culturally literate, European street leisure meets heritage sportswear, nostalgic editorial, warm desaturated interiors vs flat overcast daylight exteriors; NEW: quiet object-led intimacy (flat lays, still lifes), analogue nostalgia (iPod, film camera, natural wine)
- **Art style:** Three modes now confirmed — (1) editorial campaign photography; (2) high-quality candid/street; (3) flat lay / catalog still life. Also: flash photography in darkness for night club/party; alpine action photography for ski/snow.
- **Casting:** Genuinely diverse (Black British, West African, European, mixed-heritage), ages 18–35, lean-to-athletic builds, self-possessed energy, minimal grooming, natural expressions
- **New contexts (added 2026-03-05):** kitchen food prep (close-up), packed suitcase wardrobe flat lay, natural wine in public space, milk crate as improvised furniture, Seine riverside picnic, golden-hour tailgate with vintage Mercedes, pizza eating, analogue music props (iPod nano, corded headphones), marinière stripe leisure register

## Models & Casting Section

- `style-prompt.md` now contains a `## Models & Casting` section added 2026-03-01
- Covers: age range, build, ethnicity diversity, men's and women's grooming, energy/demeanour, facial expression styles, overall casting philosophy
- Key casting note: real-people energy over conventional model perfection; self-possession and cultural specificity over generic attractiveness

## bear-nordic-pm Image Prompt Format

Defined in: `/Users/ellenbjorkegren/website/bear_website/BEAR_NORDIC_IMAGE_PROMPTS.md` (confirmed exists, last updated 2026-03-01)

Prompts must use a structured 7-field template (not comma-list style):

1. **Subject** — core focus (person, object, landscape, product)
2. **Scene** — environmental context (interior, exterior, nordic wilderness, studio, etc.)
3. **Framing Style** — Wide shot, Close-up, Dutch angle, Over-the-shoulder, Macro, Bird's-eye, Low angle
4. **Focus Behavior** — Shallow DOF, Deep focus, Rack focus, Tilt-shift, Selective focus on subject
5. **Camera Movement** — Still or video-intent description (e.g., "static tripod shot", "slow dolly forward", "handheld drift")
6. **Light Artifacts** — Lens flare, Volumetric lighting, Bokeh, God rays, Soft diffused light, Hard shadows, Golden hour glow
7. **Realistic Details** — Skin texture, Fabric weave, Water droplets, Grain texture, 8K resolution, Hyperrealistic rendering, Nordic material textures

### Critical compliance rules (confirmed from BEAR_NORDIC_IMAGE_PROMPTS.md)
- Bear head/paws trigger: inject verbatim Prompt Injection Block from style-prompt.md — DO NOT paraphrase
- Style Prompt Injection block must be appended to Light Artifacts or Realistic Details for full style treatment
- NEVER use "maximum saturation" or neon/pastel language — warm desaturated grade always applies
- Mission relevance must be explicitly noted (confidence, normalisation, quality)
- Clothing must be context-matched: sport context = sporty end of wardrobe
- Submission checklist must be included in each saved prompt file
- BEAR_NORDIC_BRAND.md referenced but not yet created — align against confirmed palette instead

## Bear Mask & Paws Assets

- Bear mask images (JPEGs): `/Users/ellenbjorkegren/website/bear_website/bear_mask/jpg/` — 24 images, all analyzed 2026-03-01
- Original HEICs (unreadable by Read tool — too large, binary): `/Users/ellenbjorkegren/website/bear_website/bear_mask/`
- Bear visual descriptors written into `style-prompt.md` under `## Bear Head & Paws`
- **Injection rule:** whenever a user prompt contains "bear-mask", "bear-head", or "bear-paws", read the Prompt Injection Block from `## Bear Head & Paws` in `style-prompt.md` and inject it verbatim into the Subject field

## Clothing & Styling Section

- `style-prompt.md` now contains a `## Clothing & Styling` section added 2026-03-01
- Covers: garment types for men and women, brands (Adidas, Nike, New Balance), fit philosophy, sock-visibility rule, color vocabulary, and a verbatim Prompt Injection Block
- **Injection rule:** whenever clothing needs to be described in a Subject field, read the Prompt Injection Block from `## Clothing & Styling` in `style-prompt.md` and inject it verbatim

## Product Packaging Spec (confirmed 2026-03-04)

Sourced from `app/layout.tsx` + `app/page.tsx`. These are ground-truth — do not wait for BEAR_NORDIC_BRAND.md.

- **Packet format:** Square ~55 × 55 mm, matte surface, clean corners
- **Background:** `#302621` (very dark warm espresso-brown; near-black in low light, warm brown in raking light)
- **Wordmark:** BEAR — Mukta Mahee Semibold/Bold, `#eae4d7` parchment, tracked ~0.4em, centered
- **Secondary text:** size or "Ultra-thin" — Mukta Mahee Regular, `#735a4c`, very small, below wordmark
- **Front face:** No illustrations, no icons, no gradients, no decorative elements — typographic only
- **Injection rule:** whenever packaging appears in a prompt, read and inject the Prompt Injection Block from `## Product Packaging` in `style-prompt.md` verbatim

## Confirmed Brand Color Palette (from website codebase)

- `#302621` — primary background, espresso-brown (also packet background)
- `#eae4d7` — primary text, warm off-white / parchment
- `#735a4c` — secondary muted warm brown
- `#7a715c` — tertiary warm grey-brown
- `#4a3d33` — border / accent dark
- `#3a2e26` — subtle border / divider
- `#2a1f1a` — deeper background (subscription section)
- Font: Mukta Mahee, weights 400 / 600 / 700

## Approved Prompts

- Folder: `/Users/ellenbjorkegren/website/bear_website/approved-prompts/`
- Created: 2026-03-04
- Naming convention: `[subject-slug]-[key-detail].md` (e.g., `tennis-still-life-bear-packet.md`)
- Each file includes: approval date, original input, style basis notes, full 7-field prompt

## Known Missing Files

- `BEAR_NORDIC_SPEC.md` — not yet created
- `BEAR_NORDIC_BRAND.md` — not yet created; use confirmed palette above instead
