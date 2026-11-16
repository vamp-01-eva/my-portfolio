import Link from "next/link";
import { SITE } from "@/content/site";

export type ActivePage = "work" | "about" | "contact" | "";

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: ActivePage;
}) {
  return (
    <Link href={href} aria-current={active === label ? "page" : undefined}>
      {label}
    </Link>
  );
}

export function SiteHeader({ active = "" }: { active?: ActivePage }) {
  return (
    <>
      <a className="skip" href="#main">
        skip to content
      </a>
      <div className="topline">
        <div className="container topline__inner">
          <p className="topline__note">
            <span className="topline__pulse" aria-hidden="true" /> open to junior
            developer and ai automation roles
          </p>
          <Link className="topline__link" href="/contact">
            start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <header className="site-header" data-header>
        <div className="container site-header__inner">
          <Link
            className="brand"
            href="/"
            aria-label={`${SITE.name}, home`}
          >
            <svg
              className="brand__mark"
              viewBox="0 0 48 48"
              aria-hidden="true"
              focusable="false"
            >
              <use href="#mark-m" />
            </svg>
            <span className="brand__name">{SITE.shortName}</span>
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <NavLink href="/work" label="work" active={active} />
            <NavLink href="/about" label="about" active={active} />
            <NavLink href="/contact" label="contact" active={active} />
          </nav>
          <a
            className="btn btn--ghost btn--nav"
            href={SITE.resume}
            download={SITE.resumeDownload}
          >
            résumé
          </a>
          <details className="nav-menu">
            <summary>menu</summary>
            <nav className="nav-menu__panel" aria-label="Primary mobile">
              <NavLink href="/work" label="work" active={active} />
              <NavLink href="/about" label="about" active={active} />
              <NavLink href="/contact" label="contact" active={active} />
              <a href={SITE.resume} download={SITE.resumeDownload}>
                résumé
              </a>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
