import type { Workflow } from "@/content/projects";

export function RouteFigure({
  workflow,
  className,
}: {
  workflow: Workflow;
  className?: string;
}) {
  return (
    <figure className={className ? `route-figure ${className}` : "route-figure"}>
      <div className="route">
        {workflow.nodes.map((node, index) => (
          <RouteNode
            key={`${node.label}-${index}`}
            node={node}
            index={index}
            last={index === workflow.nodes.length - 1}
          />
        ))}
      </div>
      {workflow.branch ? <p className="route__branch">{workflow.branch}</p> : null}
      <figcaption>{workflow.caption}</figcaption>
    </figure>
  );
}

function RouteNode({
  node,
  index,
  last,
}: {
  node: Workflow["nodes"][number];
  index: number;
  last: boolean;
}) {
  return (
    <>
      <div className={`route__node${node.accent ? " route__node--accent" : ""}`}>
        <span className="route__index">{String(index + 1).padStart(2, "0")}</span>
        <span className="route__label">{node.label}</span>
        <span className="route__note">{node.note}</span>
      </div>
      {last ? null : <span className="route__link" aria-hidden="true" />}
    </>
  );
}
