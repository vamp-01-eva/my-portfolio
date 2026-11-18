import Link from "next/link";
import type { Project } from "@/content/projects";
import styles from "./CaseNext.module.css";

export function CaseNext({ next }: { next: Project }) {
  return (
    <nav className={styles.next} aria-label="Next case">
      <p className={styles.label}>next file</p>
      <Link className={styles.link} href={`/case/${next.slug}`}>
        <span className={styles.no}>{next.number}</span>
        {" "}
        <span className={styles.name}>{next.navTitle}</span>
      </Link>
    </nav>
  );
}
