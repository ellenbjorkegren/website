# Bear Nordic -- Image Generator Prompt Requirements

**Last updated:** 2026-03-11

---

## Purpose

This document defines the required parameters for all AI-generated image and video assets used in Bear Nordic marketing and website materials. Every prompt submitted for generation must include all applicable fields below. This ensures visual consistency across all assets and alignment with the brand identity documented in `BEAR_NORDIC_BRAND.md`.

---

## Prompt Template

Every image or video prompt must include the following seven fields:

**Subject:** [The core focus of the image -- person, object, landscape, product, bear-mask figure, couple, group, etc. If the subject wears the bear head mask or paw gloves, the full Prompt Injection Block from `style-prompt.md` must be included verbatim.]

**Scene:** [The environmental context -- interior (cafe, lounge, restaurant, living room), exterior (European street, fjord, tennis court, urban sidewalk), studio, etc. Reference the mood board environments where applicable.]

**Framing Style:** [e.g., Wide establishing shot, Full-body portrait, Three-quarter portrait, Close-up, Dutch angle, Over-the-shoulder, Bird's-eye view, Low angle. Note: the mood board strongly favours vertical (portrait) orientation, full-body and three-quarter framing, and centered or slightly off-center subject placement.]

**Focus Behavior:** [e.g., Shallow depth of field, Deep focus, Medium focus with readable background, Selective focus on subject, Tilt-shift. Note: the mood board uses medium-to-deep focus for editorial shots (environments fully legible) and shallow-to-medium for candid/street shots.]

**Camera Movement:** [For stills: describe implied movement (e.g., "static tripod shot", "captured mid-pan", "handheld candid feel"). For video-intent prompts: describe actual movement (e.g., "slow dolly forward", "gentle handheld drift", "locked-off wide with subject walking through frame").]

**Light Artifacts:** [e.g., Warm tungsten practical lighting, Volumetric light, Visible light sources in frame, Soft overcast diffused daylight, Film grain, Lens flare, Bokeh, Golden hour glow, Deep shadows with amber cast. Reference the lighting modes documented in `style-prompt.md`.]

**Realistic Details:** [e.g., Skin texture, fabric weave, worn leather patina, wood grain, water droplets, film grain, natural vignette, soft highlight rolloff, lens breathing. Specify film stock where relevant: "shot on Kodak Portra 400", "35mm film scan", "Fuji 400H medium format". The mood board demands candid photographic realism with analogue texture — never CGI-clean, never digitally perfect, never "8K hyperrealistic". If you find yourself writing "8K" or "photorealistic rendering", replace it with a film stock reference instead.]

---

## Brand Alignment Requirements

All prompts must reflect Bear Nordic's brand identity as documented in `BEAR_NORDIC_BRAND.md` and `style-prompt.md`:

### Color Grounding
- **Primary palette:** Dark chocolate brown (`#302621`), warm cream/ecru (`#eae4d7`), muted brown (`#735a4c`), warm olive (`#7a715c`), deep espresso (`#2a1f1a`)
- **Extended earth tones:** Cognac, caramel, tan, terracotta, dusty olive, stone, oat, sand
- **Accent tones (in clothing/environment only):** Forest green, navy, burgundy, washed denim blue, sky blue
- **Never:** Neon, pastel, or heavily saturated colors as dominant elements

### Tone and Mood
- Nordic minimalism with warm European editorial sensibility
- Clean, confident, no-shame, modern responsible man
- Premium but accessible -- aspirational by proximity, not price
- Effortlessly cool, culturally literate, nostalgic but contemporary
- Low-key cinematic warmth for interiors; social realism for street/cafe

### Subject Alignment
- Imagery must reinforce the mission: making condoms worth choosing, normalising use, celebrating confidence and fit
- Subjects should embody self-possession, ease, and genuine engagement -- never posed stiffness or stock-photo energy
- Diverse casting: Black British, West African, South Asian, East Asian, White European, mixed-heritage -- no single default face
- Age range: 18--35, sweet spot early-to-mid twenties
- Build: lean to athletic, not gym-built; natural and unbothered

### Avoid
- Overly cluttered scenes or busy compositions
- Off-brand colors (bright primaries, pastels, neons)
- Generic stock photo aesthetics (forced smiles, sterile lighting, corporate backgrounds)
- CGI-clean or digitally perfect rendering (must have analogue texture)
- Sexually explicit imagery or crude innuendo
- Fear-based or clinical visual language
- Over-styled or fashion-industry-perfect grooming

---

## Clothing and Styling Reference

Before selecting clothing descriptors, assess the scene context:

- **Social/urban/lifestyle scenes:** Draw from the elevated-casual end of the mood board wardrobe -- leather bombers, wide-leg denim, loafers, wool coats, relaxed knits, Oxford shirts
- **Sport/athletic contexts:** Draw from the sporty end -- football jerseys, track jackets, court sneakers, training kit, athletic socks
- **Mixed/ambiguous settings:** Blend both registers (sportswear silhouettes in non-sport environments) weighted toward the dominant context

For the full clothing vocabulary and the ready-to-use Prompt Injection Block for clothing, see the `## Clothing & Styling` section and `### Prompt Injection Block (Clothing)` in:

> `/Users/ellenbjorkegren/website/bear_website/style-prompt.md`

---

## Bear Head and Paws Reference

When any prompt includes a subject wearing the bear head mask or paw gloves, the full Prompt Injection Block from the `## Bear Head & Paws` section of `style-prompt.md` must be included verbatim in the Subject field. Do not paraphrase or summarise -- copy it exactly to ensure consistent, grounded representation of the actual costume pieces.

Trigger terms: "bear-mask", "bear-head", "bear-paws"

Reference file: `/Users/ellenbjorkegren/website/bear_website/style-prompt.md`
Reference images: `/Users/ellenbjorkegren/website/bear_website/bear_mask/jpg/` (24 photos from all angles)

---

## Style Prompt Injection

For any prompt that needs the full general style treatment, the following block from `style-prompt.md` can be appended:

> Shot on 35mm film, Kodak Portra 400, candid editorial photography, available light only — warm practical tungsten indoors or soft overcast European daylight or late-afternoon ambient haze outdoors, natural vignette, slight grain throughout, soft focus edges, highlights roll off gently without clipping hard, rich earth tones and warm neutrals — cream, ecru, chocolate brown, olive, cognac, honey walnut — accented by navy, forest green, and washed denim blue, warm desaturated color grade with lifted shadows and amber-cast highlights in interiors, composition slightly off-center or subject caught mid-moment, foreground and background breathe with natural depth of field rather than simultaneous sharpness, subjects self-possessed and unposed — absorbed in conversation or looking off-frame — in European cafe or street or leisured urban environments, heritage sportswear meets street culture, genuinely diverse casting aged 18--35, lived-in culturally grounded atmosphere, unstaged, imperfect, human.

---

## Example Prompt (Website Hero Image)

**Subject:** A young man standing alone at a European urban crosswalk at dusk, wearing a dark chocolate brown leather bomber jacket over a cream crewneck, wide-leg dark indigo denim, white Adidas Samba sneakers with thick white crew socks pulled to mid-calf, washed khaki 6-panel cap tilted slightly forward, round amber-tinted sunglasses resting low on the nose

**Scene:** Quiet Copenhagen side street, limestone facades, warm light spilling from a cafe window to the left, wet pavement reflecting amber

**Framing Style:** Full-body vertical portrait, subject centered, slight negative space above

**Focus Behavior:** Medium depth of field -- subject sharp, background architecture softened but fully readable

**Camera Movement:** Static, as if shot on a tripod from across the street at eye level

**Light Artifacts:** Warm tungsten spill from cafe window creating a pool of amber light on the pavement; soft overcast dusk sky providing flat fill; subtle film grain throughout

**Realistic Details:** Worn leather patina on jacket, visible denim texture and selvedge detail, wet pavement reflections, skin texture with natural light, shot on Kodak Portra 400, fine film grain, natural vignette, soft highlight rolloff

---

## Example Prompt (Bear Mask Campaign Image)

**Subject:** [Insert full Bear Head & Paws Prompt Injection Block from style-prompt.md verbatim here] -- worn by a figure in a butter-yellow vintage Chelsea football jersey, wide-leg dark charcoal trousers, white Nike Air Force 1 sneakers, thick white crew socks

**Scene:** Interior of a 1970s-style wood-panelled lounge with a floor lamp casting a warm pool of light, vintage leather armchair, coffee table with books and ceramic espresso cup

**Framing Style:** Three-quarter portrait, vertical orientation, subject standing beside the armchair with one paw resting on its back

**Focus Behavior:** Deep focus, full environmental detail visible

**Camera Movement:** Static tripod shot, slightly below eye level looking up

**Light Artifacts:** Single warm practical floor lamp visible in frame, deep shadows with amber cast in corners, tungsten warmth throughout, subtle lens warmth

**Realistic Details:** Dense chocolate brown fur texture on mask catching warm light, visible wood grain on wall panels, aged leather armchair patina, shot on 35mm film, fine grain throughout, natural vignette, soft shadow edges, available light only — no studio setup

---

## Prompt Submission Checklist

- [ ] All 7 fields completed (Subject, Scene, Framing Style, Focus Behavior, Camera Movement, Light Artifacts, Realistic Details)
- [ ] Brand color/tone alignment confirmed against `BEAR_NORDIC_BRAND.md`
- [ ] Mission relevance verified -- imagery reinforces confidence, normalisation, and quality
- [ ] Clothing context-matched (social vs. sport vs. mixed) per `style-prompt.md`
- [ ] If bear-mask/bear-head/bear-paws present: full Prompt Injection Block included verbatim
- [ ] Reviewed against Do's and Don'ts in `BEAR_NORDIC_BRAND.md` Section 5
- [ ] No off-brand colors, stock photo aesthetics, or CGI-clean rendering
- [ ] Approved prompts saved to `/Users/ellenbjorkegren/website/bear_website/approved-prompts/`

---

## Related Documents

| Document                  | Path                                                                    | Purpose                              |
|---------------------------|-------------------------------------------------------------------------|--------------------------------------|
| Brand Guidelines          | `BEAR_NORDIC_BRAND.md`                                                  | Colors, fonts, voice, do's/don'ts    |
| Project Specification     | `BEAR_NORDIC_SPEC.md`                                                   | Full project scope and status        |
| Style Prompt              | `style-prompt.md`                                                       | Mood board analysis, injection blocks|
| Prompt Enhancer Agent     | `.claude/agents/prompt-enhancer.md`                                     | AI agent for prompt refinement       |
| Bear Mask Reference       | `bear_mask/jpg/`                                                        | 24 costume reference photos          |
| Mood Board                | `mood/`                                                                 | 27 visual reference images           |
| Approved Prompts          | `approved-prompts/`                                                     | Validated prompt archive (pending)   |
