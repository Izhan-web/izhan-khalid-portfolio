# Implementation Plan

## Keep the stack simple
Use:
- `index.html`
- `style.css`
- `script.js`

Use plain HTML, CSS, and vanilla JavaScript. Do not add a framework, backend, database, authentication, or build tooling for this small landing page.

## Build sequence

### Step 1 — Page structure
Create semantic sections for:
- Header and navigation
- Home / hero
- About
- Interests
- Contact
- Footer

Use real section IDs so navigation links work.

### Step 2 — Visual foundation
Implement the colors, typography, spacing, borders, and responsive rules from `design-system.md` before adding decorative details.

### Step 3 — Hero and content
Build the text-led hero first. Add the concise About copy and compact Interests list. Keep the content focused and avoid adding sections.

### Step 4 — Interaction
Add only purposeful interactions:
- Smooth in-page navigation, while respecting reduced-motion preferences.
- Subtle link hover and focus states.
- A mobile navigation toggle only if the chosen header layout needs one; it must open and close correctly and be keyboard accessible.

Do not add decorative controls or buttons that do nothing.

### Step 5 — Responsive behavior
Check at approximately:
- 1440px desktop
- 1024px laptop/tablet landscape
- 768px tablet
- 390px mobile
- 320px narrow mobile

Adjust typography, spacing, navigation, and hero layout at smaller widths.

### Step 6 — Quality checks
- All navigation links reach the correct section.
- All external links point to real destinations.
- No placeholder text or dead links.
- No horizontal overflow.
- No console errors.
- Keyboard focus is visible.
- Text remains readable at mobile sizes.
- Reduced-motion preference is respected.

## Completion report
When finished, provide:
1. A short summary of what was built.
2. The files created.
3. How to run the website locally.
4. Any real contact details still needed from the user, without adding placeholders to the page.
