import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectSigil } from "@/components/SigilSprite";
import { StatusTag } from "@/components/StatusTag";
import styles from "./PlateWall.module.css";

export function PlateWall({ projects }: { projects: Project[] }) {
  return (
    <div className={styles.wall}>
      <div className={styles.inner}>
        <ul className={styles.grid} aria-label="Project index">
          {projects.map((project, index) => {
            const featured = index === 0;
            const capstone = project.group === "academic";
            return (
              <li
                className={`${styles.cell}${featured ? ` ${styles.featured}` : ""}${
                  capstone ? ` ${styles.capstone}` : ""
                }`}
                key={project.slug}
              >
                <Link className={styles.link} href={`/case/${project.slug}`}>
                  <span className={styles.top}>
                    <span className={styles.no}>{project.number}</span>
                    <span className={styles.cat}>{project.category}</span>
                  </span>
                  <span className={styles.sigil} aria-hidden="true">
                    <ProjectSigil slug={project.slug} />
                  </span>
                  <span className={styles.body}>
                    <span className={styles.name}>{project.navTitle}</span>
                    <span className={styles.summary}>{project.summary}</span>
                  </span>
                  <span className={styles.foot}>
                    <StatusTag status={project.status} />
                    <span className={styles.footRight}>
                      <span className={styles.year}>{project.year}</span>
                      {featured ? (
                        <span className={styles.read}>read the case</span>
                      ) : null}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
