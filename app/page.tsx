import type { Metadata } from "next";
import Link from "next/link";
import { bySlug, projects } from "@/content/projects";
import { SITE } from "@/content/site";
import { FieldPlate } from "@/components/FieldPlate";
import { Ledger } from "@/components/Ledger";
import { PageShell } from "@/components/PageShell";
import { PlateWall } from "@/components/PlateWall";
import { RouteFigure } from "@/components/RouteFigure";
import { Seal } from "@/components/Seal";
import { SectionHead } from "@/components/SectionHead";

export const metadata: Metadata = {
  title: "Mark Justine J. Mauricio, web developer and AI automation builder",
  description:
    "Portfolio of Mark Justine J. Mauricio, an early-career web developer and AI automation builder in Antipolo. Eight builds, real status, and case files.",
};

const feature = bySlug.get("contract-renewal")!;

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__field" aria-hidden="true">
          <svg viewBox="0 0 600 600" focusable="false">
            <use href="#sigil-field" />
          </svg>
        </div>
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">
              <span>portfolio</span>2026
            </p>
            <h1 id="hero-title" className="chrome">
              eight builds,
              <br />
              <em>checked</em> by hand.
            </h1>
            <p className="hero__lede">
              I’m Mark, a web developer and AI automation builder in Antipolo. I
              build internal tools, then test the flow by hand.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#work">
                view the work
              </a>
              <a
                className="btn btn--ghost"
                href={SITE.resume}
                download={SITE.resumeDownload}
              >
                download résumé
              </a>
            </div>
            <ul className="hero__meta" aria-label="Disciplines">
              <li>web developer</li>
              <li>ai automation</li>
              <li>antipolo, ph</li>
            </ul>
          </div>
          <Seal />
        </div>
        <div className="container">
          <Ledger />
        </div>
      </section>

      <section className="index-section" id="work" aria-labelledby="work-title">
        <div className="container">
          <SectionHead
            no="01"
            label="index"
            title="the work"
            lede="Eight builds, three groups. Each plate opens its case."
            id="work-title"
          />
          <PlateWall projects={projects} />
        </div>
      </section>

      <section className="case-excerpt" aria-labelledby="feature-title">
        <div className="container case-excerpt__grid">
          <div className="case-excerpt__copy">
            <p className="eyebrow">
              <span>02</span>case excerpt
            </p>
            <h2 id="feature-title">one build, opened.</h2>
            <p className="lead">
              The personnel inventory, from form to renewal notice.
            </p>
            <span className="case-excerpt__watermark chrome" aria-hidden="true">
              {feature.number}
            </span>
            <Link className="text-link" href={`/case/${feature.slug}`}>
              read the personnel inventory case{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="case-excerpt__body">
            <RouteFigure workflow={feature.workflow} />
            <dl className="feature__facts">
              <div>
                <dt>collection</dt>
                <dd>Google Forms</dd>
              </div>
              <div>
                <dt>database</dt>
                <dd>Google Sheets</dd>
              </div>
              <div>
                <dt>access</dt>
                <dd>Super Admin and School Admin</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="spec-section" aria-labelledby="skills-title">
        <div className="container">
          <SectionHead
            no="03"
            label="spec sheet"
            title="what i work with"
            lede="Used in coursework, internship work, and personal builds."
            id="skills-title"
          />
          <dl className="spec-list">
            <div>
              <dt>build</dt>
              <dd>HTML, CSS, JavaScript, PHP, MySQL.</dd>
            </div>
            <div>
              <dt>integrate</dt>
              <dd>
                OpenAI API, Google Gemini, prompt engineering, API integration.
              </dd>
            </div>
            <div>
              <dt>automate</dt>
              <dd>
                n8n, Make.com, Apps Script, Sheets, Forms, email workflows.
              </dd>
            </div>
            <div>
              <dt>support</dt>
              <dd>Windows, Microsoft 365, networking, hardware support.</dd>
            </div>
            <div>
              <dt>tools</dt>
              <dd>Git, VS Code, Antigravity, OpenCode, Claude, ChatGPT.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div className="container">
          <div className="about__grid">
            <div className="about__copy">
              <p className="eyebrow">
                <span>04</span>about
              </p>
              <h2 id="about-title">i learned by fixing the office first.</h2>
              <p>
                At DepEd’s ICT Unit, I built internal tools for attendance,
                bookings, and contract tracking, then tested each flow by hand.
              </p>
              <Link className="text-link" href="/about">
                more about how i work <span aria-hidden="true">→</span>
              </Link>
            </div>
            <dl className="about__facts">
              <div>
                <dt>education</dt>
                <dd>BSIT, STI College, 2022 to 2026.</dd>
              </div>
              <div>
                <dt>internship</dt>
                <dd>DepEd ICT Unit, Antipolo, 2026.</dd>
              </div>
              <div>
                <dt>based in</dt>
                <dd>Antipolo, Philippines.</dd>
              </div>
            </dl>
          </div>
          <FieldPlate />
        </div>
      </section>

      <section className="close" aria-labelledby="close-title">
        <div className="container close__inner">
          <div className="close__copy">
            <p className="eyebrow">
              <span>05</span>contact
            </p>
            <h2 id="close-title">tell me what’s slow.</h2>
            <p className="lead">
              I’m open to junior developer and AI automation roles, remote or in
              Antipolo.
            </p>
          </div>
          <div className="close__details">
            <a className="close__mail chrome" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <a className="close__phone" href={`tel:${SITE.phoneHref}`}>
              {SITE.phone}
            </a>
            <p className="close__note">
              Antipolo, Philippines. Available for remote work.
            </p>
            <Link className="btn btn--ghost" href="/contact">
              use the contact form
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
