import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectSigil } from "@/components/SigilSprite";
import { StatusTag } from "@/components/StatusTag";

export function DossierList({ projects }: { projects: Project[] }) {
  return (
    <ol className="dossier-list">
      {projects.map((project) => (
        <li key={project.slug}>
          <Link className="dossier" href={`/case/${project.slug}`}>
            <span className="dossier__no">{project.number}</span>
            <span className="dossier__sigil" aria-hidden="true">
              <ProjectSigil slug={project.slug} />
            </span>
            <span className="dossier__body">
              <span className="dossier__name">{project.navTitle}</span>
              <span className="dossier__summary">{project.card}</span>
            </span>
            <span className="dossier__meta">
              <StatusTag status={project.status} />
              <span className="dossier__year">{project.year}</span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
