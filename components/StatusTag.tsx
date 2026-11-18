import type { ProjectStatus } from "@/content/projects";
import { statusKey } from "@/lib/sigils";
import styles from "./StatusTag.module.css";

export function StatusTag({ status }: { status: ProjectStatus }) {
  const key = statusKey(status);
  return (
    <span className={`${styles.status} ${styles[key]}`}>
      <svg
        className={styles.glyph}
        viewBox="0 0 16 16"
        aria-hidden="true"
        focusable="false"
      >
        <use href={`#status-${key}`} />
      </svg>
      <span>{status}</span>
    </span>
  );
}
