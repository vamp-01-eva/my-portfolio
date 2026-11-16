import type { Metadata } from "next";
import { SITE } from "@/content/site";
import { FieldPlate } from "@/components/FieldPlate";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About Mark Justine J. Mauricio",
  description:
    "About Mark Justine J. Mauricio: BSIT graduate, DepEd ICT intern, web developer, and AI automation builder in Antipolo.",
};

const skillRows = [
  ["build", "HTML, CSS, JavaScript, PHP, MySQL."],
  ["integrate", "OpenAI API, Google Gemini, prompt engineering, API integration."],
  ["automate", "n8n, Make.com, Apps Script, Sheets, email workflows."],
  ["support", "Windows, Microsoft 365, networking, hardware."],
  ["tools", "Git, VS Code, OpenCode, Claude, ChatGPT."],
];

export default function AboutPage() {
  return (
    <PageShell active="about">
      <header className="page-head">
        <div className="container">
          <p className="eyebrow">
            <span>profile</span>2026
          </p>
          <h1 className="chrome">about mark</h1>
          <p className="lead">
            Early-career developer, BSIT graduate, and a careful tester.
          </p>
        </div>
      </header>
      <div className="container about-page">
        <section className="about-intro" aria-labelledby="start-title">
          <div className="about-intro__copy">
            <p className="eyebrow">
              <span>01</span>origin
            </p>
            <h2 id="start-title">where it started</h2>
            <p className="lead">
              I studied IT at STI College from 2022 to 2026, then interned at
              DepEd’s ICT Unit in Antipolo.
            </p>
            <p>
              The internship put me in front of the office work: attendance,
              vehicle bookings, and contract tracking.
            </p>
          </div>
          <dl className="about-facts-band">
            <div>
              <dt>based in</dt>
              <dd>Antipolo, Philippines.</dd>
            </div>
            <div>
              <dt>education</dt>
              <dd>BSIT, STI College, 2022 to 2026.</dd>
            </div>
            <div>
              <dt>internship</dt>
              <dd>DepEd ICT Unit, Antipolo, 2026.</dd>
            </div>
            <div>
              <dt>focus</dt>
              <dd>Web apps and AI automation.</dd>
            </div>
          </dl>
        </section>

        <FieldPlate />

        <section className="about-section" id="deped" aria-labelledby="deped-title">
          <h2 id="deped-title">what i did at deped</h2>
          <div className="about-section__body">
            <ul className="about-list">
              <li>Built internal web applications for daily office use.</li>
              <li>Troubleshot hardware, software, and network issues.</li>
              <li>Ran manual QA before IT Officer review.</li>
              <li>Reviewed and tested AI-assisted code.</li>
            </ul>
          </div>
        </section>

        <section className="about-section" id="ai" aria-labelledby="ai-title">
          <h2 id="ai-title">how i use ai</h2>
          <div className="about-section__body">
            <p>
              I use AI to draft code, debug a flow, and explore an API. The
              useful part is the review: reading, running, and changing what
              fails.
            </p>
          </div>
        </section>

        <section
          className="about-section"
          id="learning"
          aria-labelledby="learning-title"
        >
          <h2 id="learning-title">what i’m learning</h2>
          <div className="about-section__body">
            <p>
              I’m building with n8n, connecting Google Gemini, Google Workspace,
              and messaging channels. The barbershop assistant and the shorts
              pipeline are prototypes.
            </p>
          </div>
        </section>

        <section
          className="about-section"
          id="skills"
          aria-labelledby="skills-title"
        >
          <h2 id="skills-title">skills</h2>
          <div className="about-section__body">
            <dl className="skill-list">
              {skillRows.map(([term, text]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          className="about-section"
          id="education"
          aria-labelledby="education-title"
        >
          <h2 id="education-title">education and certifications</h2>
          <div className="about-section__body">
            <dl className="record-list">
              <div>
                <dt>BS Information Technology</dt>
                <dd>STI College, 2022 to 2026.</dd>
              </div>
              <div>
                <dt>Enterprise systems</dt>
                <dd>
                  SAP S/4HANA: HCM, WM, PS, EAM, CS, QM, Global Bike, 2025.
                </dd>
              </div>
              <div>
                <dt>Java fundamentals</dt>
                <dd>Java Academy course, 2023.</dd>
              </div>
              <div>
                <dt>Google Cloud fundamentals</dt>
                <dd>Core Infrastructure, Trainocate, 2026.</dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          className="about-section about-section--resume"
          id="resume"
          aria-labelledby="resume-title"
        >
          <h2 id="resume-title">résumé</h2>
          <div className="about-section__body">
            <p>
              The PDF covers this page: education, internship, projects, skills,
              and certifications.
            </p>
            <a
              className="btn btn--primary"
              href={SITE.resume}
              download={SITE.resumeDownload}
            >
              download résumé
            </a>
            <p className="about-page__note">PDF, one page.</p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
