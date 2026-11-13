# Design System — Aero Nocturne

This file translates the supplied `DESIGN.md` reference into practical implementation guidance for this landing page.

## Visual direction
Contemporary editorial minimalism with a subtle late-2000s Windows 7 Aero Glass / Windows Media Player 12 influence.

The website should feel:
- Clean, quiet, precise, and professional.
- Dark and restrained, with an organic olive accent.
- Modern and readable rather than futuristic or flashy.
- Portfolio-first; nostalgia is only a subtle material/detail influence.

Do not recreate a media player UI. Do not use neon, blue, cyan, purple, pink, orange, rainbow gradients, or excessive glass panels.

## Color palette

The supplied reference contains two olive values: the token list defines `primary` as `#C1CD8D`, while the narrative color-role section names `#78834B` as the accent. Preserve both deliberately:
- Use `#78834B` as the main UI accent for active states, small indicators, and primary interactive emphasis.
- Use `#C1CD8D` sparingly for subtle accent highlights where a lighter olive is needed.
- Do not replace the palette with a different green.

| Role | Color |
|---|---|
| Page background | `#131413` |
| Deep surface | `#0D0E0D` |
| Dark surface | `#1B1C1B` |
| Raised surface | `#1F201F` |
| Elevated surface | `#292A29` |
| Highest surface | `#343534` |
| Main text | `#E4E2E0` |
| Secondary text | `#C7C7B8` |
| Muted outline | `#919284` |
| Hairline / outline variant | `#46483C` |
| Main olive accent | `#78834B` |
| Light olive highlight | `#C1CD8D` |

Use the colors with restraint. Most of the page should remain charcoal and off-white; olive should be a small accent, not a large saturated block.

## Typography

Use the professional typefaces specified by the supplied design reference:
- **Geist** for headings, navigation, labels, and interface metadata.
- **Inter** for paragraphs and other reading text.

These are established, clean sans-serif typefaces. Do not use novelty, sci-fi, futuristic, handwritten, or “AI-looking” display fonts.

Recommended scale:
| Use | Font | Size | Weight | Line height |
|---|---|---:|---:|---:|
| Desktop hero heading | Geist | 56px | 500 | 64px |
| Mobile hero heading | Geist | 36px | 500 | 44px |
| Section heading | Geist | 32px | 500 | 40px |
| Smaller heading | Geist | 24px | 500 | 32px |
| Body copy | Inter | 16px | 400 | 26px |
| Secondary body | Inter | 14px | 400 | 22px |
| Small metadata | Inter | 12px | 400 | 18px |
| Navigation / labels | Geist | 13px | 500 | 16px |

Use modest negative letter spacing for large headings. Keep body text comfortable to read; do not make essential text tiny.

Load Geist and Inter from a reliable font source or use suitable local/system fallbacks. Include sensible fallbacks such as `Arial, sans-serif`. Do not rely on an unusual font.

## Layout and spacing
- Use a centered content container with a maximum width around 1200–1280px.
- Desktop side margins: approximately 48px.
- Tablet side margins: approximately 32px.
- Mobile side margins: approximately 20px.
- Desktop layout may use a 12-column grid; do not force complex grid behavior where a simple flex or grid layout is clearer.
- Use generous but purposeful whitespace.
- Keep section spacing consistent and avoid making the page unnecessarily tall.
- On mobile, stack content naturally in one column and prevent horizontal scrolling.

## Surfaces, borders, and depth
- Prefer flat charcoal surfaces and subtle tonal separation.
- Use hairline borders around elements only when they improve hierarchy.
- If a glass surface is used, keep it restrained: dark translucent charcoal, modest blur, and a fine top-edge highlight.
- Avoid putting every item in a card. Do not use floating cards without a clear content purpose.
- Avoid harsh shadows. Use subtle ambient depth only where necessary.
- Use restrained corner radii: 4px for small controls, 8px for panels, and up to 12px for a prominent visual surface.

## Hero visual
The hero must remain primarily text-led. If the layout needs a visual counterweight, create a simple abstract mosaic using a small number of geometric tiles in charcoal, grey, and muted olive. Keep it monochromatic, quiet, and integrated into the composition.

Do not use stock images, a profile photo, random floating widgets, a fake terminal, or decorative code.

## Interaction and motion
- Use subtle hover and focus transitions.
- Links should have clear hover and keyboard-focus states.
- Use olive for active/focus emphasis.
- Keep animation short and understated.
- Disable or reduce non-essential motion when `prefers-reduced-motion: reduce` is active.
- No cursor-following effects, scroll hijacking, or excessive parallax.

## Accessibility
- Maintain readable contrast.
- Use semantic headings in a logical order.
- Ensure links and controls are keyboard accessible.
- Never communicate state through color alone.
