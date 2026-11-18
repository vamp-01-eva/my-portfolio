import Link from "next/link";
import { pipelineSteps } from "@/content/site";
import styles from "./PipelineStrip.module.css";

export function PipelineStrip({ currentStep }: { currentStep: number }) {
  return (
    <aside className={styles.strip} aria-label="Shorts pipeline position">
      <p className={styles.label}>part of the shorts pipeline</p>
      <ol className={styles.steps}>
        {pipelineSteps.map((step, index) => {
          const number = String(index + 1).padStart(2, "0");
          const isCurrent = currentStep === index + 1;
          return (
            <li
              className={`${styles.step}${isCurrent ? ` ${styles.current}` : ""}`}
              key={step.slug}
            >
              <span className={styles.no}>{number}</span>
              <Link href={`/case/${step.slug}`}>{step.label}</Link>
              <span className={styles.note}>{step.note}</span>
              {isCurrent ? (
                <span className={styles.now}>this case</span>
              ) : null}
            </li>
          );
        })}
      </ol>
      <p className={styles.foot}>
        The clipper cuts the first set, the reclipper cuts a new set, and the
        captioner adds captions after editing.
      </p>
    </aside>
  );
}
