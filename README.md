# Izhan Khalid — Technical Mono Portfolio

A modern, minimal, and responsive single-page personal portfolio website built with semantic HTML, CSS, and vanilla JavaScript.

**Live URL:** [https://izhan-khalid-portfolio.vercel.app/](https://izhan-khalid-portfolio.vercel.app/)

## Features

- **Technical Mono Visual Identity**: Clean, dark aesthetic (#131413 background, #1B1C1B surface, #46483C hairlines) using Schibsted Grotesk for headings/body and Geist Mono for interface labels and tags.
- **Hero Reveal & Interactions**: JS-driven masked word entrance for the main headline, pulsing status indicator, and dynamic rotating interest text line ("Currently exploring: [word]").
- **Top Scroll Progress Bar**: A 2px orange indicator tracking viewport scroll depth.
- **Two-Column About Section**: Balanced layout highlighting academic focus at COMSATS University Islamabad and core languages (Python, Java, C++, PHP).
- **Five Hairline Interest Rows**: Structured exploration areas (Networking, Cybersecurity, Artificial Intelligence, Software Development, Web Development) with hover shifts and accent highlights.
- **Spotlight Project Cards**: Interactive cards for OpenSource Match and Password Analyzer with real GitHub links and pointermove radial lighting.
- **Accessible Contact Rows**: Full-width interactive rows for Email, LinkedIn, and GitHub with directional arrow transitions.
- **Accessibility & Motion First**: Visible keyboard focus rings (light olive #C1CD8D), accessible landmarks, and complete static fallbacks under `prefers-reduced-motion: reduce`.
- **Strict Security**: Preconfigured `vercel.json` with strict Content Security Policy, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy headers.

## Tools Used

- HTML5 (Semantic & Accessible)
- CSS3 (Custom Properties, Flexbox, CSS Grid)
- Vanilla JavaScript (ES6+, IntersectionObserver)
- Git & GitHub
- Vercel (Edge Deployment & Security Headers)

## Folder Structure

```text
Portfolio/
├── docs/                      # Original requirements and superseded design documents
│   ├── AGENTS.md
│   ├── design-system.md
│   ├── DESIGN.md
│   ├── implementation-plan.md
│   └── project-brief.md
├── screenshots/               # Visual captures across breakpoints
├── favicon.svg                # Monospace "IK" vector favicon
├── index.html                 # Semantic single-page structure
├── project-plan.md            # Problem statement, audience, goals, and technical rationale
├── prompts.md                 # Prompts log, iterations, and lessons learned
├── README.md                  # Project overview and instructions
├── reflection.md              # Personal reflection on development and AI collaboration
├── script.js                  # Navigation, scroll-spy, and interaction scripts
├── style.css                  # Technical Mono design tokens and responsive styles
├── testing-report.md          # Multi-viewport testing matrix and bug fixes
└── vercel.json                # Production security headers and CSP config
```

## Run Locally

You can preview the site locally in any modern browser without installing any package managers or dependencies:

1. **Directly in Browser**:
   Open `index.html` directly in your web browser.

2. **Using a Local Server**:
   Start a simple HTTP server using Python:
   ```bash
   python -m http.server 8000
   ```
   Then visit [http://localhost:8000](http://localhost:8000) in your browser.

---

Created for the **Looponics — Modern Web Development with AI** student practical challenge.
