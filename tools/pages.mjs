import { projects, bySlug, groups, SITE, esc, statusTag, routeDiagram, page } from './render.mjs';
import { projectSigil, groupGlyph } from './sigils.mjs';

const feature = bySlug.get('contract-renewal');

function sectionHead(no, label, title, lede, id = '') {
  const idAttr = id ? ` id="${id}"` : '';
  return `<div class="section-head">
    <div class="section-head__title">
      <p class="eyebrow"><span>${no}</span>${label}</p>
      <h2${idAttr}>${title}</h2>
    </div>
    <p class="section-head__lede">${lede}</p>
  </div>`;
}

function plate(project, featured = false) {
  return `<li class="plate${featured ? ' plate--featured' : ''}">
    <a class="plate__link" href="case-${project.slug}.html">
      <span class="plate__frame" aria-hidden="true"></span>
      <span class="plate__top">
        <span class="plate__no">${project.number}</span>
        <span class="plate__cat">${esc(project.category)}</span>
      </span>
      <span class="plate__sigil" aria-hidden="true">${projectSigil(project.slug)}</span>
      <span class="plate__body">
        <span class="plate__name">${esc(project.navTitle)}</span>
        <span class="plate__summary">${esc(project.summary)}</span>
      </span>
      <span class="plate__foot">
        ${statusTag(project.status)}
        <span class="plate__year">${esc(project.year)}</span>
      </span>
    </a>
  </li>`;
}

function dossier(project) {
  return `<li>
    <a class="dossier" href="case-${project.slug}.html">
      <span class="dossier__no">${project.number}</span>
      <span class="dossier__sigil" aria-hidden="true">${projectSigil(project.slug)}</span>
      <span class="dossier__body">
        <span class="dossier__name">${esc(project.navTitle)}</span>
        <span class="dossier__summary">${esc(project.card)}</span>
      </span>
      <span class="dossier__meta">${statusTag(project.status)}<span class="dossier__year">${esc(project.year)}</span></span>
    </a>
  </li>`;
}

const seal = `<figure class="seal" aria-hidden="true">
  <svg class="seal__rings" viewBox="0 0 400 400" focusable="false"><use href="#seal-rings"/></svg>
  <div class="seal__core">
    <span class="seal__number chrome">10</span>
    <span class="seal__unit">builds</span>
  </div>
  <span class="seal__label seal__label--a">web 06</span>
  <span class="seal__label seal__label--b">ai 03</span>
  <span class="seal__label seal__label--c">academic 01</span>
</figure>`;

const ledger = `<div class="ledger">
  <dl class="ledger__counts">
    <div><dt>web applications</dt><dd>06</dd></div>
    <div><dt>ai automation</dt><dd>03</dd></div>
    <div><dt>academic</dt><dd>01</dd></div>
  </dl>
  <p class="ledger__note">the index is the detail.</p>
</div>`;

const fieldPlate = `<figure class="field-plate" data-slot="about-photo" data-alt="A photograph of Mark's workspace or hardware">
  <span class="field-plate__grid" aria-hidden="true"></span>
  <svg class="field-plate__rings" viewBox="0 0 400 400" aria-hidden="true" focusable="false"><use href="#seal-rings"/></svg>
  <svg class="field-plate__mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><use href="#mark-m"/></svg>
  <span class="field-plate__tag" aria-hidden="true">fig. 01 / field note</span>
  <figcaption class="field-plate__caption" data-keep>
    <span>antipolo, philippines</span>
    <span>field note / 2026</span>
  </figcaption>
</figure>`;

export function homePage() {
  const plates = projects.map((project, index) => plate(project, index === 0)).join('');
  const content = `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__field" aria-hidden="true">
        <svg viewBox="0 0 600 600" focusable="false"><use href="#sigil-field"/></svg>
      </div>
      <div class="container hero__inner">
        <div class="hero__copy">
          <p class="eyebrow"><span>portfolio</span>2026</p>
          <h1 id="hero-title" class="chrome">ten builds,<br><em>checked</em> by hand.</h1>
          <p class="hero__lede">I’m Mark, a web developer and AI automation builder in Antipolo. I build internal tools, then test the flow by hand.</p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#work">view the work</a>
            <a class="btn btn--ghost" href="${SITE.resume}" download="${SITE.resumeDownload}">download résumé</a>
          </div>
          <ul class="hero__meta" aria-label="Disciplines">
            <li>web developer</li>
            <li>ai automation</li>
            <li>antipolo, ph</li>
          </ul>
        </div>
        ${seal}
      </div>
      <div class="container">
        ${ledger}
      </div>
    </section>

    <section class="index-section" id="work" aria-labelledby="work-title">
      <div class="container">
        ${sectionHead('01', 'index', 'the work', 'Ten builds, three groups. Each plate opens its case.', 'work-title')}
        <ul class="plate-wall" aria-label="Project index">
          ${plates}
        </ul>
      </div>
    </section>

    <section class="case-excerpt" aria-labelledby="feature-title">
      <div class="container case-excerpt__grid">
        <div class="case-excerpt__copy">
          <p class="eyebrow"><span>02</span>case excerpt</p>
          <h2 id="feature-title">one build, opened.</h2>
          <p class="lead">The contract renewal tracker, from form to inbox.</p>
          <span class="case-excerpt__watermark chrome" aria-hidden="true">06</span>
          <a class="text-link" href="case-${feature.slug}.html">read the contract renewal case <span aria-hidden="true">→</span></a>
        </div>
        <div class="case-excerpt__body">
          <figure class="route-figure">
            ${routeDiagram(feature.workflow)}
            <figcaption>${esc(feature.workflow.caption)}</figcaption>
          </figure>
          <dl class="feature__facts">
            <div><dt>collection</dt><dd>Google Forms</dd></div>
            <div><dt>database</dt><dd>Google Sheets</dd></div>
            <div><dt>access</dt><dd>Super Admin and School Admin</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="spec-section" aria-labelledby="skills-title">
      <div class="container">
        ${sectionHead('03', 'spec sheet', 'what i work with', 'Used in coursework, internship work, and personal builds.', 'skills-title')}
        <dl class="spec-list">
          <div><dt>build</dt><dd>HTML, CSS, JavaScript, PHP, MySQL.</dd></div>
          <div><dt>integrate</dt><dd>OpenAI API, prompt engineering, API integration.</dd></div>
          <div><dt>automate</dt><dd>Make.com, Apps Script, Sheets, Forms, email workflows.</dd></div>
          <div><dt>support</dt><dd>Windows, Microsoft 365, networking, hardware support.</dd></div>
          <div><dt>tools</dt><dd>Git, VS Code, Antigravity, OpenCode, Claude, ChatGPT.</dd></div>
        </dl>
      </div>
    </section>

    <section class="about" aria-labelledby="about-title">
      <div class="container">
        <div class="about__grid">
          <div class="about__copy">
            <p class="eyebrow"><span>04</span>about</p>
            <h2 id="about-title">i learned by fixing the office first.</h2>
            <p>At DepEd’s ICT Unit, I built internal tools for attendance, bookings, rooms, and accounts, then tested each flow by hand.</p>
            <a class="text-link" href="about.html">more about how i work <span aria-hidden="true">→</span></a>
          </div>
          <dl class="about__facts">
            <div><dt>education</dt><dd>BSIT, STI College, 2022 to 2026.</dd></div>
            <div><dt>internship</dt><dd>DepEd ICT Unit, Antipolo, 2026.</dd></div>
            <div><dt>based in</dt><dd>Antipolo, Philippines.</dd></div>
          </dl>
        </div>
        ${fieldPlate}
      </div>
    </section>

    <section class="close" aria-labelledby="close-title">
      <div class="container close__inner">
        <div class="close__copy">
          <p class="eyebrow"><span>05</span>contact</p>
          <h2 id="close-title">tell me what’s slow.</h2>
          <p class="lead">I’m open to junior developer and AI automation roles, remote or in Antipolo.</p>
        </div>
        <div class="close__details">
          <a class="close__mail chrome" href="mailto:${SITE.email}">${SITE.email}</a>
          <a class="close__phone" href="tel:${SITE.phoneHref}">${SITE.phone}</a>
          <p class="close__note">Antipolo, Philippines. Available for remote work.</p>
          <a class="btn btn--ghost" href="contact.html">use the contact form</a>
        </div>
      </div>
    </section>`;
  return page({
    title: 'Mark Justine J. Mauricio, web developer and AI automation builder',
    description: 'Portfolio of Mark Justine J. Mauricio, an early-career web developer and AI automation builder in Antipolo. Ten builds, real status, and case files.',
    active: '',
    content,
    hasSlots: true
  });
}

export function workPage() {
  const groupBlocks = groups.map((group, groupIndex) => {
    const isAcademic = group.key === 'academic';
    const rows = projects.filter((project) => project.group === group.key).map(dossier).join('');
    const title = isAcademic ? 'one capstone, built as a team.' : esc(group.label);
    const line = isAcademic
      ? 'An online store, a point of sale, and the inventory behind both.'
      : esc(group.line);
    return `
      <section class="work-group${isAcademic ? ' work-group--academic' : ''}" id="${group.key}" aria-labelledby="${group.key}-title">
        <div class="container">
          <div class="group-head">
            <span class="group-head__mark" aria-hidden="true">${groupGlyph(group.key)}</span>
            <div class="group-head__copy">
              <p class="eyebrow"><span>${String(groupIndex + 1).padStart(2, '0')}</span>group</p>
              <h2 id="${group.key}-title">${title}</h2>
              <p class="lead">${line}</p>
            </div>
          </div>
          <ol class="dossier-list">${rows}</ol>
        </div>
      </section>`;
  }).join('');
  const content = `
    <header class="page-head">
      <div class="container">
        <p class="eyebrow"><span>catalogue</span>2026</p>
        <h1 class="chrome">the work</h1>
        <p class="lead">Ten builds in three groups. Every row opens a case file.</p>
      </div>
    </header>
    <div class="container page-ledger">
      ${ledger}
    </div>
    ${groupBlocks}
    <section class="work-close" aria-label="Work status">
      <div class="container work-close__inner">
        <p class="work-close__statement">Every row says what the build is. The case says what it is not.</p>
        <a class="btn btn--primary" href="contact.html">start a conversation</a>
      </div>
    </section>`;
  return page({
    title: 'The work, Mark Justine J. Mauricio',
    description: 'Ten builds by Mark Justine J. Mauricio: web applications, AI automation prototypes, and an academic capstone, with the status of each project.',
    active: 'work',
    content
  });
}

export function aboutPage() {
  const skillRows = [
    ['build', 'HTML, CSS, JavaScript, PHP, MySQL.'],
    ['integrate', 'OpenAI API, prompt engineering, API integration.'],
    ['automate', 'Make.com, Apps Script, Sheets, email workflows.'],
    ['support', 'Windows, Microsoft 365, networking, hardware.'],
    ['tools', 'Git, VS Code, OpenCode, Claude, ChatGPT.']
  ].map(([term, text]) => `<div><dt>${term}</dt><dd>${text}</dd></div>`).join('');
  const content = `
    <header class="page-head">
      <div class="container">
        <p class="eyebrow"><span>profile</span>2026</p>
        <h1 class="chrome">about mark</h1>
        <p class="lead">Early-career developer, BSIT graduate, and a careful tester.</p>
      </div>
    </header>
    <div class="container about-page">
      <section class="about-intro" aria-labelledby="start-title">
        <div class="about-intro__copy">
          <p class="eyebrow"><span>01</span>origin</p>
          <h2 id="start-title">where it started</h2>
          <p class="lead">I studied IT at STI College from 2022 to 2026, then interned at DepEd’s ICT Unit in Antipolo.</p>
          <p>The internship put me in front of the office work: attendance, bookings, rooms, and accounts.</p>
        </div>
        <dl class="about-facts-band">
          <div><dt>based in</dt><dd>Antipolo, Philippines.</dd></div>
          <div><dt>education</dt><dd>BSIT, STI College, 2022 to 2026.</dd></div>
          <div><dt>internship</dt><dd>DepEd ICT Unit, Antipolo, 2026.</dd></div>
          <div><dt>focus</dt><dd>Web apps and AI automation.</dd></div>
        </dl>
      </section>

      ${fieldPlate}

      <section class="about-section" id="deped" aria-labelledby="deped-title">
        <h2 id="deped-title">what i did at deped</h2>
        <div class="about-section__body">
          <ul class="about-list">
            <li>Built internal web applications for daily office use.</li>
            <li>Troubleshot hardware, software, and network issues.</li>
            <li>Ran manual QA before IT Officer review.</li>
            <li>Reviewed and tested AI-assisted code.</li>
          </ul>
        </div>
      </section>

      <section class="about-section" id="ai" aria-labelledby="ai-title">
        <h2 id="ai-title">how i use ai</h2>
        <div class="about-section__body">
          <p>I use AI to draft code, debug a flow, and explore an API. The useful part is the review: reading, running, and changing what fails.</p>
        </div>
      </section>

      <section class="about-section" id="learning" aria-labelledby="learning-title">
        <h2 id="learning-title">what i’m learning</h2>
        <div class="about-section__body">
          <p>I’m learning Make.com and n8n, building integrations around the OpenAI API and Google Workspace. The chatbot and Gmail organizer are prototypes.</p>
        </div>
      </section>

      <section class="about-section" id="skills" aria-labelledby="skills-title">
        <h2 id="skills-title">skills</h2>
        <div class="about-section__body">
          <dl class="skill-list">${skillRows}</dl>
        </div>
      </section>

      <section class="about-section" id="education" aria-labelledby="education-title">
        <h2 id="education-title">education and certifications</h2>
        <div class="about-section__body">
          <dl class="record-list">
            <div><dt>BS Information Technology</dt><dd>STI College, 2022 to 2026.</dd></div>
            <div><dt>Enterprise systems</dt><dd>SAP S/4HANA: HCM, WM, PS, EAM, CS, QM, Global Bike, 2025.</dd></div>
            <div><dt>Java fundamentals</dt><dd>Java Academy course, 2023.</dd></div>
            <div><dt>Google Cloud fundamentals</dt><dd>Core Infrastructure, Trainocate, 2026.</dd></div>
          </dl>
        </div>
      </section>

      <section class="about-section about-section--resume" id="resume" aria-labelledby="resume-title">
        <h2 id="resume-title">résumé</h2>
        <div class="about-section__body">
          <p>The PDF covers this page: education, internship, projects, skills, and certifications.</p>
          <a class="btn btn--primary" href="${SITE.resume}" download="${SITE.resumeDownload}">download résumé</a>
          <p class="about-page__note">PDF, one page.</p>
        </div>
      </section>
    </div>`;
  return page({
    title: 'About Mark Justine J. Mauricio',
    description: 'About Mark Justine J. Mauricio: BSIT graduate, DepEd ICT intern, web developer, and AI automation builder in Antipolo.',
    active: 'about',
    content,
    hasSlots: true
  });
}

export function contactPage() {
  const content = `
    <header class="page-head">
      <div class="container">
        <p class="eyebrow"><span>contact</span>2026</p>
        <h1 class="chrome">tell me what’s slow.</h1>
        <p class="lead">A junior role, a small build, or a slow process.</p>
      </div>
    </header>
    <div class="container contact-grid">
      <section class="contact-form-wrap" aria-labelledby="form-title">
        <p class="eyebrow"><span>01</span>message</p>
        <h2 id="form-title">send a message</h2>
        <form class="contact-form" data-contact-form data-endpoint="" novalidate>
          <div class="field-row">
            <div class="field">
              <label for="name">your name</label>
              <input id="name" name="name" autocomplete="name" aria-describedby="name-error" required>
              <p class="field__error" id="name-error" data-error-for="name" hidden>enter your name.</p>
            </div>
            <div class="field">
              <label for="email">email</label>
              <input id="email" name="email" type="email" autocomplete="email" aria-describedby="email-error" required>
              <p class="field__error" id="email-error" data-error-for="email" hidden>enter a valid email address.</p>
            </div>
          </div>
          <div class="field">
            <label for="topic">what do you need?</label>
            <select id="topic" name="topic">
              <option>a junior role</option>
              <option>a web application</option>
              <option>an AI automation</option>
              <option>technical support</option>
              <option>something else</option>
            </select>
          </div>
          <div class="field">
            <label for="message">message</label>
            <textarea id="message" name="message" rows="6" aria-describedby="message-error" required></textarea>
            <p class="field__error" id="message-error" data-error-for="message" hidden>write a short message.</p>
          </div>
          <button class="btn btn--primary" type="submit">check the message</button>
          <p class="form__note">This form is not connected yet. It checks the fields here and tells you so. Email <a href="mailto:${SITE.email}">${SITE.email}</a> to reach me.</p>
          <p class="form__status" data-form-status role="status" aria-live="polite"></p>
        </form>
      </section>
      <aside class="contact-rail" aria-labelledby="direct-title">
        <p class="eyebrow"><span>02</span>direct line</p>
        <h2 id="direct-title">direct</h2>
        <dl class="contact-rail__facts">
          <div><dt>email</dt><dd><a href="mailto:${SITE.email}">${SITE.email}</a></dd></div>
          <div><dt>phone</dt><dd><a href="tel:${SITE.phoneHref}">${SITE.phone}</a></dd></div>
          <div><dt>location</dt><dd>${SITE.location}</dd></div>
          <div><dt>availability</dt><dd>Junior developer and AI automation roles, remote or on-site.</dd></div>
        </dl>
        <h3>profiles</h3>
        <p class="contact-rail__note">LinkedIn and GitHub links to add.</p>
        <a class="btn btn--ghost" href="${SITE.resume}" download="${SITE.resumeDownload}">download résumé</a>
      </aside>
    </div>`;
  return page({
    title: 'Contact Mark Justine J. Mauricio',
    description: 'Contact Mark Justine J. Mauricio for junior developer roles, web application work, and AI automation projects.',
    active: 'contact',
    content
  });
}
