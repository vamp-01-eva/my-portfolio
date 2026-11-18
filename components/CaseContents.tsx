import { caseSections } from "@/content/site";
import styles from "./CaseContents.module.css";

export function CaseContents() {
  return (
    <nav className={styles.contents} aria-label="Case contents">
      <p className={styles.title}>in this case</p>
      <ol className={styles.list}>
        {caseSections.map((section, index) => (
          <li key={section.id}>
            <a className={styles.link} href={`#${section.id}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {" "}
              {section.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
