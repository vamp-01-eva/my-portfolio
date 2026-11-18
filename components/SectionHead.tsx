import styles from "./SectionHead.module.css";

export function SectionHead({
  no,
  label,
  title,
  lede,
  id,
}: {
  no: string;
  label: string;
  title: string;
  lede: string;
  id?: string;
}) {
  return (
    <header className={styles.head}>
      <div className={styles.row}>
        <p className="eyebrow">
          <span>{no}</span>
          {label}
        </p>
        <h2 id={id}>{title}</h2>
      </div>
      <p className={styles.lede}>{lede}</p>
    </header>
  );
}
