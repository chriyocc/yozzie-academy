---
name: Neo-Academic Brutalism
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#bc000a'
  on-secondary: '#ffffff'
  secondary-container: '#e2241f'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#241a00'
  on-tertiary-container: '#a18000'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#930005'
  tertiary-fixed: '#ffe08b'
  tertiary-fixed-dim: '#f1c100'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#584400'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  h2:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h3:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0em
  body-lg:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 32px
  lg: 64px
  xl: 128px
  border-thick: 3px
  border-thin: 1px
---

## Brand & Style

This design system establishes a visual language that is unapologetically bold and structurally rigorous, reflecting the "Yozzie Academy" ethos of academic excellence met with youthful energy. The aesthetic is rooted in **Neo-Brutalism**, characterized by high-contrast interfaces, raw structural elements, and a rejection of traditional soft UI gradients. 

The brand voice is authoritative yet subversive. We utilize a "Structured Chaos" philosophy: perfectly aligned grids disrupted by playful, oversized mascot elements (the Gen Z raccoon). The target audience should feel they are entering a space that is intellectually serious but culturally relevant. 

**Visual Principles:**
- **Honest Materials:** No fake depth; if an element is on top, it uses a hard shadow or a thick border to prove it.
- **Aggressive Clarity:** Information is prioritized through massive scale shifts and stark color blocking.
- **Mascot Integration:** The raccoon mascot should appear as a "sticker" or a "glitch" in the margin, breaking the grid to add a layer of relatability and fun.

## Colors

The palette is built on a high-contrast monochrome foundation to maintain an academic and "printed matter" feel. 

- **Primary (Black):** Used for all structural borders, primary text, and heavy lifting.
- **Secondary (Red):** Reserved for urgent actions, critical highlights, and brand-specific "hot spots."
- **Tertiary (Gold):** Symbolizes achievement and premium academic status; used for progress indicators, badges, and accents.
- **The Grays:** Used sparingly for backgrounds and subtle "blueprint" grid lines to prevent visual fatigue.

All colors must be used at full saturation. No pastels or muted tones are permitted within this design system.

## Typography

Typography is the primary driver of the brand's personality. We pair two high-performance variable fonts to balance technical edge with educational accessibility.

- **Headlines (Space Grotesk):** Chosen for its eccentric, geometric terminals. It feels futuristic and precise. Headlines should be set with tight leading and negative letter spacing to create high-impact "blocks" of text.
- **Body (Lexend):** Designed specifically to improve reading proficiency. It provides a friendly, legible counterpoint to the aggressive headlines, ensuring the "Academy" aspect remains functional.
- **Styling:** Headliners should frequently use `text-transform: uppercase` and heavy weights. Important keywords can be highlighted with a Gold or Red background fill (the "highlighter" effect).

## Layout & Spacing

This design system utilizes a **Fixed Grid** approach that mimics a physical textbook or a technical manual. 

- **Grid:** A 12-column system with 0px gutter for sections requiring a "boxed" look, or 32px gutters for content-heavy layouts.
- **Rhythm:** Spacing follows a strict 4px baseline, but transitions between sections should be drastic (using the `lg` or `xl` tokens) to maintain a sense of modern scale.
- **Padding:** Containers should have generous internal padding (`md`) to offset the weight of the thick black borders.
- **Alignment:** Elements should either be perfectly aligned to the grid or intentionally "offset" by 4-8px to create a Neo-Brutalist shadow effect.

## Elevation & Depth

In this design system, depth is not simulated with light and shadow, but with **Hard Offsets and Layering**.

1.  **Level 0 (Floor):** The main background, usually pure white or a subtle grid pattern.
2.  **Level 1 (The Block):** Objects have a `border-thick` (3px) black outline. No shadow.
3.  **Level 2 (The Lift):** Objects have a `border-thick` outline and a solid black "shadow" offset 4px to 8px to the bottom-right.
4.  **Level 3 (The Pop):** Used for active states or modals. The solid shadow color switches to Red or Gold to indicate interaction.

Avoid all blurs, gradients, and transparencies. Depth is binary: an element is either on the surface or lifted via a hard-edge offset.

## Shapes

The shape language is defined by **Zero Radii**. 

All buttons, cards, input fields, and containers must have sharp 90-degree corners. This reinforces the Brutalist "academic" feel—precise, structured, and unyielding. 

The only exception to this rule is the mascot integration or decorative circular "stamps" used for certifications. All UI functional elements remain strictly rectangular.

## Components

### Buttons
Primary buttons are high-impact: Solid Black background, White Lexend Bold text, 0px border-radius, and a Gold hard-offset shadow that disappears when pressed (mimicking a physical click).

### Cards
Cards use a 3px black border. Headers within cards should be separated by a 3px horizontal rule. Use "Gold" for card headers in the "Achievement" or "Course" category.

### Input Fields
Inputs are stark white boxes with a 3px black border. On focus, the border color remains black, but a 4px Gold solid shadow appears behind the field.

### Chips & Tags
Tags are small, rectangular blocks of solid color (Red/Gold/Black) with White or Black text. They do not have shadows, keeping them "flat" against the surface.

### The Raccoon (Mascot)
The raccoon should be used as a directional or celebratory element. Position it peeking over the edge of cards or "holding" the corner of a primary call-to-action button. Use a "sticker-cut" white outline around the mascot to make it pop from the monochrome background.

### Lists
Lists should use custom "X" markers or solid squares instead of standard bullets, reflecting the sharp-edge geometry of the brand.