import type { ProjectGroup } from "@/content/projects";
import { GroupGlyph } from "@/components/SigilSprite";
import styles from "./GroupHead.module.css";

export function GroupHead({
  number,
  group,
  title,
  line,
  label = "group",
  id,
  count,
  variant = "rail",
}: {
  number: string;
  group: ProjectGroup;
  title: string;
  line: string;
  label?: string;
  id?: string;
  count?: number;
  variant?: "rail" | "title";
}) {
  const headingId = id ?? `${group}-title`;

  if (variant === "title") {
    return (
      <header className={styles.titleHead}>
        <p className={`eyebrow ${styles.folio}`}>
          <span>{number}</span>{" "}
          {label}
        </p>
        <div className={styles.titleCopy}>
          <h2 id={headingId}>{title}</h2>
          <p className={styles.line}>{line}</p>
        </div>
      </header>
    );
  }

  return (
    <div className={styles.head}>
      <span className={styles.mark} aria-hidden="true">
        <GroupGlyph group={group} />
      </span>
      <p className={`eyebrow ${styles.folio}`}>
        <span>{number}</span>{" "}
        {label}
      </p>
      {typeof count === "number" ? (
        <p className={styles.count}>
          <span className={styles.countNo}>{count}</span>{" "}
          {count === 1 ? "build" : "builds"}
        </p>
      ) : null}
      <h2 id={headingId} className={styles.title}>
        {title}
      </h2>
      <p className={styles.line}>{line}</p>
    </div>
  );
}
