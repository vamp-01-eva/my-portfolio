# Mark Justine J. Mauricio — Portfolio

A static portfolio for Mark Justine J. Mauricio, built as the **Cold Reliquary** theme (Hallmark v3.0.0).

## Design

Cold Reliquary is a chrome-led, cybersigilism-intensity-3 system: a monochrome palette of void black, charcoal, gunmetal, ice grey, and a signal ice-blue used sparingly. Display type is Bodoni Moda, body type is Geist, and labels are Geist Mono (Google Fonts, SIL Open Font License).

- `tokens.css` — palette, type, spacing, chrome, and motion tokens.
- `base.css` — base element styles, chrome text, grain, and image-slot rules.
- `styles.css` — page layouts and responsive rules.
- `tools/sigils.mjs` — the original SVG sprite: M monogram, ten-build seal, project sigils, status glyphs, and group glyphs.
- `main.js` — header retraction, mobile menu, and local form validation.
- `slot.js` — optional image-slot helper; removes broken images and exposes `window.hallmarkSlots`.

Project plates are abstract specimen plates, not product screenshots. Each carries one original sigil. The home and about field plate uses `data-slot="about-photo"`; drop in a real workspace photograph when one is available.

## Pages

- `index.html` — home
- `work.html` — project catalogue
- `about.html` — background and skills
- `contact.html` — contact details and form
- `case-*.html` — ten case studies
- `MAURICIO_RESUME.pdf` — downloadable résumé

## Content rules

- Ten projects with the status supplied for each: completed, in progress, internship build, build, prototype, or academic project.
- No invented metrics, testimonials, client logos, deployments, or product screenshots.
- Case studies are long-form documents.
- LinkedIn and GitHub links remain placeholders until real URLs are supplied.
- The contact form validates locally only. It does not send anything.

## Local preview

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000/.

## Rebuild

```powershell
node tools/build.mjs
```

The generator writes all 14 pages from the project records in `tools/projects-a.mjs` and `tools/projects-b.mjs`, using the templates in `tools/pages.mjs` and `tools/case.mjs`.

## Deployment

Live at **https://markjustinemau.vercel.app**.

The site is deployed on Vercel as the `my-portfolio` project. The repository is private, so GitHub Pages is not used. To publish updates, connect the private GitHub repo in the Vercel dashboard for automatic deployments, or run `npx vercel deploy --prod` from the repository root. `.vercelignore` keeps the build tools, Hallmark records, design references, and unused images out of the deployment.

## Assets

- `MAURICIO_RESUME.pdf` — the downloadable résumé.
- `images/` — local photo candidates; not referenced by the site and not deployed.
- `design-reference/` — local design references; not deployed.
