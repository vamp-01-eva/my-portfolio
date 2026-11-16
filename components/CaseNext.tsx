import Link from "next/link";
import type { Project } from "@/content/projects";

export function CaseNext({ next }: { next: Project }) {
  return (
    <nav className="case-next" aria-label="Next case">
      <div>
        <p className="case-next__label">next case</p>
        <Link className="case-next__link" href={`/case/${next.slug}`}>
          <span className="case-next__no">{next.number}</span>
          {next.navTitle}
        </Link>
      </div>
      <Link className="text-link" href="/work">
        all work <span aria-hidden="true">→</span>
      </Link>
    </nav>
  );
}
