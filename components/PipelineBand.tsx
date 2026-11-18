import { pipelineRoute } from "@/content/site";
import { RouteFigure } from "@/components/RouteFigure";
import styles from "./PipelineBand.module.css";

export function PipelineBand() {
  return (
    <div className={styles.band}>
      <div className={styles.head}>
        <p className="eyebrow">
          <span>pipeline</span> three connected tools
        </p>
        <div className={styles.copy}>
          <h3>the shorts pipeline</h3>
          <p className={styles.text}>
            One source video moves through three tools. The clipper and reclipper
            produce caption-free clips; the captioner adds captions after editing.
          </p>
        </div>
      </div>
      <RouteFigure workflow={pipelineRoute} className={styles.route} />
    </div>
  );
}
