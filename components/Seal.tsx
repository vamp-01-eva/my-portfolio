import styles from "./Seal.module.css";

export function Seal() {
  return (
    <figure className={styles.seal} aria-hidden="true">
      <svg className={styles.rings} viewBox="0 0 400 400" focusable="false">
        <use href="#seal-rings" />
      </svg>
      <div className={styles.core}>
        <span className={`${styles.number} chrome`}>09</span>
        <span className={styles.unit}>builds</span>
      </div>
      <span className={`${styles.label} ${styles.labelA}`}>web 04</span>
      <span className={`${styles.label} ${styles.labelB}`}>ai 04</span>
      <span className={`${styles.label} ${styles.labelC}`}>academic 01</span>
    </figure>
  );
}
