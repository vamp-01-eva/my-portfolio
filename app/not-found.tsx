import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <header className="page-head">
        <div className="container">
          <p className="eyebrow">
            <span>404</span>not found
          </p>
          <h1 className="chrome">no such case.</h1>
          <p className="lead">
            The page you asked for is not in the index.
          </p>
          <p>
            <Link className="text-link" href="/work">
              return to the work <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </header>
    </PageShell>
  );
}
