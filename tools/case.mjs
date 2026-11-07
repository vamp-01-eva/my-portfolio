import { projects, esc, statusTag, routeDiagram, screenMap, page } from './render.mjs';

const sections = [
  ['overview', 'project overview'],
  ['problem', 'problem statement'],
  ['objectives', 'objectives'],
  ['role', 'my role and contributions'],
  ['technologies', 'technologies used'],
  ['features', 'main features'],
  ['workflow', 'workflow and system architecture'],
  ['screens', 'screens and demonstrations'],
  ['challenges', 'challenges and solutions'],
  ['status', 'project status']
];

export function casePage(project) {
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const contents = sections.map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`).join('');
  const objectives = project.objectives.map((objective) => `<li>${esc(objective)}</li>`).join('');
  const roleRows = project.role.map((row) => `<div><dt>${esc(row.label)}</dt><dd>${esc(row.text)}</dd></div>`).join('');
  const techRows = project.tech.map((row) => `<tr><td>${esc(row.group)}</td><td>${row.items.map(esc).join(', ')}</td></tr>`).join('');
  const features = project.features.map((feature) => `<li><span class="feature-list__title">${esc(feature.title)}</span><span class="feature-list__text">${esc(feature.text)}</span></li>`).join('');
  const planned = project.planned
    ? `<h3>planned, not implemented</h3><ul class="planned-list">${project.planned.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`
    : '';
  const challenges = project.challenges.map((row) => `<tr><td>${esc(row.constraint)}</td><td>${esc(row.response)}</td></tr>`).join('');
  const content = `
    <header class="case-head">
      <div class="container">
        <div class="case-head__top">
          <a class="back-link" href="work.html">all work</a>
          ${statusTag(project.status)}
        </div>
        <h1>${esc(project.title)}</h1>
        <p class="lead">${esc(project.card)}</p>
        <div class="case-sheet">
          <dl>
            <div><dt>category</dt><dd>${esc(project.category)}</dd></div>
            <div><dt>year</dt><dd class="num">${esc(project.year)}</dd></div>
            <div><dt>status</dt><dd>${esc(project.status)}</dd></div>
            <div><dt>stack</dt><dd>${project.stack.map(esc).join(', ')}</dd></div>
          </dl>
        </div>
      </div>
    </header>
    <div class="container case-body">
      <nav class="case-contents" aria-label="Case contents">
        <p class="case-contents__title">in this case</p>
        <ol>${contents}</ol>
      </nav>
      <article class="case-content">
        <section id="overview">
          <h2>project overview</h2>
          <p class="lead">${esc(project.lead)}</p>
          ${project.overview.map((paragraph) => `<p>${esc(paragraph)}</p>`).join('')}
        </section>
        <section id="problem">
          <h2>problem statement</h2>
          <p class="case-statement">${esc(project.problem)}</p>
        </section>
        <section id="objectives">
          <h2>objectives</h2>
          <ol class="objective-list objective-list--${project.objectives.length}">${objectives}</ol>
        </section>
        <section id="role">
          <h2>my role and contributions</h2>
          <dl class="role-list">${roleRows}</dl>
          <p class="case-note">${esc(project.roleNote)}</p>
        </section>
        <section id="technologies">
          <h2>technologies used</h2>
          <table class="tech-table">
            <thead><tr><th scope="col">group</th><th scope="col">tools</th></tr></thead>
            <tbody>${techRows}</tbody>
          </table>
        </section>
        <section id="features">
          <h2>main features</h2>
          <ol class="feature-list">${features}</ol>
          ${planned}
        </section>
        <section id="workflow">
          <h2>workflow and system architecture</h2>
          <figure class="route-figure">
            ${routeDiagram(project.workflow)}
            <figcaption>${esc(project.workflow.caption)}</figcaption>
          </figure>
        </section>
        <section id="screens">
          <h2>screens and demonstrations</h2>
          <figure class="screen-figure">
            ${screenMap(project.screens)}
            <figcaption>${esc(project.screens.caption)}</figcaption>
          </figure>
        </section>
        <section id="challenges">
          <h2>challenges and solutions</h2>
          <table class="challenge-table">
            <thead><tr><th scope="col">the constraint</th><th scope="col">the response</th></tr></thead>
            <tbody>${challenges}</tbody>
          </table>
        </section>
        <section id="status">
          <h2>project status</h2>
          <div class="status-well">
            ${statusTag(project.status)}
            <p>${esc(project.statusDetail)}</p>
            <p class="case-note">${esc(project.notClaimed)}</p>
          </div>
        </section>
        <nav class="case-next" aria-label="Next case">
          <div>
            <p class="case-next__label">next case</p>
            <a class="case-next__link" href="case-${next.slug}.html">${esc(next.navTitle)}</a>
          </div>
          <a class="text-link" href="work.html">all work</a>
        </nav>
      </article>
    </div>`;
  return page({
    title: `${project.title}, case file`,
    description: project.summary,
    active: 'work',
    content
  });
}
