import Link from "next/link";
import { pipelineSteps } from "@/content/site";

export function PipelineStrip({ currentStep }: { currentStep: number }) {
  return (
    <aside className="pipeline-strip" aria-label="Shorts pipeline position">
      <p className="pipeline-strip__label">part of the shorts pipeline</p>
      <ol>
        {pipelineSteps.map((step, index) => {
          const number = String(index + 1).padStart(2, "0");
          const isCurrent = currentStep === index + 1;
          return (
            <li
              className={`pipeline-strip__step${isCurrent ? " is-current" : ""}`}
              key={step.slug}
            >
              <span className="pipeline-strip__no">{number}</span>
              <Link href={`/case/${step.slug}`}>{step.label}</Link>
              <span className="pipeline-strip__note">{step.note}</span>
              {isCurrent ? (
                <span className="pipeline-strip__now">this case</span>
              ) : null}
            </li>
          );
        })}
      </ol>
      <p className="pipeline-strip__foot">
        The clipper and reclipper keep clips caption-free; the captioner adds
        captions after editing.
      </p>
    </aside>
  );
}
