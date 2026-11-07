import { projectsA } from './projects-a.mjs';
import { projectsB } from './projects-b.mjs';

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
  { key: 'ai', label: 'ai automation', line: 'Independent prototypes, labelled as prototypes.' },
  { key: 'academic', label: 'academic', line: 'The Soletisfaction capstone.' }
];

export function esc(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '’');
}

export function statusTag(status) {
  return `<span class="tag">${esc(status)}</span>`;
}

export function miniMap(count = 4, accentLast = false, lead = false) {
  const nodes = [];
  for (let i = 0; i < count; i += 1) {
    const isLast = i === count - 1;
    const cls = `mini-map__node${isLast && accentLast ? ' mini-map__node--accent' : ''}`;
    nodes.push(`<span class="${cls}"></span>`);
    if (!isLast) nodes.push('<span class="mini-map__line"></span>');
  }
  return `<span class="mini-map${lead ? ' mini-map--lead' : ''}" aria-hidden="true">${nodes.join('')}</span>`;
}

export function routeDiagram(workflow) {
  const nodes = workflow.nodes.map((node, index) => {
    const accent = node.accent ? ' route__node--accent' : '';
    const link = index < workflow.nodes.length - 1 ? '<span class="route__link" aria-hidden="true"></span>' : '';
    return `<div class="route__node${accent}"><span class="route__label">${esc(node.label)}</span><span class="route__note">${esc(node.note)}</span></div>${link}`;
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

function nav(active) {
  const link = (href, label, key) => {
    const current = active === key ? ' aria-current="page"' : '';
    return `<a href="${href}"${current}>${label}</a>`;
  };
  return `
  <a class="skip" href="#main">skip to content</a>
  <div class="topline">
    <div class="container topline__inner">
      <p class="topline__note">open to junior developer and ai automation roles</p>
      <a class="topline__link" href="contact.html">start a conversation</a>
    </div>
  </div>
  <header class="site-header" data-header>
    <div class="container site-header__inner">
      <a class="brand" href="index.html" aria-label="${esc(SITE.name)}, home">${esc(SITE.shortName)}</a>
      <nav class="site-nav" aria-label="Primary">
        ${link('work.html', 'work', 'work')}
        ${link('about.html', 'about', 'about')}
        ${link('contact.html', 'contact', 'contact')}
      </nav>
      <a class="btn btn--secondary btn--nav" href="${SITE.resume}" download="${SITE.resumeDownload}">résumé</a>
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
      <p class="footer__colophon">mark justine j. mauricio, antipolo, philippines. <a href="mailto:${SITE.email}">${SITE.email}</a>. <a href="tel:${SITE.phoneHref}">${SITE.phone}</a>. built with html, css, and javascript.</p>
      <nav class="footer__nav" aria-label="Footer">
        <a href="work.html">work</a>
        <a href="about.html">about</a>
        <a href="contact.html">contact</a>
        <a href="${SITE.resume}" download="${SITE.resumeDownload}">résumé</a>
      </nav>
      <p class="credits" data-credits>Photographs: <a href="https://commons.wikimedia.org/wiki/File:Virginia_Tech_-_data_center.jpg">Christopher Bowns</a> (CC BY-SA 2.0, Wikimedia Commons).</p>
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
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Geist:wght@400;500&family=Geist+Mono:wght@400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <script>document.documentElement.classList.add('js');</script>
</head>
<body id="top">
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
