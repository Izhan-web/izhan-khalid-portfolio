# Prompts Log

## Entry 1: Original Portfolio Brief & Setup

### Prompt Text
"You are building a small, polished personal portfolio landing page for a Computer Science student. Create a clean, interactive, minimal, professional, and elegant single-page website. Keep the implementation straightforward and easy for a beginner to understand and maintain. Scope: Header/navigation, hero section, short introduction/about, compact interests list, simple contact area, minimal footer. No projects section, testimonials, skill percentage bars, pricing, or placeholder text. Follow design-system.md for color palette and Aero-inspired surface guidance."

### What It Produced
- An initial three-file project (`index.html`, `style.css`, `script.js`) featuring an obsidian black theme, aero-inspired glassmorphism panels, an atmospheric SVG mosaic with burgundy and deep olive tones, and three interest tiles.
- Basic navigation toggle, scroll-spy mechanism, and intersection observer scroll reveals.

### What Had to Be Fixed or Learned
- **Scope Expansion**: I needed to showcase my two real GitHub projects (OpenSource Match and Password Analyzer) and provide my verified LinkedIn and GitHub profiles.
- **Hover Lag**: The `.reveal-init` and `.reveal-visible` CSS transition classes remained permanently attached to animated elements, introducing a 600ms latency on interactive hover transitions.
- **Aesthetic Direction**: The Aero glassmorphism aesthetic felt overly decorative with heavy box shadows and burgundy tints. Moving to a flat "Technical Mono" direction with Schibsted Grotesk and Geist Mono gave a much cleaner engineering look.
- **Accessibility Violations**: Found an invalid `role="text"` on the hero status badge and poor contrast with white text on burnt orange backgrounds.

---

## Entry 2: Technical Mono Overhaul & Refinement

### Prompt Text
"Improve the existing one-page portfolio for Izhan Khalid (Computer Science student) in index.html, style.css and script.js. Plain HTML, CSS and vanilla JavaScript only. Move documentation into docs/, create favicon.svg and vercel.json with strict CSP. Fix hover lag by removing reveal classes on transitionend. Remove role="text" from hero badge. Set hero height to 100svh with 100vh fallback. Ensure text on orange backgrounds is #10110F. Add theme-color, Open Graph, and canonical metadata. Shift design to Technical Mono with Schibsted Grotesk and Geist Mono. Layout: 2-column about, 5 hairline interest rows, 2 flat project cards with pointer spotlight, 3 full-width contact rows. Animations: hero heading word reveal mask, cycling mono text line, top scroll progress bar, CSS-only mosaic drift, and header is-scrolled past 40px."

### What It Produced
- Fully refactored `index.html`, `style.css`, and `script.js` aligning strictly with the Technical Mono design tokens.
- Clean header with lowercase `izhan.khalid` wordmark and backdrop-filtered sticky blur.
- Hero section with JS word split animation, pulsing status indicator, and dynamic rotating interest text.
- Two-column About section and five hairline-separated Interest rows with rightward hover shifts.
- Project cards equipped with radial mouse spotlight glows and accurate project descriptions.
- Three full-width contact rows with external link security and arrow hover micro-interactions.
- `favicon.svg` and `vercel.json` with strict Content Security Policy, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy.
- Documentation organized into `docs/` and project reports (`project-plan.md`, `prompts.md`, `testing-report.md`, `reflection.md`, `README.md`).

### What Had to Be Fixed or Learned
- **CSP Compliance**: Having a strict `style-src 'self' https://fonts.googleapis.com` required completely eliminating all inline `style="..."` attributes from HTML templates and managing all styling through class mutations and CSS variables.
- **Event Cleanup**: Removing the reveal animation classes via a `{ once: true }` listener on `transitionend` completely resolved the sluggish hover latency.
- **Reduced Motion Support**: Disabling JS rotation intervals and suppressing CSS transitions/transforms under `prefers-reduced-motion: reduce` ensured the site remains comfortable and accessible for all users.
