# Om Goswami — Personal Portfolio

Personal portfolio website for **Project 1** (CSCE web design/frontend course), built as static HTML, CSS, and vanilla JavaScript — no frameworks, libraries, or templates.

## Submission links

| | |
|---|---|
| **Landing page** | https://people.tamu.edu/~om.goswami |
| **Git repository** | https://github.com/tamu-edu-students/project1-om.goswami |

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

The sandbox page (`sandbox.html`) intentionally uses neither stylesheet. Per the assignment, it's exempt from the two-style requirement; it has its own single, fixed identity (`experience.css`) so the page that's flagged as GenAI-assisted content also *looks* distinct from the rest of the site.

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
sandbox.html           Experience (GenAI sandbox, single fixed style)
style1.css              "Field Notes" — light/editorial
style2.css              "Runtime" — dark/cinematic
experience.css          Sandbox page's own stylesheet
assets/
  style-init.js         Pre-paint style restore (blocking, no FOUC)
  site.js                Style toggle, mobile nav, header scroll state
  pipeline-reveal.js      Scroll-reveal for the sandbox pipeline
Goswami_Om_Resume.pdf   Résumé, also embedded on the Qualifications page
photo.jpg, mandir.jpg   Personal photos used on Home / Activities
```

## Peer review feedback

> I like the idea of a timeline to connect your experiences to each other, it seems like a very helpful thing for a professional sort of website. One thing I would suggest is to indicate more complexity in your AI generated page, like some more advanced scrolling.
>
> I like that your page complements your portfolio with milestones, and how it being in a timeline demonstrates growth (assuming chronological order). One suggestion would be to add a visual element, such as in the background, to make the page more appealing.

**How it was addressed:** the sandbox page's pipeline now reveals each stage on scroll (`IntersectionObserver`-driven, staggered, with a safe fully-visible fallback for no-JS/reduced-motion visitors) instead of appearing all at once, and a connecting line now runs behind the three stages as a background visual tying them together, rather than the plain flat list Andrew reviewed.

## AI prompt history

This project used Claude (Claude Code) as a design/development assistant. The prompts below are summarized from the actual working sessions; each entry notes what was asked and what changed as a result.

**Session 1 — 2026-09-11, full redesign**

| Prompt (summarized) | Outcome |
|---|---|
| Full creative brief: elevate the visual design and frontend quality of the existing site, establish a real design system, avoid generic "AI-generated" patterns (gradients, glassmorphism, identical card grids, etc.), keep the existing information architecture, keep Style 1 ↔ Style 2 switching, keep the sandbox page as a distinct required page | Rebuilt `style1.css` and `style2.css` as two genuinely distinct systems (light editorial masthead vs. dark cinematic sidebar) sharing one HTML structure; replaced the flip-card grids with editorial list/case-study layouts; extracted duplicated inline JS into `assets/`; fixed several real bugs found while browser-testing (an `aspect-ratio` conflict with `img` width/height attributes, a `<figure>` default-margin layout bug, a mobile nav clipped by inherited `overflow`) |
| "In the projects, why is first 2 project headers so big and other ones so small. Remove all em dashes from the whole website... the GenAI page should NOT have a style switcher, make it unique... keep the most recent experience on top" | Unified all project title sizes; removed every em dash site-wide (titles, meta descriptions, copy); gave the sandbox page its own fixed stylesheet with no style toggle; reordered the sandbox timeline to most-recent-first |
| "So what exactly did you change on the sandbox... make it unique... use /impeccable" | Rebuilt the sandbox page as a software changelog (`v3.0.0` "latest" release panel + a connected commit-history list) |
| "The sandbox experience section is too basic... make it better... use the frontend design skill" | Iterated the changelog concept's typography, contrast, and motion per the `impeccable` skill's "bolder" guidance |

**Session 2 — 2026-09-16, Release 2 submission prep**

| Prompt (summarized) | Outcome |
|---|---|
| Reviewed the Release 2 rubric line by line; asked to fix any gaps, redesign the sandbox page again with a genuinely new concept, and update the README | Confirmed the deploy step and peer-review content required real answers from the author (asked rather than guessing); switched the Style 1/2 mechanism from swapping one `<link href>` to two always-present `<link>` tags toggled via `disabled`, to satisfy "linked to both CSS files" unambiguously; rebuilt the sandbox page a third time as the build → test → deploy pipeline described above; wrote this README |
| Shared peer review feedback from Andrew Li (see above) mid-task | Added scroll-triggered reveal and a background connecting line to the sandbox pipeline in direct response |

No prompt or AI output was pasted into page content verbatim without review; all copy describing the author's actual work (projects, roles, skills) originates from the author and was only reformatted/condensed, never invented.

## Running locally

No build step. From the project root:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`.

## Deployment

This repository is pulled/copied onto `people.tamu.edu/~om.goswami` by the author directly.
