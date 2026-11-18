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
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mark Justine J. Mauricio, web developer and AI automation builder",
  description:
    "Portfolio of Mark Justine J. Mauricio, an early-career web developer and AI automation builder in Antipolo. Nine builds, real status, and case files.",
};

const feature = bySlug.get("barbershop-manager")!;

export default function HomePage() {
  return (
    <PageShell>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.field} aria-hidden="true">
          <svg viewBox="0 0 600 600" focusable="false">
            <use href="#sigil-field" />
          </svg>
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.copy}>
            <p className="eyebrow">
              <span>portfolio archive</span>antipolo ph / 2026
            </p>
            <h1 id="hero-title" className={`${styles.cover} chrome`}>
              nine builds,
              <br />
              checked by hand.
            </h1>
            <p className={styles.lede}>
              I’m Mark, a web developer and AI automation builder in Antipolo. I
              build internal tools, then test the flow by hand.
            </p>
            <div className={styles.actions}>
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
            <ul className={styles.meta} aria-label="Disciplines">
              <li>web developer</li>
              <li>ai automation</li>
              <li>antipolo, ph</li>
            </ul>
          </div>
          <Seal />
        </div>
        <div className={`container ${styles.ledgerWrap}`}>
          <Ledger />
        </div>
      </section>

      <section className={styles.work} id="work" aria-labelledby="work-title">
        <div className="container">
          <SectionHead
            no="01"
            label="index"
            title="the work"
            lede="Nine builds, three groups. Each plate opens its case."
            id="work-title"
          />
        </div>
        <PlateWall projects={projects} />
      </section>

      <section className={styles.caseExcerpt} aria-labelledby="feature-title">
        <div className={`container ${styles.caseGrid}`}>
          <div className={styles.caseCopy}>
            <p className="eyebrow">
              <span>02</span>case excerpt
            </p>
            <h2 id="feature-title">one build, opened.</h2>
            <p className={`lead ${styles.caseLead}`}>
              The barbershop assistant, from Messenger to a booked slot.
            </p>
            <span className={`${styles.watermark} chrome`} aria-hidden="true">
              {feature.number}
            </span>
            <Link className="text-link" href={`/case/${feature.slug}`}>
              read the barbershop manager case
            </Link>
          </div>
          <div className={styles.caseBody}>
            <RouteFigure workflow={feature.workflow} />
            <dl className={styles.facts}>
              <div>
                <dt>channel</dt>
                <dd>Facebook Messenger</dd>
              </div>
              <div>
                <dt>model</dt>
                <dd>Google Gemini</dd>
              </div>
              <div>
                <dt>records</dt>
                <dd>Google Sheets and Calendar</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.spec} aria-labelledby="skills-title">
        <div className="container">
          <SectionHead
            no="03"
            label="spec sheet"
            title="what i work with"
            lede="Used in coursework, internship work, and personal builds."
            id="skills-title"
          />
          <dl className={styles.specList}>
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

      <section className={styles.about} aria-labelledby="about-title">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCopy}>
              <p className="eyebrow">
                <span>04</span>about
              </p>
              <h2 id="about-title">i learned by fixing the office first.</h2>
              <p>
                At DepEd’s ICT Unit, I built internal tools for attendance,
                bookings, and contract tracking, then tested each flow by hand.
              </p>
              <Link className="text-link" href="/about">
                more about how i work
              </Link>
            </div>
            <dl className={styles.aboutFacts}>
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

      <section className={styles.close} aria-labelledby="close-title">
        <div className={`container ${styles.closeInner}`}>
          <div className={styles.closeCopy}>
            <p className="eyebrow">
              <span>05</span>contact
            </p>
            <h2 id="close-title">tell me what’s slow.</h2>
            <p className={`lead ${styles.closeLead}`}>
              I’m open to junior developer and AI automation roles, remote or in
              Antipolo.
            </p>
          </div>
          <div className={styles.closeDetails}>
            <a className={`${styles.closeMail} chrome`} href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <a className={styles.closePhone} href={`tel:${SITE.phoneHref}`}>
              {SITE.phone}
            </a>
            <p className={styles.closeNote}>
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
