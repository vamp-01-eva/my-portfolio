import styles from "./FieldPlate.module.css";

export function FieldPlate() {
  return (
    <figure
      className={styles.plate}
      data-slot="about-photo"
      data-alt="A photograph of Mark's workspace or hardware"
    >
      <span className={styles.grid} aria-hidden="true" />
      <svg
        className={styles.rings}
        viewBox="0 0 400 400"
        aria-hidden="true"
        focusable="false"
      >
        <use href="#seal-rings" />
      </svg>
      <svg
        className={styles.mark}
        viewBox="0 0 48 48"
        aria-hidden="true"
        focusable="false"
      >
        <use href="#mark-m" />
      </svg>
      <span className={styles.tag} aria-hidden="true">
        fig. 01 / field note
      </span>
      <figcaption className={styles.caption} data-keep>
        <span>antipolo, philippines</span>{" "}
        <span>field note / 2026</span>
      </figcaption>
    </figure>
  );
}
