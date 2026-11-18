import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectSigil } from "@/components/SigilSprite";
import { StatusTag } from "@/components/StatusTag";
import styles from "./DossierList.module.css";

export function DossierList({
  projects,
  featured = false,
}: {
  projects: Project[];
  featured?: boolean;
}) {
  return (
    <ol className={styles.list}>
      {projects.map((project) => (
        <li key={project.slug}>
          <Link
            className={`${styles.row}${featured ? ` ${styles.featuredRow}` : ""}`}
            href={`/case/${project.slug}`}
          >
            <span className={styles.no}>{project.number}</span>
            {featured ? (
              <>
                <span className={styles.body}>
                  <span className={`${styles.name} ${styles.featuredName}`}>
                    {project.navTitle}
                  </span>
                  <span className={`${styles.summary} ${styles.featuredSummary}`}>
                    {project.summary}
                  </span>
                  <span className={styles.stack}>{project.stack.join(", ")}</span>
                </span>
                <span className={styles.side}>
                  <span className={styles.sideMeta}>
                    <span className={styles.group}>{project.group}</span>
                    <StatusTag status={project.status} />
                    <span className={styles.year}>{project.year}</span>
                  </span>
                  <span className={styles.sigilFeatured} aria-hidden="true">
                    <ProjectSigil slug={project.slug} />
                  </span>
                  <span className={styles.read}>read the case</span>
                </span>
              </>
            ) : (
              <>
                <span className={styles.sigil} aria-hidden="true">
                  <ProjectSigil slug={project.slug} />
                </span>
                <span className={styles.body}>
                  <span className={styles.name}>{project.navTitle}</span>
                  <span className={styles.summary}>{project.card}</span>
                </span>
                <span className={styles.meta}>
                  <StatusTag status={project.status} />
                  <span className={styles.year}>{project.year}</span>
                </span>
              </>
            )}
          </Link>
        </li>
      ))}
    </ol>
  );
}
