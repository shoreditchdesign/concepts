# Optiml 3.0 — Design Direction

**Status:** Draft for review  
**Scope:** Fund Manager role page concept direction  
**Inputs used:** `docs/art-direction.md`, `docs/copy-structure.md`, `references/` moodboard, `skills/frontend-design.md`, `skills/web-design-guidelines.md`

## 1. Direction Summary

The concept will be approached as **governance-grade editorial SaaS**: restrained, minimal, and sharply composed, but not sterile. The site should feel like a serious financial decision product presented with the clarity of a premium architecture publication. The visual center of gravity is not "software UI" but **decision infrastructure**.

The work will stay inside the current copy structure and refine through design rather than content restructuring. Across the full page, the consistent message should be that Optiml does not generate noise, dashboards, or sustainability theatre. It produces a structured artifact that can survive scrutiny.

Three reference signals will anchor the direction:

- **Editorial restraint:** oversized but controlled typography, asymmetric layouts, clear pacing, sections with breathing room
- **Institutional credibility:** quiet palette, strong contrast, formal spacing, disciplined card systems, precise labelling
- **Technical intelligence:** blueprint diagrams, audit-style records, line-based illustration, structured information blocks

## 2. Visual System

### 2.1 Visual Tone

The tone is **Swiss-modern financial editorial** with enterprise precision. It should feel confident and specific, not expressive for its own sake. The primary emotional response should be: "This is serious, clear, and built for decision-makers."

The moodboard suggests a useful tension to keep throughout:

- large-scale, assertive headline composition
- minimal but high-contrast layout blocks
- occasional dark grounding zones to make the light canvas feel more premium
- sparse, high-value use of a single accent color rather than a colorful UI system

### 2.2 Color Roles

The palette will remain tightly controlled.

- **Primary accent:** `#2B4EFF`
- **Light background:** `#F7F8FA`
- **Dark anchor:** `#0A0F2E`
- **Neutral lines and borders:** `#E4E7F0`
- **Primary text on light:** `#0A0F2E`
- **Text on dark:** `#FFFFFF`

Usage principles:

- Blue is used to signal conviction: CTAs, numerics, active chips, diagram highlights, key underlines, and small proof accents
- The page remains predominantly light-first
- Dark sections should be used selectively to reset attention and signal seriousness, especially around proof and conversion moments
- No decorative gradients, no secondary accent palette, and no green-coded sustainability cues

### 2.3 Typography

Typography will follow the copy document guidance and be resolved as:

- **Headings / display:** Instrument Serif
- **Body / UI / buttons / metadata:** Instrument Sans

This creates a more ownable and editorial expression than a pure grotesque pairing while still preserving the restraint of the original art direction. The serif should be used with discipline: primarily for H1/H2 moments and selective emphasis, not throughout supporting UI.

Typography principles:

- Headlines should feel decisive, tightly edited, and slightly compressed by layout rather than by font effect
- Body copy remains compact and highly readable with generous line height
- Labels, eyebrow text, chips, and proof descriptors use small uppercase sans with increased tracking
- Numerals in stats and proof moments should feel large, sharp, and deliberate

### 2.4 Layout Rhythm

The entire page will follow a calm, spacious rhythm with a 12-column logic translated into Paper composition.

- Large vertical spacing between sections
- Strong left-edge alignment for headings and section labels
- Repeated pattern of editorial heading block paired with structured content block
- Strategic asymmetry to avoid a templated SaaS feel
- Clear "rest" moments between dense information sections

The page should feel paced like a report:

1. Establish thesis
2. Remove ambiguity
3. Diagnose the governance problem
4. Explain the mechanism
5. Provide proof
6. Present conversion paths
7. Resolve objections

### 2.5 Card Language

Cards are critical because much of the page depends on structured proof and artifact framing.

- White surfaces with 1px neutral border
- 12-16px corner radius
- Subtle shadow only where needed to lift cards from the page
- Strong internal spacing and row dividers
- Small metadata labels, visible hierarchy, no decorative clutter

Cards should feel closer to **document modules** than marketing tiles. Even when they are interactive or persuasive, they must preserve a sense of auditability.

### 2.6 Image and Illustration Direction

The page will use two image modes only:

- **Photography:** premium, muted, institutional, architectural, or boardroom-adjacent
- **Technical diagrams:** blueprint-like line illustrations in blue on light backgrounds

Photography rules:

- no smiling team clichés
- no laptop-pointing scenes
- no bright lifestyle warmth
- favor cinematic crops, stillness, architecture, meeting-room surfaces, papers, tables, materials

Diagram rules:

- single-color or near-monochrome line work
- visible connectors, labels, and annotated logic
- no cartoon icons
- no soft blob illustrations

### 2.7 Motion Principles

Motion will be minimal and purposeful when we translate this into designed blocks.

- staggered reveals for grouped content
- soft upward fades for text and cards
- line-draw or highlight motion for technical diagrams where appropriate
- CTA interactions should feel crisp, not playful

Motion must support legibility and confidence. It should never make the product feel experimental or consumer-grade.

## 3. Section-by-Section Direction

### 3.1 Hero

**Goal:** establish Optiml as a category-defining decision product for fund managers, not another property-tech tool.

**Layout approach:**

- Full-width hero with a restrained editorial split
- Navigation above with thin divider line beneath
- Large H1 block on the left with preheading, subhead, and one clear primary CTA
- Atmospheric image on the right or behind the right side, darkened enough to let a white CTA hold contrast if needed

**Design intent:**

This section should feel expensive and calm. The H1 should dominate the experience, with the rest of the interface almost disappearing around it. The image should not compete with the headline; it acts as tone-setting evidence of seriousness.

**Key components:**

- small uppercase preheading
- oversized H1 in Instrument Serif
- compact supporting paragraph in Instrument Sans
- primary CTA with strong contrast and substantial padding
- secondary navigation and chrome kept visually quiet

**Visual notes:**

- allow generous negative space around the H1
- use blue as a surgical accent, not a wash
- if an underline, bar, or rule appears, it should feel structural

### 3.2 Disambiguation Bar

**Goal:** quickly define the category by clarifying what Optiml is not.

**Layout approach:**

- Compact section immediately after the hero
- Heading and short explanatory line above or beside a 2x2 grid of four "not this" cards
- Cards read as filters or disqualifiers rather than features

**Design intent:**

This block should feel crisp and almost legal in tone. It is there to remove incorrect mental models early. The cards need strong icon discipline and concise typography so the section reads in seconds.

**Key components:**

- section label
- four bordered cards with Lucide-based iconography
- concise line below reinforcing "Decision Records" as the product output

**Visual notes:**

- icons should be simple, outline-based, and slightly technical
- avoid playful pill styling; this should feel firmer and more architectural
- the final line can carry more typographic emphasis than the cards

### 3.3 Governance Problem

**Goal:** surface the operational and political pain of existing workflow artifacts failing under review.

**Layout approach:**

- Left-right composition
- Left column carries heading and framing copy
- Right column stacks three pain-point cards with enough spacing to feel individually important

**Design intent:**

This section should feel like a diagnosis, not generic problem marketing. The cards should resemble documented failure modes. Each one should read like a known institutional friction point.

**Key components:**

- restrained headline block
- three surface cards in a softer neutral treatment than the white core cards
- optional numeric or symbolic markers for each pain point

**Visual notes:**

- the right column can feel slightly denser than the left for useful tension
- cards should not be too decorative; the copy does the heavy lifting
- use hierarchy and spacing to give the section emotional weight

### 3.4 How REDI Works

**Goal:** make the product logic feel deterministic, structured, and trustworthy.

**Layout approach:**

- Heading block at top
- Three-step row above a video or below it depending on fit in Paper
- Video frame acts as the visual anchor
- Each step card uses a consistent pattern: index, label, short explanation

**Design intent:**

This is where the page transitions from problem statement to operating model. The section should present a flow from input to output without feeling like a SaaS feature list. The step cards should look more like parts of a technical process than marketing feature tiles.

**Key components:**

- three step cards
- explicit emphasis on deterministic optimization
- product video frame treated as premium media, not embedded clutter
- support note distinguishing AI enrichment from deterministic optimisation

**Visual notes:**

- connectors or subtle line-work between cards can reinforce process logic
- blue should be strongest here after the hero
- the note about AI vs deterministic logic deserves visual distinction, possibly as an inset annotation or side note

### 3.5 Proof Bar

**Goal:** convert conceptual trust into market trust.

**Layout approach:**

- Tighter section with preheading, short H2, logo strip, and CTA
- Could sit on a dark background band to create a visual reset

**Design intent:**

This should feel compact, credible, and easy to scan. The logos are there to reduce perceived risk, not to become the main visual event.

**Key components:**

- muted logo strip with consistent optical sizing
- short supporting copy or CTA line
- minimal chrome

**Visual notes:**

- if dark, logos should be softened rather than bright white
- the CTA can be integrated as part of the proof language instead of a separate loud button

### 3.6 CTA Ladder

**Goal:** frame conversion as three appropriate entry points rather than a single generic sales ask.

**Layout approach:**

- Intro line above
- 3-up card grid
- Each card differentiated by stage and intent, but still part of one system

**Design intent:**

This section should feel like a measured progression through readiness, not a marketing funnel. The user should feel that Optiml understands procurement reality and different levels of buyer maturity.

**Key components:**

- one card each for awareness, evaluation, procurement
- clear stage labels
- primary action button or text action inside each card

**Visual notes:**

- cards can escalate slightly from left to right through emphasis, contrast, or blue usage
- keep them structurally consistent to avoid a carousel or campaign look
- the reference line above should feel like social reassurance, not hype

### 3.7 FAQ

**Goal:** close the page with rational reassurance and procurement-grade clarity.

**Layout approach:**

- Left column for preheading and H2
- Right column for accordion stack

**Design intent:**

This section should feel orderly and low-friction. The accordions must look like part of the document system, not a generic website widget.

**Key components:**

- clean accordion rows with strong dividers
- clear open/closed affordances
- compact but comfortable answer spacing

**Visual notes:**

- keep the interaction subtle and controlled
- answers should feel precise and easy to revisit
- if one item is open by default, choose the most category-defining question

## 4. Cross-Section Consistency Rules

These rules should remain stable when we move into Paper:

- Every section gets a clear label or orienting device
- Blue appears as emphasis, never as atmosphere
- Typography does most of the premium work
- Cards behave like artifacts, not generic SaaS modules
- Dark sections are used sparingly and strategically
- Icons remain linear and disciplined
- Any decorative move must reinforce structure, trust, or sequence

## 5. Paper Execution Strategy

Once this direction is approved, the Paper work should happen block by block in the same order as the copy structure.

For each section:

1. Build the layout shell first
2. Lock typography scale and spacing
3. Add card structure, image treatments, and diagrams
4. Refine contrast and visual rhythm
5. Check consistency against the full-page system before moving on

This approach keeps the concept coherent while still allowing meaningful iteration on each block.

## 6. Open Decisions For Review

These are the only areas that may need your preference before we design on canvas:

- whether the hero should be a true split layout or a more atmospheric image-backed editorial composition
- whether the Proof Bar should be light or dark
- whether the CTA Ladder should remain fully light or use one darker/high-emphasis card for the procurement path

## 7. Working Assumptions

- We are designing for desktop-first concept development, then adjusting for responsive behavior after section approval
- The current copy structure remains fixed
- Instrument Serif and Instrument Sans are the approved type direction for this phase
- The accent blue remains `#2B4EFF`
- Moodboard references are being used for composition, restraint, and premium tone rather than literal mimicry
