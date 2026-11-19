import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE } from "@/content/site";
import { FieldPlate } from "@/components/FieldPlate";
import { PageShell } from "@/components/PageShell";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Mark Justine J. Mauricio",
  description:
    "About Mark Justine J. Mauricio: BSIT graduate, DepEd ICT intern, web developer, and AI automation builder in Antipolo.",
};

const facts = [
  { term: "based in", value: "Antipolo, Philippines." },
  { term: "education", value: "BSIT, STI College, 2022 to 2026." },
  { term: "internship", value: "DepEd ICT Unit, Antipolo, 2026." },
  { term: "focus", value: "Web apps and AI automation." },
];

const depedRows = [
  "Built internal web applications for daily office use.",
  "Troubleshot hardware, software, and network issues.",
  "Ran manual QA before IT Officer review.",
  "Reviewed and tested AI-assisted code.",
];

const skillRows = [
  { term: "build", text: "HTML, CSS, JavaScript, PHP, MySQL." },
  {
    term: "integrate",
    text: "OpenAI API, Google Gemini, prompt engineering, API integration.",
  },
  {
    term: "automate",
    text: "n8n, Make.com, Apps Script, Sheets, email workflows.",
  },
  { term: "support", text: "Windows, Microsoft 365, networking, hardware." },
  { term: "tools", text: "Git, VS Code, OpenCode, Claude, ChatGPT." },
];

const records = [
  { term: "BS Information Technology", text: "STI College, 2022 to 2026." },
  {
    term: "Enterprise systems",
    text: "SAP S/4HANA: HCM, WM, PS, EAM, CS, QM, Global Bike, 2025.",
  },
  { term: "Java fundamentals", text: "Java Academy course, 2023." },
  {
    term: "Google Cloud fundamentals",
    text: "Core Infrastructure, Trainocate, 2026.",
  },
];

function Chapter({
  no,
  id,
  title,
  resume = false,
  children,
}: {
  no: string;
  id: string;
  title: string;
  resume?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className={`${styles.chapter}${resume ? ` ${styles.resume}` : ""}`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className={`container ${styles.chapterGrid}`}>
        <div className={styles.chapterRail} aria-hidden="true">
          <span className={styles.chapterNo}>{no}</span>
          <span className={styles.chapterKind}>chapter</span>
        </div>
        <div className={styles.chapterBody}>
          <h2 id={`${id}-title`}>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <PageShell active="about">
      <header className={styles.head}>
        <div className={styles.field} aria-hidden="true">
          <svg viewBox="0 0 400 400" focusable="false">
            <use href="#seal-rings" />
          </svg>
        </div>
        <div className={`container ${styles.headInner}`}>
          <p className="eyebrow">
            <span>profile</span>{" "}2026
          </p>
          <h1 className="chrome">about mark</h1>
          <p className={`lead ${styles.lead}`}>
            Early-career developer, BSIT graduate, and a careful tester.
          </p>
          <p className={styles.accession}>
            antipolo, philippines <span aria-hidden="true">/</span> BSIT 2026{" "}
            <span aria-hidden="true">/</span> deped ict unit
          </p>
        </div>
      </header>

      <div className={styles.body}>
        <section className={styles.intro} aria-labelledby="start-title">
          <div className="container">
            <div className={styles.introGrid}>
              <div className={styles.introCopy}>
                <p className="eyebrow">
                  <span>01</span>{" "}origin
                </p>
                <h2 id="start-title">where it started</h2>
                <p className={`lead ${styles.introLead}`}>
                  I studied IT at STI College from 2022 to 2026, then interned at
                  DepEd’s ICT Unit in Antipolo.
                </p>
                <p className={styles.introBody}>
                  The internship put me in front of the office work: attendance,
                  vehicle bookings, and contract tracking.
                </p>
              </div>
              <dl className={styles.facts}>
                {facts.map((fact, index) => (
                  <div key={fact.term}>
                    <dt>
                      <span className={styles.factNo} aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>{" "}
                      {fact.term}
                    </dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <div className={`container ${styles.plate}`}>
          <FieldPlate />
        </div>

        <Chapter no="02" id="deped" title="what i did at deped">
          <ul className={styles.list}>
            {depedRows.map((row) => (
              <li key={row}>{row}</li>
            ))}
          </ul>
        </Chapter>

        <Chapter no="03" id="ai" title="how i use ai">
          <p>
            I use AI to draft code, debug a flow, and explore an API. The useful
            part is the review: reading, running, and changing what fails.
          </p>
        </Chapter>

        <Chapter no="04" id="learning" title="what i’m learning">
          <p>
            I’m building with n8n, connecting Google Gemini, Google Workspace,
            and messaging channels. The barbershop assistant and the shorts
            pipeline are prototypes.
          </p>
        </Chapter>

        <Chapter no="05" id="skills" title="skills">
          <dl className={styles.skills}>
            {skillRows.map((row) => (
              <div key={row.term}>
                <dt>{row.term}</dt>
                <dd>{row.text}</dd>
              </div>
            ))}
          </dl>
        </Chapter>

        <Chapter
          no="06"
          id="education"
          title="education and certifications"
        >
          <dl className={styles.records}>
            {records.map((record) => (
              <div key={record.term}>
                <dt>{record.term}</dt>
                <dd>{record.text}</dd>
              </div>
            ))}
          </dl>
        </Chapter>

        <Chapter no="07" id="resume" title="résumé" resume>
          <p>
            The PDF covers this page: education, internship, projects, skills,
            and certifications.
          </p>
          <div className={styles.resumePanel}>
            <a
              className="btn btn--primary"
              href={SITE.resume}
              download={SITE.resumeDownload}
            >
              download résumé
            </a>
            <p className={styles.resumeNote}>PDF, one page.</p>
          </div>
        </Chapter>
      </div>
    </PageShell>
  );
}
