export function Ledger() {
  return (
    <div className="ledger">
      <dl className="ledger__counts">
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
      <p className="ledger__note">the index is the detail.</p>
    </div>
  );
}
