# Mark Justine J. Mauricio — Portfolio

A static portfolio for Mark Justine J. Mauricio, built with the Lumen theme (Hallmark v2.0.0).

## Pages

- `index.html` — home
- `work.html` — project catalogue
- `about.html` — background and skills
- `contact.html` — contact details and form
- `case-*.html` — ten case studies
- `MAURICIO_RESUME.pdf` — downloadable résumé

## Local preview

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000/.

## Rebuild

```powershell
node tools/build.mjs
```

The generator writes the HTML from the project records in `tools/projects-a.mjs` and `tools/projects-b.mjs`.

## Deployment

Live at **https://markjustinemau.vercel.app**.

The site is deployed on Vercel as the `my-portfolio` project. The repository is private, so GitHub Pages is not used. To publish updates, either run `npx vercel deploy --prod` from the site folder or connect the private GitHub repo in the Vercel dashboard for automatic deployments.

## Notes

- The contact form validates locally but is not connected to a backend. Set `data-endpoint` in `contact.html` and update `main.js` to post it.
- LinkedIn and GitHub links are placeholders on `contact.html`.
- The data-center photograph is by Christopher Bowns, CC BY-SA 2.0, Wikimedia Commons. Replace it with Mark's own workspace photo and update the credit.
- Case studies are long-form documents and intentionally exceed the Hallmark landing-page word budget.
