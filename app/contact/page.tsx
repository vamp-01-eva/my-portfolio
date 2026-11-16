import type { Metadata } from "next";
import { SITE } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact Mark Justine J. Mauricio",
  description:
    "Contact Mark Justine J. Mauricio for junior developer roles, web application work, and AI automation projects.",
};

export default function ContactPage() {
  return (
    <PageShell active="contact">
      <header className="page-head">
        <div className="container">
          <p className="eyebrow">
            <span>contact</span>2026
          </p>
          <h1 className="chrome">tell me what’s slow.</h1>
          <p className="lead">A junior role, a small build, or a slow process.</p>
        </div>
      </header>
      <div className="container contact-grid">
        <section className="contact-form-wrap" aria-labelledby="form-title">
          <p className="eyebrow">
            <span>01</span>message
          </p>
          <h2 id="form-title">send a message</h2>
          <ContactForm />
        </section>
        <aside className="contact-rail" aria-labelledby="direct-title">
          <p className="eyebrow">
            <span>02</span>direct line
          </p>
          <h2 id="direct-title">direct</h2>
          <dl className="contact-rail__facts">
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
              <dd>Junior developer and AI automation roles, remote or on-site.</dd>
            </div>
          </dl>
          <h3>profiles</h3>
          <p className="contact-rail__note">LinkedIn and GitHub links to add.</p>
          <a
            className="btn btn--ghost"
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
