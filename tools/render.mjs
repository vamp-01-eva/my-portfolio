import { projectsA } from './projects-a.mjs';
import { projectsB } from './projects-b.mjs';
import { sigilSprite, statusKey, statusGlyph } from './sigils.mjs';

export const projects = [...projectsA, ...projectsB];
export const bySlug = new Map(projects.map((p) => [p.slug, p]));

export const SITE = {
  name: 'Mark Justine J. Mauricio',
  shortName: 'mark mauricio',
  email: 'markjustinemau@gmail.com',
  phone: '+63 969 082 9260',
  phoneHref: '+639690829260',
  location: 'Antipolo, Philippines',
  resume: 'MAURICIO_RESUME.pdf',
  resumeDownload: 'Mark-Justine-Mauricio-Resume.pdf'
};

export const groups = [
  { key: 'web', label: 'web applications', line: 'Internal tools built during the DepEd ICT internship.' },
  { key: 'ai', label: 'ai automation', line: 'Four prototypes: one standalone assistant, one connected shorts pipeline.' },
  { key: 'academic', label: 'academic', line: 'The Soletisfaction capstone.' }
];

export const pipelineSteps = [
  { slug: 'youtube-clipper', label: 'clipper', note: 'cut the first set' },
  { slug: 'youtube-reclipper', label: 'reclipper', note: 'cut a new set' },
  { slug: 'local-video-captioner', label: 'captioner', note: 'add captions' }
];

export function pipelineStrip(project) {
  const current = project.pipeline ? project.pipeline.step : 0;
  const steps = pipelineSteps.map((step, index) => {
    const number = String(index + 1).padStart(2, '0');
    const isCurrent = current === index + 1;
    return `<li class="pipeline-strip__step${isCurrent ? ' is-current' : ''}">
      <span class="pipeline-strip__no">${number}</span>
      <a href="case-${step.slug}.html">${esc(step.label)}</a>
      <span class="pipeline-strip__note">${esc(step.note)}</span>
      ${isCurrent ? '<span class="pipeline-strip__now">this case</span>' : ''}
    </li>`;
  }).join('');
  return `<aside class="pipeline-strip" aria-label="Shorts pipeline position">
    <p class="pipeline-strip__label">part of the shorts pipeline</p>
    <ol>${steps}</ol>
    <p class="pipeline-strip__foot">The clipper and reclipper keep clips caption-free; the captioner adds captions after editing.</p>
  </aside>`;
}

export function esc(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '’');
}

export function statusTag(status) {
  return `<span class="status status--${statusKey(status)}">${statusGlyph(status)}<span>${esc(status)}</span></span>`;
}

export function routeDiagram(workflow) {
  const nodes = workflow.nodes.map((node, index) => {
    const accent = node.accent ? ' route__node--accent' : '';
    const link = index < workflow.nodes.length - 1 ? '<span class="route__link" aria-hidden="true"></span>' : '';
    return `<div class="route__node${accent}"><span class="route__index">${String(index + 1).padStart(2, '0')}</span><span class="route__label">${esc(node.label)}</span><span class="route__note">${esc(node.note)}</span></div>${link}`;
  }).join('');
  const branch = workflow.branch
    ? `<p class="route__branch">${esc(workflow.branch)}</p>`
    : '';
  return `<div class="route">${nodes}</div>${branch}`;
}

export function screenMap(screens) {
  const panels = screens.panels.map((panel) => `
    <div class="screen-panel">
      <p class="screen-panel__title">${esc(panel.title)}</p>
      <ul>${panel.items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
    </div>`).join('');
  return `<div class="screen-map">${panels}</div>`;
}

export function screensBlock(screens) {
  if (!screens.images) return screenMap(screens);
  const shots = screens.images.map((image) => `
    <figure class="shot${image.wide ? ' shot--wide' : ''}${image.portrait ? ' shot--portrait' : ''}">
      <div class="shot__frame">
        <img src="${esc(image.src)}" alt="${esc(image.alt)}" width="${image.w}" height="${image.h}" loading="lazy" decoding="async">
      </div>
      <figcaption><span class="shot__tag">${esc(image.tag)}</span>${esc(image.caption)}</figcaption>
    </figure>`).join('');
  return `<div class="shot-grid">${shots}</div>`;
}

function nav(active) {
  const link = (href, label, key) => {
    const current = active === key ? ' aria-current="page"' : '';
    return `<a href="${href}"${current}>${label}</a>`;
  };
  return `
  <a class="skip" href="#main">skip to content</a>
  <div class="topline">
    <div class="container topline__inner">
      <p class="topline__note"><span class="topline__pulse" aria-hidden="true"></span> open to junior developer and ai automation roles</p>
      <a class="topline__link" href="contact.html">start a conversation <span aria-hidden="true">↗</span></a>
    </div>
  </div>
  <header class="site-header" data-header>
    <div class="container site-header__inner">
      <a class="brand" href="index.html" aria-label="${esc(SITE.name)}, home">
        <svg class="brand__mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><use href="#mark-m"/></svg>
        <span class="brand__name">${esc(SITE.shortName)}</span>
      </a>
      <nav class="site-nav" aria-label="Primary">
        ${link('work.html', 'work', 'work')}
        ${link('about.html', 'about', 'about')}
        ${link('contact.html', 'contact', 'contact')}
      </nav>
      <a class="btn btn--ghost btn--nav" href="${SITE.resume}" download="${SITE.resumeDownload}">résumé</a>
      <details class="nav-menu">
        <summary>menu</summary>
        <nav class="nav-menu__panel" aria-label="Primary mobile">
          ${link('work.html', 'work', 'work')}
          ${link('about.html', 'about', 'about')}
          ${link('contact.html', 'contact', 'contact')}
          <a href="${SITE.resume}" download="${SITE.resumeDownload}">résumé</a>
        </nav>
      </details>
    </div>
  </header>`;
}

function footer() {
  return `
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <svg class="footer__mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><use href="#mark-m"/></svg>
        <p class="footer__name">mark justine j. mauricio</p>
        <p class="footer__note">web developer / ai automation builder / antipolo</p>
      </div>
      <p class="footer__colophon">mark justine j. mauricio, antipolo, philippines. <a href="mailto:${SITE.email}">${SITE.email}</a>. <a href="tel:${SITE.phoneHref}">${SITE.phone}</a>. built with html, css, and javascript.</p>
      <nav class="footer__nav" aria-label="Footer">
        <a href="work.html">work</a>
        <a href="about.html">about</a>
        <a href="contact.html">contact</a>
        <a href="${SITE.resume}" download="${SITE.resumeDownload}">résumé</a>
      </nav>
      <p class="credits">Type: Bodoni Moda, Geist, and Geist Mono (SIL Open Font License). Sigils: original linework. Screens: captures from the projects shown.</p>
    </div>
  </footer>`;
}

export function page({ title, description, active = '', content, hasSlots = false }) {
  const slotScript = hasSlots ? '\n  <script src="slot.js"></script>' : '';
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="page-type" content="service">
  <meta name="site-kind" content="other">
  <meta name="theme-color" content="#07070a">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..700&family=Geist:wght@300..600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <script>document.documentElement.classList.add('js');</script>
</head>
<body id="top">
${sigilSprite()}
${nav(active)}
  <main id="main">
${content}
  </main>
${footer()}
  <script src="main.js"></script>${slotScript}
</body>
</html>
`;
}
