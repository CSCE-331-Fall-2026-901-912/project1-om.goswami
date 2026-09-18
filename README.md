# Om Goswami — Personal Portfolio

Personal portfolio website for **Project 1** (CSCE web design/frontend course), built as static HTML, CSS, and vanilla JavaScript — no frameworks, libraries, or templates.

## Submission links

| | |
|---|---|
| **Landing page** | https://people.tamu.edu/~om.goswami |
| **Git repository** | https://github.com/CSCE-331-Fall-2026-901-912/project1-om.goswami |

## Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Introduction, current role, and links into the rest of the site |
| Portfolio | `portfolio.html` | Selected software projects, presented as engineering case studies |
| Qualifications | `qualifications.html` | Embedded résumé (PDF), a technical skill inventory, and CS interests |
| Activities | `activities.html` | Teaching, student organizations, and community leadership |
| Experience (sandbox) | `sandbox.html` | **Course-required GenAI page.** Three roles shown as a build → test → deploy pipeline |

All five pages share the same top navigation and are fully interlinked.

## Style 1 ↔ Style 2

Every required page except the sandbox page links **both** stylesheets in its `<head>`:

```html
<link rel="stylesheet" href="style1.css" id="style1-sheet">
<link rel="stylesheet" href="style2.css" id="style2-sheet" disabled>
```

- **Style 1 — "Field Notes":** light, editorial, top masthead navigation, serif display type.
- **Style 2 — "Runtime":** dark, cinematic, fixed sidebar navigation, mono/grotesk type.

Both stylesheets style the *same* HTML (CSS Zen Garden approach — no page has different markup per style). The toggle in the top navigation flips each page's two `<link>` elements' `disabled` property, so the transition is instant and never re-downloads a stylesheet. The chosen style is saved to `localStorage` and restored (before first paint, via `assets/style-init.js`) on every page, so it persists across navigation and reloads without a flash of the wrong style.

The sandbox page (`sandbox.html`) intentionally links neither stylesheet. Per the assignment, it's exempt from the two-style requirement and is styled with its own inline `<style>` block in the page itself, rather than from an external CSS file, so the page that's flagged as GenAI-assisted content also *looks* distinct from the rest of the site.

## The Experience / sandbox page

`sandbox.html` is the course-required page whose content was generated with AI assistance (disclosed directly on the page). Rather than a generic timeline, it's framed as a **CI/CD pipeline** — `build → test → deploy` — because that's a real shape from the author's own work, and it maps cleanly onto the three roles:

1. **Build** — TRAIN AI Fellowship (shipped, complete)
2. **Test** — Texas A&M Teaching Assistant (ongoing)
3. **Deploy** — Visa Software Engineering Intern (live now, the current role)

A thin connecting line runs behind the three stages, each stage reveals as it scrolls into view (`assets/pipeline-reveal.js`, via `IntersectionObserver`, with a fully-visible no-JS/`prefers-reduced-motion` fallback), and status color (shipped / ongoing / live) gives the current role real visual weight instead of burying it at the bottom of a plain list.

## Tech stack

- Semantic HTML5
- Hand-written CSS (custom properties for tokens, CSS Grid/Flexbox, no preprocessor)
- Vanilla JavaScript (style/nav toggle, scroll-based header state, scroll-reveal) — no libraries
- Google Fonts (Archivo, Spectral) loaded via `<link>`, not bundled — the only external resource the site depends on
- Résumé embedded via a Google Drive PDF preview `<iframe>`

## Project structure

```
index.html            Home
portfolio.html         Portfolio
qualifications.html    Qualifications
activities.html        Activities
sandbox.html           Experience (GenAI sandbox, inline <style>, no toggle)
style1.css              "Field Notes" — light/editorial (1 of 2 required stylesheets)
style2.css              "Runtime" — dark/cinematic (2 of 2 required stylesheets)
assets/
  style-init.js         Pre-paint style restore (blocking, no FOUC)
  site.js                Style toggle, mobile nav, header scroll state
  pipeline-reveal.js      Scroll-reveal for the sandbox pipeline
Goswami_Om_Resume.pdf   Résumé, also embedded on the Qualifications page
photo.jpg, mandir.jpg   Personal photos used on Home / Activities
```

Per the assignment, there are exactly two CSS files site-wide (`style1.css`, `style2.css`); the sandbox page's CSS lives inline in `sandbox.html` instead of a third external file.

## External links list

At least 5 external links relevant to the author's work, each on a different second-level domain, placed organically throughout the site (not collected into one links page):

- **https://www.linkedin.com/in/ogoswami** — LinkedIn profile. Located in the social icons in the Home page (`index.html`) hero.
- **https://github.com/omgoswami24** — GitHub profile. Located in the social icons in the Home page (`index.html`) hero, and as the project source-code link on each entry of the Portfolio page (`portfolio.html`).
- **https://usa.visa.com** — current employer. Located in the Home page (`index.html`) introduction and in the "CS Interests" section of the Qualifications page (`qualifications.html`).
- **https://www.baps.org** — nonprofit organization. Located in the "Learn More" link on the BAPS entry of the Activities page (`activities.html`).
- **https://cse.tamu.edu** — Texas A&M Department of Computer Science and Engineering (linked from the "AI in Business" minor mention). Located in the "CS Interests" section of the Qualifications page (`qualifications.html`).
- **https://omgoswami-om25.vercel.app** — live deployment of the Oculon project. Located in the "Live Demo" link on the Oculon entry of the Portfolio page (`portfolio.html`).

## Peer review feedback

> I like the idea of a timeline to connect your experiences to each other, it seems like a very helpful thing for a professional sort of website. One thing I would suggest is to indicate more complexity in your AI generated page, like some more advanced scrolling.
>
> I like that your page complements your portfolio with milestones, and how it being in a timeline demonstrates growth (assuming chronological order). One suggestion would be to add a visual element, such as in the background, to make the page more appealing.

**How it was addressed:** the sandbox page's pipeline now reveals each stage on scroll (`IntersectionObserver`-driven, staggered, with a safe fully-visible fallback for no-JS/reduced-motion visitors) instead of appearing all at once, and a connecting line now runs behind the three stages as a background visual tying them together, rather than the plain flat list Andrew reviewed.

## AI prompt history

Full history of the author's text prompts to Claude (Claude Code) specifically for creating the final version of the sandbox page (`sandbox.html`), in order. Prompts covering the rest of the site are omitted; where a prompt covered multiple pages, only the sandbox-relevant portion is quoted.

- "The Experience page is my required AI-generated page for a university assignment. IT MUST REMAIN A DISTINCT PAGE. Do not remove it. Do not merge it into another page. Do not rename it into something unrecognizable. Do not remove any disclosure/course-required information associated with it. You may dramatically improve its visual presentation. It should actually become one of the most visually interesting pages of the website. The experience timeline/milestones can be redesigned creatively, but the underlying content and requirement must remain intact. ... This is the AI-generated required page. Treat this as an opportunity for excellent visual storytelling. Instead of generic cards, explore an elegant timeline or career-path composition. The progression between experiences should visually communicate growth. Dates should be prominent enough to scan quickly. Company/institution names, roles, description, technology, and impact metrics should have clear hierarchy. Potential visual directions: vertical timeline with editorial typography, offset timeline grid, numbered milestones, connected system diagram metaphor, chronological track. Do not make it gimmicky. The content should still be fully accessible and readable."
- "Also for the GenAI page, it should NOT have a style switcher on it. It should only have one style on it that is different compared to the rest of the pages since that is supposed to be the AI generated page. So make that change and make that page unique and different compared to the rest of the pages. Follow the same design principles as before and use the frontend design skills that you have in order to do this. Also for experience, keep the most recent experience on top so Visa SWE Intern should be first and then the older experiences. keep that oder."
- "so what exactly did you change on the sandbox. nothing is changed. Make it unique. I told you. what is hard to understand. Try your best to make it look really nice and unique. Use /impeccable skill to design this and make it look good and do something creative with this page."
- "The sandbox experience section is too basic and need to be more creative. It doesn't really have to be like the other pages and can be different. Use this page to highlight my experience and make it unique and creative. The page that I have right now is too plain and basic. Make it better. Use the frontend design skill to make to it cleaner and add more creativity."
- "I still do NOT like the sandbox page that we have here. You know what, maybe try to come up with a new concept of something that can showcase my experience. it doesn't have to be this. make it creative, new and something that doesn't look boring and basic. we want to make sure of this ai generated page to create something unique and cool."

Peer review feedback (from the lab peer review workshop, see above) was also relayed to Claude and incorporated into this same final version; it's listed separately under **Peer review feedback** rather than duplicated here, since it originated from a classmate, not as the author's own prompt.

## Running locally

No build step. From the project root:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`.

## Deployment

This repository is pulled/copied onto `people.tamu.edu/~om.goswami` by the author directly.
