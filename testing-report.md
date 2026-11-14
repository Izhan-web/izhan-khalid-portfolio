# Testing Report

## Looponics Task Verification Checklist

| Test Item | Specification / Requirement | Result | Fix / Mitigation |
|---|---|---|---|
| **Loads Without Errors** | Site loads cleanly via file protocol and local server. Assets resolve with HTTP 200. | Pass | Added `favicon.svg` to prevent browser 404s. Configured `vercel.json` with strict CSP. |
| **Navigation & CTA Links** | Header links (Home, About, Interests, Projects, Contact), CTAs ("View projects", "Get in touch"), and Back-to-Top scroll smoothly to valid section targets. | Pass | Verified all anchor targets exist in DOM. Corrected scroll-spy offset calculation to account for header height. |
| **Readability (Mobile & Desktop)** | High contrast across dark background (#131413), clear font hierarchy with Schibsted Grotesk and Geist Mono. | Pass | Guaranteed contrast on buttons and text; secondary text uses #C7C7B8 and muted labels use #919284. |
| **No Horizontal Scroll or Broken Images** | Zero horizontal overflow at all tested viewports down to 320px. Vector-only graphics (SVG) scale losslessly. | Pass | Set `overflow-x: hidden` on body, flexible grid templates, clamp-based padding, and `word-break: break-all` on mobile contact values. |
| **No Console Errors** | Zero runtime JavaScript exceptions, warnings, or CSP violations. | Pass | Wrapped DOM lookups in guards; eliminated inline scripts and inline styles to comply with strict CSP `style-src 'self'`. |
| **Contact Links Work** | Functional email mailto link and valid external social profiles opening in new tabs with security rel attributes. | Pass | Verified `mailto:izhanrao2@gmail.com`, LinkedIn URL, and GitHub URL with `target="_blank"` and `rel="noopener noreferrer"`. |

## Viewport Widths Tested

- **1440px (Desktop)**: Full 1120px container centered; two-column About layout; two-column Projects grid; dimmed SVG mosaic visible on right; full desktop navigation.
- **1024px (Small Desktop / Landscape Tablet)**: Proportional margins via clamp padding; clean alignment across interest rows and project cards.
- **768px (Tablet Portrait)**: Mobile hamburger drawer activates; About section seamlessly collapses to single column; Projects grid stacks vertically; mosaic opacity dims to 0.25 to prioritize reading contrast.
- **390px (Standard Mobile)**: Hero typography scales dynamically using `clamp(2.5rem, 6vw, 4.5rem)`; action buttons wrap naturally; contact values fit within view.
- **320px (Minimum Narrow Mobile)**: Zero horizontal scrolling; minimum touch targets preserved; contact row labels and values adapt without clipping.

## Issues Fixed

1. **Hover-Lag Bug**: The initial implementation permanently left transition classes (`reveal-init`, `reveal-visible`, `delay-1/2/3`) on animated elements, forcing an unwanted 600ms latency on hover states. Resolved by adding a `{ once: true }` event listener on `transitionend` inside the IntersectionObserver callback to remove all reveal classes as soon as the entrance transition finishes.
2. **Missing Favicon (Console 404)**: Browsers automatically requested `/favicon.ico` or `/favicon.svg`, triggering a 404 error in the console. Resolved by creating `favicon.svg` (rounded square in #131413 with monospace letters "IK" in olive #78834B) and linking it explicitly in the document head.
3. **Orange-Button Contrast**: Off-white text on burnt orange (#B9683F) failed WCAG AA contrast standards. Resolved by enforcing text color `#10110F` across all orange backgrounds and using olive `#78834B` as the primary action accent.
4. **Truncated LinkedIn Text**: The previous card design displayed the raw, lengthy LinkedIn URL (`www.linkedin.com/in/izhan-khalid-44b218324`), which overflowed and clipped on narrow mobile viewports. Resolved by rendering the human-readable text "Izhan Khalid" while preserving the full URL in the `href` attribute.
5. **Invalid `role="text"`**: The hero status badge previously included `role="text"`, which is non-standard and flagged by HTML validators and assistive technologies. Resolved by removing the invalid attribute and relying on semantic inline elements.
