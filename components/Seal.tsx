export function Seal() {
  return (
    <figure className="seal" aria-hidden="true">
      <svg className="seal__rings" viewBox="0 0 400 400" focusable="false">
        <use href="#seal-rings" />
      </svg>
      <div className="seal__core">
        <span className="seal__number chrome">08</span>
        <span className="seal__unit">builds</span>
      </div>
      <span className="seal__label seal__label--a">web 03</span>
      <span className="seal__label seal__label--b">ai 04</span>
      <span className="seal__label seal__label--c">academic 01</span>
    </figure>
  );
}
