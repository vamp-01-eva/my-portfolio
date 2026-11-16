import { pipelineRoute } from "@/content/site";
import { RouteFigure } from "@/components/RouteFigure";

export function PipelineBand() {
  return (
    <div className="pipeline-band">
      <div className="pipeline-band__head">
        <p className="eyebrow">
          <span>pipeline</span>three connected tools
        </p>
        <h3>the shorts pipeline</h3>
        <p>
          One source video moves through three tools. The clipper and reclipper
          produce caption-free clips; the captioner adds captions after editing.
        </p>
      </div>
      <RouteFigure
        workflow={pipelineRoute}
        className="route-figure--pipeline"
      />
    </div>
  );
}
