import type { Metadata } from "next";
import { SITE } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Mark Justine J. Mauricio",
  description:
    "Contact Mark Justine J. Mauricio for junior developer roles, web application work, and AI automation projects.",
};

export default function ContactPage() {
  return (
    <PageShell active="contact">
      <header className={styles.head}>
        <div className={`container ${styles.headInner}`}>
          <p className="eyebrow">
            <span>contact</span>{" "}2026
          </p>
          <h1 className="chrome">tell me what’s slow.</h1>
          <p className={`lead ${styles.lead}`}>
            A junior role, a small build, or a slow process.
          </p>
        </div>
      </header>

      <div className={`container ${styles.desk}`}>
        <section className={styles.sheet} aria-labelledby="form-title">
          <header className={styles.sheetHead}>
            <div>
              <p className="eyebrow">
                <span>01</span>{" "}message
              </p>
              <h2 id="form-title">send a message</h2>
            </div>
            <p className={styles.sheetStamp}>dispatch sheet / 2026</p>
          </header>
          <ContactForm />
        </section>

        <aside className={styles.rail} aria-labelledby="direct-title">
          <p className="eyebrow">
            <span>02</span>{" "}direct line
          </p>
          <h2 id="direct-title">direct</h2>
          <dl className={styles.facts}>
            <div>
              <dt>email</dt>
              <dd>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </dd>
            </div>
            <div>
              <dt>phone</dt>
              <dd>
                <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
              </dd>
            </div>
            <div>
              <dt>location</dt>
              <dd>{SITE.location}</dd>
            </div>
            <div>
              <dt>availability</dt>
              <dd>
                Junior developer and AI automation roles, remote or on-site.
              </dd>
            </div>
          </dl>
          <div className={styles.profiles}>
            <h3>profiles</h3>
            <p>LinkedIn and GitHub links to add.</p>
          </div>
          <a
            className={`btn btn--ghost ${styles.resume}`}
            href={SITE.resume}
            download={SITE.resumeDownload}
          >
            download résumé
          </a>
        </aside>
      </div>
    </PageShell>
  );
}
