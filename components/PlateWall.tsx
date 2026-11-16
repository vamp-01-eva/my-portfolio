import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectSigil } from "@/components/SigilSprite";
import { StatusTag } from "@/components/StatusTag";

export function PlateWall({ projects }: { projects: Project[] }) {
  return (
    <ul className="plate-wall" aria-label="Project index">
      {projects.map((project, index) => {
        const featured = index === 0;
        const capstone = project.group === "academic";
        return (
          <li
            className={`plate${featured ? " plate--featured" : ""}${
              capstone ? " plate--capstone" : ""
            }`}
            key={project.slug}
          >
            <Link className="plate__link" href={`/case/${project.slug}`}>
              <span className="plate__frame" aria-hidden="true" />
              <span className="plate__top">
                <span className="plate__no">{project.number}</span>
                <span className="plate__cat">{project.category}</span>
              </span>
              <span className="plate__sigil" aria-hidden="true">
                <ProjectSigil slug={project.slug} />
              </span>
              <span className="plate__body">
                <span className="plate__name">{project.navTitle}</span>
                <span className="plate__summary">{project.summary}</span>
              </span>
              <span className="plate__foot">
                <StatusTag status={project.status} />
                <span className="plate__year">{project.year}</span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
