---
name: Weekend Tree Surgeon
description: Good work for good people — a local, personable tree surgery service in Cheshire.
colors:
  gorse-gold: "#4a7856"
  pale-straw: "#7aa383"
  plough-soil: "#001f3f"
  moss-bed: "#2a4f3f"
  soil-dark: "#1a1a1a"
  soil-medium: "#1a1a1f"
  stone: "#353535"
  warm-linen: "#fafbfc"
  whitewashed-clay: "#f7f7f7"
  hedgerow: "#e8e9ec"
typography:
  display:
    fontFamily: "'Shrikhand', 'Arial', sans-serif"
    fontSize: "clamp(3rem, 4.5vw, 6rem)"
    fontWeight: 400
    lineHeight: "clamp(3.5rem, 4vw, 4rem)"
  headline:
    fontFamily: "'Roboto', 'Arial', sans-serif"
    fontSize: "clamp(1.9375rem, 4.1vw, 3.0625rem)"
    fontWeight: 900
    lineHeight: 1.2
  title:
    fontFamily: "'Roboto', 'Arial', sans-serif"
    fontSize: "clamp(1.525rem, 3vw, 1.7rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "'Roboto', 'Arial', sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Roboto', 'Arial', sans-serif"
    fontSize: "clamp(0.8125rem, 1.8vw, 1rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
  logo:
    fontFamily: "'Press Start 2P', monospace"
    fontSize: "1.25rem"
    fontWeight: 700
    letterSpacing: "-0.05em"
rounded:
  none: "0px"
  xs: "4px"
  sm: "5px"
  md: "8px"
  lg: "16px"
  xl: "24px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "40px"
  section: "clamp(3.75rem, 7.82vw, 6.25rem)"
components:
  button-primary:
    backgroundColor: "{colors.gorse-gold}"
    textColor: "#1a1a1a"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "#1a1a1a"
    textColor: "#ffffff"
  button-transparent:
    backgroundColor: "transparent"
    textColor: "#001f3f"
    rounded: "{rounded.none}"
    padding: "0"
    size: "180px x clamp(2.875em, 5.5vw, 3.5em)"
  card-service:
    backgroundColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "50px 20px"
  card-review:
    backgroundColor: "#ffffff"
    rounded: "{rounded.xs}"
    padding: "60px clamp(1rem, 3.2vw, 2rem) clamp(2rem, 5.4vw, 2.5rem)"
---

# Design System: Weekend Tree Surgeon

## 1. Overview

**Creative North Star: "The Handshake from Next Door"**

Weekend Tree Surgeon is a marketing site for a solo tree surgeon in Cheshire. Every pixel should feel like a recommendation from a neighbor, not a corporate pitch. The system uses warm, grounded colors pulled directly from the local landscape — fern green, dark plough soil, moss — to root the brand in place. Typography pairs a friendly, high-contrast sans-serif workhorse (Roboto) with a warm, slightly retro display face (Shrikhand) that signals personality without pretension.

The system is flat and print-like. Surfaces don't float; they sit. Depth is conveyed through color contrast and firm borders, not through ambient shadows. This is not a SaaS dashboard. It is not a luxury portfolio. It is a trustworthy hand extended across a garden gate.

This system explicitly rejects: destructive industrial aesthetics (buzzsaws, black/orange warning colors), unsafe cowboy imagery, Silicon Valley tech tropes (neon, glassmorphism, dark-mode-as-default), and elite architectural minimalism (sterile white space, aspirational pricing cues).

**Key Characteristics:**
- Warm, earthy palette drawn from Cheshire farmland
- Flat surfaces with depth conveyed through color contrast, not shadows
- High-contrast typography with a display face that has warmth and character
- Tactile, confident buttons that reward interaction with bold state changes
- Generous, varied spacing that breathes — never cramped, never cavernous
- Light mode as the default experience; dark mode is a user choice, not the brand

## 2. Colors: The Field and Fence Palette

Colors are drawn from the Cheshire landscape: fern under a hedgerow, the dark soil of ploughed farmland, moss nestled against a stone wall. One muted green accent carries the identity; neutrals are tinted slightly warm to keep the palette cohesive.

### Primary
- **Fern Green** (`#4a7856`, oklch(50% 0.09 150)): The singular accent color. Used on primary buttons, the `.cs-topper` label, nav link underlines, footer heading underlines, and the 6px top border on the services card block. Its muted green reads as organic, calm, and trustworthy. Never diluted with gradients or shadows.
- **Sage** (`#7aa383`, oklch(68% 0.08 148)): A lighter variant of the primary. Used sparingly — dark mode review descriptions, the nav underline in dark mode. Do not use at full opacity on white backgrounds; contrast is insufficient.

### Secondary
- **Plough Soil** (`#001f3f`, oklch(20% 0.05 255)): A deep, near-black navy with a hint of blue. Used as the `--secondary` variable and for transparent button borders. The depth reads as reliable and established, not corporate. Do not use as a dominant surface color; it's a supporting actor.

### Tertiary
- **Moss Bed** (`#2a4f3f`, oklch(33% 0.07 165)): A muted dark green. Used as `--accent` in dark mode — applied to left/right pseudo-element backgrounds in SBS sections and flex-group backgrounds. Brings a note of organic life without being bright or decorative.

### Neutral
- **Soil Dark** (`#1a1a1a`, oklch(13% 0.005 85)): Header color (`--headerColor`), dark mode background (`--dark`). A near-black tinted warm. Never pure `#000`.
- **Soil Medium** (`#1a1a1f`, oklch(14% 0.005 265)): Dark mode surface and mobile nav background (`--medium`). Slightly cooler than Soil Dark for subtle tonal separation.
- **Stone** (`#353535`): Body text on light backgrounds. Dark enough for readability without the harshness of black. Used for paragraph and list text.
- **Warm Linen** (`#fafbfc`, oklch(98% 0.005 255)): Body text on dark backgrounds (`--bodyTextColorWhite`). A near-white tinted cool. Never pure `#fff`.
- **Whitewashed Clay** (`#f7f7f7`): Background for flex-group containers in SBS sections, review cards in dark mode. A warm off-white that softens the card without adding shadow.
- **Hedgerow** (`#e8e9ec`): The single border/divider color. Used for review item separators. A cool gray-green that recedes into the background.

### Named Rules

**The One Accent Rule.** Fern Green is the only accent color on the page. It carries the brand identity on ≤15% of the visible surface. Its rarity is the point — when you see it, you know something matters.

**The No Glass Rule.** Backgrounds are opaque. No `backdrop-filter`, no `blur()`, no translucent overlays in brand sections. The mobile nav overlay is the sole exception and uses it only as a scrim.

## 3. Typography

**Display Font:** Shrikhand (with Arial, sans-serif fallback)
**Body Font:** Roboto (with Arial, sans-serif fallback)
**Logo Font:** Press Start 2P (with monospace fallback)

**Character:** A warm, slightly retro display face meets a sturdy workhorse sans-serif. Shrikhand brings personality and hand-crafted warmth to hero moments; Roboto does the heavy lifting with high readability and a generous x-height. The Press Start 2P pixel font on the logo is a distinctive, memorable mark — use it only for the "WTS" wordmark in the header and the full name in the footer. Scale steps maintain at least a 1.25 ratio for clear hierarchy.

### Hierarchy
- **Display** (Shrikhand, 400, clamp(3rem, 4.5vw, 6rem), line-height: clamp(3.5rem, 4vw, 4rem)): The hero title on the home page only. Maximum impact, minimum frequency. Always on a dark or muted background; never place against busy imagery.
- **Headline** (Roboto, 900, clamp(1.9375rem, 4.1vw, 3.0625rem), line-height: 1.2): Section titles via `.cs-title`. Heavy weight commands attention; used once per section.
- **Title** (Roboto, 700, clamp(1.525rem, 3vw, 1.7rem), line-height: 1.2): The `.cs-subtitle` in the hero, and service card headings (32px via LESS scaling). Strong but not dominant.
- **Body** (Roboto, 400, 1.2rem, line-height: 1.5): All running text. Generous size (19.2px at base) for readability. Max line length kept to 65–75 characters in content blocks.
- **Label** (Roboto, 700, clamp(0.8125rem, 1.8vw, 1rem), line-height: 1.2, letter-spacing: 0.1em, uppercase): The `.cs-topper` class. Small, tracked-out, all-caps labels that introduce sections. Always Fern Green.
- **Logo** (Press Start 2P, 700, 1.25rem, letter-spacing: -0.05em, uppercase): The "WTS" mark in the header and "WeekendTreeSurgeon" in the footer. Pixel font. Fern Green on light backgrounds. Never used for body text or navigation.

### Named Rules

**The Single Display Rule.** Shrikhand appears in exactly one place per page: the main headline. Nowhere else. Its impact depends on scarcity.

**The Pixel Restraint Rule.** Press Start 2P is used for the wordmark only — the three letters "WTS" and the full business name in the footer. It is never used for headlines, body copy, labels, or navigation. Pixel fonts elsewhere read as retro-tech gimmickry.

## 4. Elevation

This system is print-like and flat. There are no drop shadows on cards, buttons, or surfaces. Depth is conveyed through color layering: a darker surface behind a lighter one, a colored top border, or a background tint shift. The current codebase carries a few soft shadows inherited from the CodeStitch starter; the design direction is toward their removal in favor of pure tonal layering.

### Shadow Vocabulary
- **None.** Surfaces sit on the page through color contrast alone. If a surface needs visual separation, use a border, a background tint, or spatial distance. Do not use `box-shadow`.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. If an element needs to feel lifted, use color contrast or a 1px border. Shadows are prohibited.

## 5. Components

### Buttons

**Character:** Tactile and confident. Buttons feel substantial and pressable — you know exactly where to click. Hover states are bold and definitive, not subtle.

- **Shape:** Square corners (0px radius). No rounding.
- **Primary (`.cs-button-solid`):** Fern Green background, Soil Dark text. Height: 50px. Padding: 0 30px. No border. On hover, the background fills with black and text turns white via a left-to-right pseudo-element reveal (width 0% → 100%, 0.3s transition).
- **Transparent (`.cs-button-transparent`):** Transparent background, 1px solid Plough Soil border (turns white in dark mode). Width: 180px, height: clamp(2.875em, 5.5vw, 3.5em). On hover, a black fill expands from the left, turning text white.
- **Focus:** Inherit hover treatment. No additional ring; the fill change is the affordance.
- **Prohibited:** Rounded corners on buttons. Gradient fills. Drop shadows. Translucent backgrounds with blur. Outline-only buttons without a fill state.

### Cards (Services)

**Character:** Sturdy information blocks that feel anchored, not floating. The Fern Green top border is the signature — a firm handshake, not a decorative flourish.

- **Corner Style:** 5px radius (`.cs-card-services` rounded-sm).
- **Background:** White (`#fff`). Dark mode: Soil Medium.
- **Top Border:** 6px solid Fern Green. This is the card's primary visual signature.
- **Internal Padding:** 50px top/bottom, 20px left/right.
- **Icon Container:** 88px circle, Soil Medium background (primaryDark in dark mode). Centered above the heading.
- **Prohibited:** Box shadows on service cards (current CodeStitch shadow of `0px 20px 40px rgba(0,0,0,0.05)` should be removed per the Flat-By-Default Rule). Nested cards. Side-stripe borders.

### Cards (Reviews)

**Character:** Testimonial blocks that are clean and undistracting — the words do the work.

- **Corner Style:** 4px radius (`.cs-card-review` rounded-xs).
- **Background:** White. Dark mode: Soil Medium.
- **Internal Padding:** 60px top, clamp(1rem, 3.2vw, 2rem) sides, clamp(2rem, 5.4vw, 2.5rem) bottom.
- **Divider:** 1px solid Hedgerow (`#e8e9ec`) below the review text.
- **Prohibited:** Box shadows (current `0px 20px 39px 0px rgba(0,0,0,0.05)` should be removed).

### Navigation

**Character:** Firmly anchored at the top. Clean, utilitarian, never ornamental.

- **Desktop:** White background (Soil Dark in dark mode), full width, fixed position. 16px horizontal padding. Links are Soil Dark (white in dark mode). Active/hover state: 2px Fern Green underline that expands from left (width 0% → 100%, 0.3s transition). Navigation height: 65px.
- **Mobile:** Hamburger toggle (2px rounded lines, Soil Dark or white). Menu slides in from the right with a clip-path or scaleX transform. Menu background: white (Soil Medium in dark mode). A dark scrim with `backdrop-filter: blur(10px)` overlays the page content (the sole permitted blur in the system).
- **Logo:** "WTS" in Press Start 2P, Fern Green, 1.25rem. Text logo, not an image.
- **Prohibited:** Animated hamburger-to-X transitions that are showy. Dropdown menus with shadows. Sticky headers that change opacity on scroll.

### Footer

**Character:** Dark grounding block that closes the page firmly. The Fern Green underlines on section headings are the only accent; everything else is quiet.

- **Background:** `#1c1c1c` (replaced by Soil Dark in dark mode). No gradients, no textures.
- **Section Headings:** White, 18px, bold, uppercase. 2px Fern Green underline, 97px wide, 16px below the text.
- **Links:** White at 0.9 opacity. On hover: Fern Green with a 0.3s color transition. Desktop: 2px Fern Green underline expands on hover.
- **Credit Line:** 16px white text. Brand name in Fern Green. Centered on mobile, left-aligned on desktop.
- **Padding:** 84px top, 20px bottom.

### CTA Section

**Character:** A warm, dark call-to-action block. Dark overlay on a radial gradient, white text, centered layout. The primary button is the exit point.

- **Background:** Black at 0.9 opacity over `radial-gradient(circle at 50% 50%, rgba(47, 42, 28, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)`. The radial gradient adds subtle warmth from the center without being decorative.
- **Heading:** White, 900 weight, clamp(~min(9vw, 3rem)), line-height 58/48.
- **Button:** `.cs-button-solid` — the standard primary button.
- **Padding:** 50px top/bottom on mobile, 168px on desktop.

### Hero (Home Page)

**Character:** A dark, dramatic first impression with animated vertical lines. The Shrikhand display headline dominates; the Fern Green accent animates through the line effect.

- **Background:** Dark overlay (black at 0.7 opacity) on a background image. Desktop: a subtle green radial gradient replaces the image, with `background-attachment: fixed` for a parallax effect.
- **Animated Lines:** Three 1px vertical lines with a gradient after-element that drops from top to bottom (7s animation, cubic-bezier(0.8, 0.5, 0.5, 2) easing). The after-element uses Fern Green in the gradient. Lines are at 0%, 50%, and 100% of the viewport width.
- **Typography:** Display (Shrikhand), Subtitle (Roboto 700), Body (Roboto 400). All centered.
- **Prohibited:** Hero images with people in hard hats. Stock photography of heavy machinery. Buzzwords like "solutions" or "professional services."

## 6. Do's and Don'ts

### Do:
- **Do** use Fern Green as the sole accent — on buttons, toppers, underlines, and the services top border. Let it breathe.
- **Do** use flat surfaces with color contrast for separation. A darker background behind a lighter card is depth enough.
- **Do** use real project photos — Adam in a tree, hedges being cut, gardens being cleared. Real work, real person.
- **Do** use generous body text (1.2rem, line-height 1.5) with line lengths capped at 65-75 characters.
- **Do** use Roboto weights 400, 700, and 900 to build clear hierarchy through weight contrast alone when possible.
- **Do** respect the Single Display Rule: Shrikhand once per page.
- **Do** respect the Pixel Restraint Rule: Press Start 2P for the "WTS" wordmark and full business name only.
- **Do** use dark mode behind a user-controlled toggle. It is never the default experience.

### Don't:
- **Don't** use `box-shadow` on cards, buttons, or surfaces. The Flat-By-Default Rule prohibits it.
- **Don't** use the "Industrial Logger" aesthetic: no buzzsaws, no black/orange warning colors, no heavy machinery graphics.
- **Don't** use the "Cowboy Lopper" look: no photos of workers without PPE, no messy job sites, no loose truck loads.
- **Don't** use the "Silicon Valley Tech" look: no neon gradients, no glassmorphism, no dark mode as default, no sharp abstract shapes, no robotic corporate language.
- **Don't** use the "Elite Architect" look: no ultra-minimalist white space, no high-end luxury garden layouts, no aspirational pricing cues.
- **Don't** use the generic tradesman template: no stock photos of guys in hard hats, no corporate trust badges, no blue-and-white sanitized layouts.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards, list items, or review blocks.
- **Don't** use gradient text (`background-clip: text` combined with any gradient background).
- **Don't** use nested cards inside cards.
- **Don't** round button corners. Buttons are square.
- **Don't** use em dashes in copy. Use commas, colons, semicolons, or periods.
- **Don't** use identical card grids with icon + heading + text repeated three times — the current services section pattern. Vary card sizes or introduce asymmetry.
- **Don't** treat light mode as secondary. The brand lives in light mode; dark mode is an accessibility accommodation, not a design choice.
