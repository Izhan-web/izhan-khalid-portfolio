# Project Plan — Personal Portfolio

## Idea
A clean, minimal, single-page personal portfolio website for my Computer Science journey. The site serves as a central hub presenting my academic focus, core technical interests, published projects, and direct contact avenues.

## Problem
Recruiters, internship coordinators, and student peers need a quick, trustworthy, and distraction-free view of who I am and what I have built. Typical student portfolio templates are often bloated with fake skill percentages, broken demo links, and unnecessary sections. This site solves that by presenting verified facts, working links, and clear technical context in a few seconds of scanning.

## Audience
- Technical recruiters and engineering hiring managers evaluating candidates for software internships.
- Academic advisors and internship coordinators at COMSATS University Islamabad.
- Fellow Computer Science students and open-source collaborators.

## Measurable Goals
1. **Zero Console & Network Errors**: Clean page load with no 404s, script exceptions, or Content Security Policy violations.
2. **100% Mobile & Desktop Responsiveness**: Flawless layout without horizontal overflow down to 320px viewport width.
3. **Sub-Second Perceived Performance**: Lightweight static architecture with fast Google Font loading and minimal asset weight.
4. **Complete Accessibility**: Visible keyboard focus rings, proper landmark structure, and strict adherence to `prefers-reduced-motion`.

## Sections & Features
- **Sticky Header**: Compact wordmark `izhan.khalid`, responsive navigation (Home, About, Interests, Projects, Contact), and mobile drawer menu. Becomes slightly more opaque with a hairline border past 40px scroll.
- **Top Scroll Progress Bar**: A 2px orange progress bar fixed to the top showing page scroll percentage.
- **Hero**: Left-aligned headline with a masked geometric mosaic background on the right. Features a load-time word reveal for the heading, a pulsing status badge, a cycling "Currently exploring" mono text line, and primary/secondary CTA buttons.
- **About ("01 / ABOUT")**: Two-column layout pairing a mono label and heading on the left with concise biographical paragraphs on the right detailing my studies at COMSATS and tech stack (Python, Java, C++, PHP).
- **Interests ("02 / INTERESTS")**: Five hairline-separated rows (Networking, Cybersecurity, Artificial Intelligence, Software Development, Web Development) with hover shifts and accent transitions.
- **Projects ("03 / PROJECTS")**: Flat surface cards for OpenSource Match and Password Analyzer with tags, descriptions, GitHub links, and pointermove spotlight glows.
- **Contact ("04 / CONTACT")**: Three full-width clickable rows for Email, LinkedIn, and GitHub with directional hover arrows.
- **Footer**: Monospace identity text, copyright, and quick links including back-to-top.

## Design Direction: Technical Mono
The visual aesthetic balances contemporary technical clarity with an editorial monospace influence.
- **Palette**:
  - Canvas Background: `#131413`
  - Surface: `#1B1C1B`
  - Raised Surface: `#1F201F`
  - Hairline Border: `#46483C`
  - Primary Text: `#E4E2E0`
  - Secondary Text: `#C7C7B8`
  - Muted Text & Borders: `#919284`
  - Primary Olive Accent: `#78834B`
  - Light Olive Highlight: `#C1CD8D`
  - Burnt Orange Detail: `#B9683F` (status dot, progress bar, hover underlines)
- **Typography Choice**:
  - **Headings & Body**: Schibsted Grotesk (400, 500, 600)
  - **Interface, Nav, Meta, Tags**: Geist Mono (400, 500)
  - *Rationale*: While Inter and Geist sans are ubiquitous and can feel like a generic SaaS template, Schibsted Grotesk provides a distinct European neo-grotesque tone with crisp ink-traps and high readability. Pairing it with Geist Mono gives the site an authentic engineering feel while remaining structured and readable.

## Tools Used
- Plain HTML5, CSS3, Vanilla JavaScript (ES6+)
- Git & GitHub for version control and source hosting
- Vercel for continuous deployment and edge HTTP headers
- AI assistants (Gemini / Antigravity) for code review, refactoring, and accessibility auditing
