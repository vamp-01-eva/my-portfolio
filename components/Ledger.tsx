import styles from "./Ledger.module.css";

export function Ledger() {
  return (
    <div className={styles.ledger}>
      <dl className={styles.counts}>
        <div>
          <dt>web applications</dt>
          <dd>04</dd>
        </div>
        <div>
          <dt>ai automation</dt>
          <dd>04</dd>
        </div>
        <div>
          <dt>academic</dt>
          <dd>01</dd>
        </div>
      </dl>
      <p className={styles.note}>nine builds, three groups.</p>
    </div>
  );
}
