Superseded: the final site uses a Technical Mono direction and includes a Projects section (see project-plan.md). This file is kept as the original brief only.

# Agent Instructions

You are building a small, polished personal portfolio landing page for a Computer Science student.

## Core objective
Create a clean, interactive, minimal, professional, and elegant single-page website. Keep the implementation straightforward and easy for a beginner to understand and maintain.

## Scope — follow strictly
The page should contain only:
1. A compact header/navigation.
2. A strong hero section.
3. A short introduction/about area, which may sit directly below the hero.
4. A compact interests line or list.
5. A simple contact area using only real, supplied contact destinations.
6. A minimal footer.

Do not add a projects section, project cards, testimonials, statistics, skill percentage bars, services, pricing, blog, timeline, résumé download, newsletter, FAQ, or any other extra section.

Do not add placeholder text, fake contact details, fake social links, dummy buttons, non-functional controls, or invented achievements. If a real email address or social URL has not been provided, do not invent one or display a dead link. The known GitHub profile may be linked as https://github.com/Izhan-web.

## Content
- Name: Izhan
- Role: Computer Science Student
- Hero heading: Hi, I'm Izhan.
- Hero supporting line: Exploring technology. Building solutions.
- Short introduction: I'm a Computer Science student interested in networking, cybersecurity, artificial intelligence, and software development. I enjoy learning new technologies and applying my knowledge through practical work.
- Education: Bachelor's degree in Computer Science at COMSATS University Islamabad.
- Areas of interest: Networking, Cybersecurity, Artificial Intelligence, Software Development, and Web Development.

Keep the writing natural, concise, and factual. Do not invent experience, projects, awards, or professional claims.

## Design requirements
Use `design-system.md` as the visual source of truth. Follow its color palette, typography, spacing, shape, and Aero-inspired surface guidance.

The result must feel like a contemporary professional portfolio first. Use the Windows 7 Aero / Windows Media Player 12 influence subtly through dark translucent surfaces, fine highlights, restrained reflections, and precise borders. Do not recreate a media player interface.

## Implementation requirements
- Use semantic HTML and accessible landmarks.
- Use plain HTML, CSS, and vanilla JavaScript unless the user explicitly asks for another stack.
- Keep files and code structure simple; avoid unnecessary dependencies and frameworks.
- Make the layout responsive across desktop, tablet, and mobile.
- Navigation links must scroll to real sections and work on mobile.
- Any visible interactive element must have a real purpose and working behavior.
- Provide visible keyboard focus states and sufficient text contrast.
- Respect `prefers-reduced-motion`.
- Avoid excessive animation, parallax, cursor effects, and scroll hijacking.
- Do not use stock images, profile photos, fake terminal windows, or decorative code snippets.
- Do not add an image merely to fill empty space. Use the restrained abstract olive/charcoal mosaic visual described in `design-system.md` if a visual treatment is needed.
- Do not use emoji as interface decoration.
- Do not add backend, database, authentication, or forms unless explicitly requested.

## Before finishing
1. Check every navigation and contact link.
2. Test at desktop and mobile widths.
3. Check for horizontal overflow and broken layout.
4. Check keyboard navigation and focus visibility.
5. Remove unused CSS, dead controls, placeholder content, and console errors.
6. Summarize the files created and how to run the site.
