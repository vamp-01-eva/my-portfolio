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
    <div className="section-head">
      <div className="section-head__title">
        <p className="eyebrow">
          <span>{no}</span>
          {label}
        </p>
        <h2 id={id}>{title}</h2>
      </div>
      <p className="section-head__lede">{lede}</p>
    </div>
  );
}
