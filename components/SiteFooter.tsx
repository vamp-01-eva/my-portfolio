import Link from "next/link";
import { SITE } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <svg
            className="footer__mark"
            viewBox="0 0 48 48"
            aria-hidden="true"
            focusable="false"
          >
            <use href="#mark-m" />
          </svg>
          <p className="footer__name">mark justine j. mauricio</p>
          <p className="footer__note">
            web developer / ai automation builder / antipolo
          </p>
        </div>
        <p className="footer__colophon">
          mark justine j. mauricio, antipolo, philippines.{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.{" "}
          <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>. built with html,
          css, and javascript.
        </p>
        <nav className="footer__nav" aria-label="Footer">
          <Link href="/work">work</Link>
          <Link href="/about">about</Link>
          <Link href="/contact">contact</Link>
          <a href={SITE.resume} download={SITE.resumeDownload}>
            résumé
          </a>
        </nav>
        <p className="credits">
          Type: Bodoni Moda, Geist, and Geist Mono (SIL Open Font License).
          Sigils: original linework. Screens: captures from the projects shown.
        </p>
      </div>
    </footer>
  );
}
