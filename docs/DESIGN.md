---
name: Aero Nocturne
colors:
  surface: '#131413'
  surface-dim: '#131413'
  surface-bright: '#393938'
  surface-container-lowest: '#0d0e0d'
  surface-container-low: '#1b1c1b'
  surface-container: '#1f201f'
  surface-container-high: '#292a29'
  surface-container-highest: '#343534'
  on-surface: '#e4e2e0'
  on-surface-variant: '#c7c7b8'
  inverse-surface: '#e4e2e0'
  inverse-on-surface: '#30312f'
  outline: '#919284'
  outline-variant: '#46483c'
  surface-tint: '#c1cd8d'
  primary: '#c1cd8d'
  on-primary: '#2b3404'
  primary-container: '#8b965c'
  on-primary-container: '#252d00'
  inverse-primary: '#59632f'
  secondary: '#c6c7be'
  on-secondary: '#2f312b'
  secondary-container: '#454841'
  on-secondary-container: '#b4b6ad'
  tertiary: '#c6c7bf'
  on-tertiary: '#2f312c'
  tertiary-container: '#90918a'
  on-tertiary-container: '#282a25'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde9a7'
  primary-fixed-dim: '#c1cd8d'
  on-primary-fixed: '#181e00'
  on-primary-fixed-variant: '#414b19'
  secondary-fixed: '#e2e3d9'
  secondary-fixed-dim: '#c6c7be'
  on-secondary-fixed: '#1a1c16'
  on-secondary-fixed-variant: '#454841'
  tertiary-fixed: '#e3e3db'
  tertiary-fixed-dim: '#c6c7bf'
  on-tertiary-fixed: '#1a1c17'
  on-tertiary-fixed-variant: '#464742'
  background: '#131413'
  on-background: '#e4e2e0'
  surface-variant: '#343534'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '500'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Geist
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system synthesizes hyper-clean contemporary editorial design with the luminous tactile nostalgia of late-2000s desktop operating system aesthetics—specifically referencing Windows 7 Aero Glass and Windows Media Player 12's obsidian chrome chrome surfaces. 

The aesthetic is tailored for creative directors, architectural technologists, and high-craft digital artisans. The emotional response evokes calculated precision, acoustic quietude, and tactile luxury: dark, heavy, and serene, punctured by precision-milled hairline highlights and subtle refraction.

### Aesthetic Principles
- **Restrained Aero Glassmorphism:** Translucent charcoal plates floating over muted background layers with ultra-fine light catchers, avoiding garish skeuomorphism in favor of disciplined optical physics.
- **Architectural Surface Discipline:** No extraneous floating cards; structural hierarchy is maintained through precise tonal elevation tiers and linear hairline separation.
- **Subdued Chromatic Calibration:** An earthbound, organic undertone rooted in raw olive-grey, slate, and deep obsidian charcoal. Absolutely devoid of synthetic neon, blues, purples, or warm oranges.

## Colors

The color architecture is built strictly upon low-saturation mineral tones, charcoal soot, and an authoritative, vegetal olive accent.

### Color Tokens & Roles
- **Base Canvas (`#101110`):** Deep black-charcoal canvas establishing an absolute, non-vibrant baseline.
- **Dark Surface (`#191B18`):** Deep foundation for recessed panels, low-priority grouping containers, and page footers.
- **Secondary Surface (`#22241F`):** Standard container surface for raised cards, floating menus, and media frames.
- **Hairlines & Dividers (`#343630`):** Precise 1px structural separators providing crisp architectural definition without harsh contrast.
- **Primary Text (`#E8E9E3`):** High-legibility crisp off-white with an imperceptible warm-mineral tint to prevent optical fatigue.
- **Secondary Text (`#A5A79E`):** Balanced, low-luminance neutral for secondary metadata, captions, and structural labels.
- **Accent (`#78834B`):** Earthy, refined olive green reserved strictly for active focal states, key action indicators, and critical timestamps/tags.

## Typography

Typography pairs the structural, monolithic authority of **Geist** for headlines and interface metadata with the frictionless utilitarian flow of **Inter** for long-form narrative.

- **Geist (Display, Headlines, Labels):** Rendered with tight negative tracking on display sizes to evoke industrial, engineered restraint. Uppercase labels employ wide character tracking (`0.06em` to `0.08em`) to mirror archival indexes and hardware faceplates.
- **Inter (Body):** Optimized for continuous readability against obsidian surfaces, maintaining generous line-heights to allow atmospheric breathing room.

## Layout & Spacing

The layout model is governed by an asymmetric 12-column fluid grid locked within an architectural maximum width of 1440px.

### Responsive Breakpoints & Fluidity
- **Desktop (1024px+):** 12 columns, 24px (`1.5rem`) gutters, 48px (`3rem`) margins. Allows wide panoramic project showcases and multi-tiered side metadata ribbons.
- **Tablet (768px – 1023px):** 8 columns, 20px gutters, 32px margins. Secondary project details collapse underneath main preview viewports.
- **Mobile (< 768px):** 4 columns, 16px (`1rem`) gutters, 20px (`1.25rem`) margins. Complete vertical stack with single-column edge-to-edge media containment.

Component internal padding relies strictly on the `space-*` scale, anchoring content with structural symmetry.

## Elevation & Depth

Visual hierarchy is constructed through translucent layered planes, physical reflection, and directional surface luminescence inspired by Windows 7 Aero glass and vintage desktop media players.

### Aero Glass Surfaces
Containers utilize low-opacity dark tinting (`rgba(25, 27, 24, 0.72)`) backed by a high-intensity backdrop blur (`24px` to `32px`) and subtle saturation suppression (`backdrop-filter: blur(28px) saturate(110%)`).

### The Top-Edge Specular Sheen (Aero Highlight)
Every elevated container features a dual-layer inner highlight:
- A linear gradient overlay running vertically from `rgba(232, 233, 227, 0.12)` at `0%` to `rgba(232, 233, 227, 0.0)` at `35%`, replicating the iconic light-refracting top bevel of Aero glass headers.
- A delicate 1px hairline boundary: `border-top: 1px solid rgba(232, 233, 227, 0.18)` transitioning on the sides and bottom to `1px solid rgba(52, 54, 48, 0.65)`.

### Ambient Shadow Physics
No harsh drop shadows are permitted. Depth is conveyed strictly through ambient occlusion:
- **Floating Glass Panels:** `0 16px 40px -8px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(52, 54, 48, 0.4)`.
- **Active / Pressed Surfaces:** Shadows collapse inwards, replaced with an internal inset shadow (`inset 0 1px 3px rgba(0, 0, 0, 0.7)`).

## Shapes

The design system adopts a calibrated **Soft (`1`)** shape language.

- **Standard Elements (Buttons, Inputs, Badges):** `4px` (`0.25rem`) radius.
- **Containers & Glass Panels (`rounded-lg`):** `8px` (`0.5rem`) radius.
- **Featured Hero Media & Large Modals (`rounded-xl`):** `12px` (`0.75rem`) radius.

This controlled curvature mirrors precision-machined dark alloy panels, avoiding bubbly circular forms while retaining just enough subtle softness to permit light wraps on border corners.

## Components

### Buttons
- **Primary:** Background in muted olive `#78834B` with an upper specular highlight (`linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0.15) 100%)`). Text `#E8E9E3`, semi-bold label typography. Subtle top highlight border `rgba(255, 255, 255, 0.25)`.
- **Secondary (Aero Glass):** Translucent background `rgba(34, 36, 31, 0.6)`, backdrop blur `12px`, top hairline sheen `rgba(232, 233, 227, 0.15)`, text `#E8E9E3`. On hover, specular highlight intensifies to `rgba(232, 233, 227, 0.25)`.
- **Ghost:** Transparent background, text `#A5A79E`, hovering shifts color to `#E8E9E3` with hairline underline in `#78834B`.

### Cards & Project Showcases
- Layered Aero glass treatment: background `rgba(25, 27, 24, 0.75)` with top sheen reflection gradient.
- Framed with 1px border (`#343630`), with the top border elevated to `#4A4D44`.
- Imagery enclosed within cards features an ultra-fine 1px inset shade to embed media seamlessly into the dark chassis.

### Input Fields
- Recessed, chiseled appearance. Background `#101110` with subtle inner shadow `inset 0 1px 2px rgba(0,0,0,0.8)`.
- Border `#343630`, transitioning to `#78834B` on active focus accompanied by a quiet outer diffusion ring (`0 0 0 2px rgba(120, 131, 75, 0.2)`).
- Placeholder text in `#A5A79E` at 50% opacity.

### Chips & Metadata Badges
- Compact rectangular profiles with uppercase `label-sm` typography.
- Background `rgba(34, 36, 31, 0.85)`, border `#343630`.
- Category tags use an embedded 4px circular LED-style pip tinted in `#78834B`.

### Checkboxes & Radio Buttons
- Precision 14px boxes. Unchecked: `#101110` inner fill with `#343630` border.
- Checked: Filled with `#78834B`, displaying a crisp off-white (`#E8E9E3`) hairline checkmark or concentric dot.

### Scrubber & Media Scrub Bars (Portfolio Interactive Elements)
- Inspired by Windows Media Player 12 track bars: 3px channel in `#191B18` with an interior 1px track line in `#343630`.
- Filled progress in `#78834B` capped with a rectangular thumb featuring a horizontal micro-sheen line.