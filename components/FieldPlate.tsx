export function FieldPlate() {
  return (
    <figure
      className="field-plate"
      data-slot="about-photo"
      data-alt="A photograph of Mark's workspace or hardware"
    >
      <span className="field-plate__grid" aria-hidden="true" />
      <svg
        className="field-plate__rings"
        viewBox="0 0 400 400"
        aria-hidden="true"
        focusable="false"
      >
        <use href="#seal-rings" />
      </svg>
      <svg
        className="field-plate__mark"
        viewBox="0 0 48 48"
        aria-hidden="true"
        focusable="false"
      >
        <use href="#mark-m" />
      </svg>
      <span className="field-plate__tag" aria-hidden="true">
        fig. 01 / field note
      </span>
      <figcaption className="field-plate__caption" data-keep>
        <span>antipolo, philippines</span>
        <span>field note / 2026</span>
      </figcaption>
    </figure>
  );
}
