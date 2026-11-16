# Mark Justine J. Mauricio — Portfolio

A Next.js portfolio built as the **Cold Reliquary** theme (Hallmark v3.0.0).

## Design

Cold Reliquary is a chrome-led, cybersigilism-intensity-3 system: a monochrome palette of void black, charcoal, gunmetal, ice grey, and a signal ice-blue used sparingly. Display type is Bodoni Moda, body type is Geist, and labels are Geist Mono (SIL Open Font License), loaded through `next/font`.

- `app/styles/tokens.css` — palette, type, spacing, chrome, and motion tokens.
- `app/styles/base.css` — base element styles, chrome text, grain, and image-slot rules.
- `app/styles/site.css` — page layouts and responsive rules.
- `components/SigilSprite.tsx` — the original SVG sprite: M monogram, eight-build seal, project sigils, status glyphs, and group glyphs.
- `components/HeaderController.tsx` — header retraction and mobile-menu behaviour.
- `components/ContactForm.tsx` — local form validation.

Project plates are abstract specimen plates. Each carries one original sigil; case files use real captures from the builds where available. The home and about field plate uses `data-slot="about-photo"`; drop in a real workspace photograph when one is available.

## Architecture

- `content/projects.ts` — the single typed source for the eight builds.
- `content/site.ts` — site details, group copy, pipeline data, and case sections.
- `app/page.tsx` — home
- `app/work/page.tsx` — project catalogue
- `app/about/page.tsx` — background and skills
- `app/contact/page.tsx` — contact details and form
- `app/case/[slug]/page.tsx` — eight case studies, statically generated
- `public/MAURICIO_RESUME.pdf` — downloadable résumé
- `legacy/` — the archived static site and generator, kept for reference and excluded from deployment

Every old `.html` URL permanently redirects to its clean route through `next.config.ts`.

## Content rules

- Eight projects with the status supplied for each: completed, build, prototype, or academic project.
- No invented metrics, testimonials, client logos, or deployments. Screens are real captures from the projects shown.
- Case studies are long-form documents.
- LinkedIn and GitHub links remain placeholders until real URLs are supplied.
- The contact form validates locally only. It does not send anything.

## Local preview

```powershell
npm install
npm run dev
```

Open http://localhost:3000/.

Production build:

```powershell
npm run build
npm run start
```

The archived legacy site can be served separately for parity checks:

```powershell
node legacy/serve.mjs
```

Open http://localhost:3001/.

## Deployment

Deployment target: **https://markjustinemau.vercel.app**.

The site is deployed on Vercel as the `my-portfolio` project. The repository is private, and Vercel's Git integration deploys updates pushed to `main`. `.vercelignore` keeps the legacy archive, build records, design references, and local image sources out of the deployment.

## Assets

- `public/MAURICIO_RESUME.pdf` — the downloadable résumé.
- `public/assets/screens/` — cropped captures used in the case files; deployed.
- `images/` — local image sources; not referenced by the site and not deployed.
- `design-reference/` — local design references and audit evidence; not deployed.
